import {
  formula
} from './formula';
import CryptoJS from 'crypto-js';
import vuex from '../../store'
import {
  equiAttributeWeapon
} from '../config/equiAttributeWeapon'

function deepCopy(data) {
  return JSON.parse(JSON.stringify(data))
}

function getRandomNumber(data) {
  return Math.random()
}

/**
 * 存档加密与解密，正式服上的密钥是不同的
 * @param {String} data 
 * @returns 
 */
function encrypt(data) {
  return CryptoJS.AES.encrypt(data, config.secretKey).toString();
}

function decrypt(data) {
  let bytes = CryptoJS.AES.decrypt(data, config.secretKey);
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText
}

/**
 * @param {number} num 
 * @param {number} places 保留几位小数点
 */

function numberFixed(num, places) {
  return Number(num.toFixed(places))
}

function saveGame() {
  let saveData = encrypt(JSON.stringify(vuex.state.PLAYER))
  localStorage.setItem('_reSD', saveData)
}

function loadGame() {
  try {
    let sd = localStorage.getItem("_reSD")
    if (sd) {
      let saveData = JSON.parse(decrypt(sd))
      vuex.commit('set_player_attribute', saveData)
      vuex.commit("set_sys_info", {
        msg: `
              已加载存档
            `,
        type: "white"
      })
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

/**
 * 战斗计算函数
 * @param {obj} playerAttribute 玩家属性
 * @param {obj} monsterAttribute 怪物属性
 * @param {obj} component 需要更新被击动画的对应组件实例
 */
var combatTimer = {}
var combatTimers = []

//整个战斗过程由两大块延时器组成，玩家或者怪物完成攻击时启动下一个延时器
//战斗结束清理所有延时器
function combatCalculation(playerAttribute, monsterAttribute, component) {
  let p = playerAttribute,
    m = monsterAttribute
  DMGCalculation(p, m, component)
  DMGCalculation(m, p, component)
}

function DMGCalculation(attacker, defender, component) {
  combatTimer = setTimeout(() => {
    //承受伤害计算
    var takeDMGPercent = formula.methods.armorFormula(defender.ARMOR - attacker.ARP)
    attacker.ATK = parseInt(getRandomNumber() * (attacker.ATKMAX - attacker.ATKMIN)) + attacker.ATKMIN
    let takeDmg = attacker.ATK * takeDMGPercent
    let info = {
      show: true,
      type: 'normol'
    }

    //计算暴击
    if (critCalculation(attacker, defender)) {
      takeDmg = takeDmg * attacker.CRITDMG
      info.type = 'crit'
    }

    //计算闪避
    if (evadeCalculation(attacker, defender)) {
      takeDmg = 0
      info.type = 'miss'
      info.msg = 'MISS'
    }

    //计算最终伤害,并适应血量变动
    takeDmg = Math.ceil(takeDmg)
    let curHP = (defender.CURHP - takeDmg) < 0 ? 0 : defender.CURHP - takeDmg
    defender.CURHP = curHP
    info.msg = '-' + takeDmg

    //伤害结算，更新人物被击动画与血条动画
    if (defender.unitType == '1') {
      component.showDmgInfo(info, 'player')
      // console.log("palyer tack dmg:" + takeDmg + ",剩余血量：" + defender.CURHP)
    } else {
      component.showDmgInfo(info, 'monster')
      // console.log("monster take dmg:" + takeDmg + ",剩余血量：" + defender.CURHP)
    }

    //战斗结束检测
    if (defender.CURHP <= 0 || attacker.CURHP <= 0) {
      if (defender.unitType == '1') {
        //玩家死亡
        clearAllCombatTimer()
        missionFail()
        return console.log('palyerDead')
      } else {
        //玩家胜利
        clearAllCombatTimer()
        missionSuccess(defender)
        return console.log('palyerWin')
      }
    }

    DMGCalculation(attacker, defender, component)
  }, 1000 / attacker.ATKSPEED)
  combatTimers.push(combatTimer)
}

function clearAllCombatTimer() {
  combatTimers.map(item => {
    clearTimeout(item)
  })
}

function evadeCalculation(attacker, defender) {
  var a = getRandomNumber()
  if (a < defender.EVADE) {
    return true
  }
}

function critCalculation(attacker, defender) {
  var a = getRandomNumber()
  if (a < attacker.CRIT) {
    return true
  }
}

function missionFail() {
  // 结束副本挑战
  vuex.commit('set_monster_attribute', {})
  vuex.commit("set_sys_info", {
    msg: `
          战斗失败，打不过了阿菜鸡
        `,
    type: "red"
  })
}

function missionSuccess(attr) {
  equiGet(attr)
  vuex.commit("set_sys_info", {
    msg: `
          你获胜了，获得了${attr.EXP}点经验
        `,
    type: "green"
  })
}

/**
 * 计算装备获取
 * @param {obj} attr 
 */
function equiGet(attr) {
  let equiLv, equiQuality, equiType
  //计算装备等级，一般情况下为玩家等级，挑战低级副本会限定等级上限
  let monsterLv = attr.LV
  let plarLv = vuex.state.PLAYER.playerFinalAttr.attr.LV
  equiLv = plarLv - monsterLv > 5 ? monsterLv + 5 : plarLv
  console.log('装备等级：' + equiLv)

  //根据副本类型计算获取的装备种类与稀有度
  let equiOutputProbability = config.configEquiOutputProbability[attr.unitType]
  equiOutputProbability.map((item, index) => {
    if (getRandomNumber() < item) {
      equiQuality = config.configEquiQuality[index]
      // switch (key) {
      //   case value:

      //     break;

      //   default:
      //     break;
      // }
      equiCreate(equiLv, equiQuality, equiAttributeWeapon.data())
    }
  })
}

function equiCreate(equiLv, equiQuality, equiAttr) {
  console.log(equiLv, equiQuality, equiAttr)
  let equi = {}
  equi.lv = equiLv
  equi.itemType = equiAttr.type
  equi.category = equiBaseAttr(equiLv, equiQuality, equiAttr)
  console.log(equi)
}

function equiBaseAttr(equiLv, equiQuality, equiAttr) {
  let category = equiAttr.category[Math.floor((Math.random() * equiAttr.category.length))]
  category.entry.map(item => {
    switch (item.type) {
      case 'ATK':
        var random = equiLv * item.valCoefficient + (Math.random() * equiLv / 2 + 1)
        random = Math.ceil(random * equiQuality.qualityCoefficient)
        item.value = random
        break;
      default:
        break;
    }
  })
  return category
}

export default {
  deepCopy,
  getRandomNumber,
  numberFixed,
  combatCalculation,
  encrypt,
  decrypt,
  saveGame,
  loadGame,
  equiGet
}