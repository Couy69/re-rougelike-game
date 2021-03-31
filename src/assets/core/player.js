import {
  formula
} from './formula';
class Player {
  constructor() {
    this.playerBaseAttr = {}
    this.playerFinalAttr = {
      name: 'player',
      unitType: {
        name: "英雄单位",
        code: 1
      },
      //一级属性
      MAXHP: 100,
      CURHP: 100,
      ATKMIN: 10, //攻击力
      ATKMAX: 13, //攻击力
      ARMOR: 2, //护甲
      EVADE: 0.5, //闪避
      ATKSPEED: 1.5, //每秒攻击次数
      BAT: 0.6, //基础攻击间隔
      ARP: 1, //无视护甲
      CRIT: 0.3, //暴击几率
      CRITDMG: 1.5, //暴击伤害
      HPRS: 1, //每秒生命恢复
      HPSTEAL: 0, //生命偷取
      // 二级属性
      ATKSP: 0, //攻击速度加成
      //人物属性
      GOLD: 0, //拥有的金币
      EXP: 0,
      EXPNL: 100, //升到下一级需要的经验
      LV: 1,
    }
    this.playerArmor = {}
    this.playerWeapon = {}
    this.playerRing = {}
    this.playerShoes = {}
  }
  setPlayerBaseAttr(data) {
    this.playerBaseAttr = data
  }
  setPlayerWeapon(data) {
    this.playerWeapon = data
    this.setPlayerFinalAttribute()
  }
  setPlayerArmor(data) {
    this.playerArmor = data
    this.setPlayerFinalAttribute()
  }
  setPlayerRing(data) {
    this.playerRing = data
    this.setPlayerFinalAttribute()
  }
  setPlayerShoes(data) {
    this.playerShoes = data
    this.setPlayerFinalAttribute()
  }
  setPlayerFinalAttribute() {
    // console.log()
    let entry = [],
    playerBaseAttr = JSON.parse(JSON.stringify(this.playerBaseAttr)),
    attribute = playerBaseAttr.attr
    if (JSON.stringify(this.playerWeapon) != '{}') {
      this.playerWeapon.category.entry.map(item => {
        entry.push(item)
      })
      this.playerWeapon.extraEntry.map(item => {
        entry.push(item)
      })
      console.log(entry)
    }
    console.log(attribute)
    entry.map(item => {
      switch (item.type) {
        case 'ATK':
          attribute.ATKMAX += formula.methods.toNumber(item.value)
          attribute.ATKMIN += formula.methods.toNumber(item.value)
          break;
        case 'ARMOR':
          attribute.ARMOR += formula.methods.toNumber(item.value)
          break;
        case 'HP':
          attribute.MAXHP += formula.methods.toNumber(item.value)
          break;
        case 'ARP':
          attribute.ARP += formula.methods.toNumber(item.value)
          break;
        case 'HPRS':
          attribute.HPRS += formula.methods.toNumber(item.value)
          break;
        case 'HPSTEAL':
          attribute.HPSTEAL += formula.methods.toNumber(item.value)
          break;
        case 'ATKSP':
          attribute.ATKSP += formula.methods.toNumber(item.value)
          break;
        case 'EVADE':
          attribute.EVADE += formula.methods.toNumber(item.value)
          break;
        case 'CRIT':
          attribute.CRIT += formula.methods.toNumber(item.value)
          break;
        case 'CRITDMG':
          attribute.CRITDMG += formula.methods.toNumber(item.value)
          break;
        default:
          break;
      }
    })
    this.playerFinalAttr = playerBaseAttr
  }

}
export default Player