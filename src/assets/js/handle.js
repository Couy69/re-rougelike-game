function deepCopy(data) {
  return JSON.parse(JSON.stringify(data))
}
function getRandomNumber(data) {
  return Math.random()
}
/**
 * 
 * @param {obj} playerAttribute 玩家属性
 * @param {obj} monsterAttribute 怪物属性
 */
let A = playerAttribute = {
  type: 'player',
  MAXHP: 100,
  CURHP: 100,
  ATK: 10,
  ARMOR: 2,
  EVADE: 0.5,
  ATKSPEED: 1,
  ARP: 1,
  CRIT: 0.1,
  CRITDMG: 1.5,
  STR: 10,
  STA: 10,
  AGI: 10,
  INT: 10,
}
let B = monsterAttribute = {
  type: 'monster',
  MAXHP: 100,
  CURHP: 100,
  ATK: 8,
  ARMOR: 1,
  EVADE: 0,
  ATKSPEED: 0.6,
  ARP: 1,
  CRIT: 0,
  CRITDMG: 1.5,
}
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
    let takeDmg = attacker.ATK - (defender.ARMOR - attacker.ARP)

    if(evadeCalculation(attacker, defender)){
      takeDmg = 0
      console.log("miss")
    }

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
combatCalculation(A, B)


export default {
  deepCopy,
}