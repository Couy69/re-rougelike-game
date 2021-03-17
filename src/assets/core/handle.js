import {
  formula
} from './formula';
import CryptoJS from 'crypto-js';
import vuex from '../../store'

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

function saveGame(){
  let saveData = encrypt(JSON.stringify(vuex.state.PLAYER))
  localStorage.setItem('_reSD',saveData)
}
function loadGame(){
  try {
    let saveData = JSON.parse(decrypt(localStorage.getItem("_reSD")))
    if(saveData){
      vuex.commit('set_player_attribute',saveData)
      return true
    }else{
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
 */
var combatTimer = {}

function combatCalculation(playerAttribute, monsterAttribute, component) {
  let p = playerAttribute,
    m = monsterAttribute
  DMGCalculation(p, m, component)
  DMGCalculation(m, p, component)
}

function DMGCalculation(attacker, defender, component) {
  combatTimer = setTimeout(() => {
    //伤害计算
    var takeDMGPercent = formula.methods.armorFormula(defender.ARMOR - attacker.ARP)
    attacker.ATK = parseInt(getRandomNumber() * (attacker.ATKMAX - attacker.ATKMIN)) + attacker.ATKMIN
    let takeDmg = attacker.ATK * takeDMGPercent
    let info = {
      show: true,
      type: 'normol'
    }


    if (critCalculation(attacker, defender)) {
      takeDmg = takeDmg * attacker.CRITDMG
      info.type = 'crit'
    }

    if (evadeCalculation(attacker, defender)) {
      takeDmg = 0
      info.type = 'miss'
      info.msg = 'MISS'
    }

    takeDmg = Math.ceil(takeDmg)
    let curHP = (defender.CURHP - takeDmg) < 0 ? 0 : defender.CURHP - takeDmg
    defender.CURHP = curHP
    info.msg = '-' + takeDmg
    //伤害结算
    if (defender.name == 'player') {
      component.showDmgInfo(info, 'player')
      console.log("palyer tack dmg:" + takeDmg + ",剩余血量：" + defender.CURHP)
    } else {
      component.showDmgInfo(info, 'monster')
      console.log("monster take dmg:" + takeDmg + ",剩余血量：" + defender.CURHP)
    }

    //战斗结束检测
    if (defender.CURHP <= 0 || attacker.CURHP <= 0) {
      if (defender.type == 'player') {
        clearTimeout(combatTimer)
        return console.log('palyerDead')
      } else {
        clearTimeout(combatTimer)
        return console.log('palyerWin')
      }
    }

    DMGCalculation(attacker, defender, component)
  }, 1000 / attacker.ATKSPEED)
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

export default {
  deepCopy,
  getRandomNumber,
  numberFixed,
  combatCalculation,
  encrypt,
  decrypt,
  saveGame,
  loadGame
}