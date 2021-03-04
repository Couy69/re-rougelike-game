import { formula } from './formula';

function deepCopy(data) {
  return JSON.parse(JSON.stringify(data))
}
function getRandomNumber(data) {
  return Math.random()
}

/**
 * @param {number} num 
 * @param {number} places 保留几位小数点
 */

function numberFixed(num,places){
  return Number(num.toFixed(places))
}

/**
 * 战斗计算函数
 * @param {obj} playerAttribute 玩家属性
 * @param {obj} monsterAttribute 怪物属性
 */
var combatTimer = {}
function combatCalculation(playerAttribute, monsterAttribute) {
  let p = playerAttribute,
    m = monsterAttribute
  DMGCalculation(p, m)
  DMGCalculation(m, p)
}

function DMGCalculation(attacker, defender) {
  combatTimer = setTimeout(() => {
    //伤害计算
    var takeDMGPercent = formula.methods.armorFormula(defender.ARMOR - attacker.ARP)

    let takeDmg = attacker.ATK*takeDMGPercent

    if(evadeCalculation(attacker, defender)){
      takeDmg = 0
      console.log("miss")
    }

    if(critCalculation(attacker, defender)){
      takeDmg = takeDmg*attacker.CRITDMG
      console.log("CRIT")
    }

    

    takeDmg = Math.ceil(takeDmg)
    defender.CURHP = defender.CURHP - takeDmg
    
    //伤害结算
    if (defender.type == 'player') {
      console.log("palyer tack dmg:" + takeDmg + ",剩余血量：" + defender.CURHP)
    } else {
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
    
    DMGCalculation(attacker, defender)
  }, 1000 / attacker.ATKSPEED)
}
function evadeCalculation(attacker, defender) {
  var a = getRandomNumber()
  if(a<defender.EVADE){
    return true
  }
}
function critCalculation(attacker, defender) {
  var a = getRandomNumber()
  if(a<attacker.CRIT){
    return true
  }
}

/**
 * 根据玩家四维属性计算属性
 * @param {obj} playerAttribute 玩家属性
 */
function attributeCalculation(playerAttribute){
  var a =playerAttribute
  a.ATK += a.STR*0.5
  a.ARP += a.STR*0.2
  a.ATKSP += a.AGI*0.5
  a.EVADE += a.AGI*0.0005
  a.HP += a.STA*15
  a.HPRS += a.STA*0.03
  a.SORA += a.INT*0.005
}


export default {
  deepCopy,getRandomNumber,numberFixed,combatCalculation
}