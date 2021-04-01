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
      attr:{
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
        EXP: 0,
        EXPNL: 100, //升到下一级需要的经验
        LV: 1,  
      }
      
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
    let entry = [],
    playerBaseAttr = JSON.parse(JSON.stringify(this.playerBaseAttr)),
    attribute = playerBaseAttr.attr,hpPercent=0;

    //保存当前血量百分比 替换装备时保持血量百分比
    if(JSON.stringify(this.playerFinalAttr)!='{}'){
      if (this.playerFinalAttr.attr.CURHP && this.playerFinalAttr.attr.MAXHP) {
        hpPercent = this.playerFinalAttr.attr.CURHP / this.playerFinalAttr.attr.MAXHP
      }  
    }
    
    // 基础属性全部使用加法计算即可
    if (JSON.stringify(this.playerWeapon) != '{}') {
      this.playerWeapon.category.entry.map(item => {
        entry.push(item)
      })
      this.playerWeapon.extraEntry.map(item => {
        entry.push(item)
      })
      console.log(entry)
    }
    if (JSON.stringify(this.playerArmor) != '{}') {
      this.playerArmor.category.entry.map(item => {
        entry.push(item)
      })
      this.playerArmor.extraEntry.map(item => {
        entry.push(item)
      })
      console.log(entry)
    }
    if (JSON.stringify(this.playerRing) != '{}') {
      this.playerRing.category.entry.map(item => {
        entry.push(item)
      })
      this.playerRing.extraEntry.map(item => {
        entry.push(item)
      })
      console.log(entry)
    }
    if (JSON.stringify(this.playerShoes) != '{}') {
      this.playerShoes.category.entry.map(item => {
        entry.push(item)
      })
      this.playerShoes.extraEntry.map(item => {
        entry.push(item)
      })
    }
    entry.map(item => {
      switch (item.type) {
        case 'ATK':
          attribute.ATKMAX += item.value
          attribute.ATKMIN += item.value
          attribute.ATKMAX = formula.methods.toNumber(attribute.ATKMAX)
          attribute.ATKMIN = formula.methods.toNumber(attribute.ATKMIN)
          break;
        case 'ARMOR':
          attribute.ARMOR += item.value
          attribute.ARMOR = formula.methods.toNumber(attribute.ARMOR)
          break;
        case 'HP':
          attribute.MAXHP += item.value
          attribute.MAXHP = formula.methods.toNumber(attribute.MAXHP,0)
          break;
        case 'ARP':
          attribute.ARP += (item.value)
          attribute.ARP = formula.methods.toNumber(attribute.ARP)
          break;
        case 'HPRS':
          attribute.HPRS += (item.value)
          attribute.HPRS = formula.methods.toNumber(attribute.HPRS)
          break;
        case 'HPSTEAL':
          attribute.HPSTEAL += (item.value)
          attribute.HPSTEAL = formula.methods.toNumber(attribute.HPSTEAL)
          break;
        case 'ATKSP':
          attribute.ATKSP +=(item.value)
          attribute.ATKSP = formula.methods.toNumber(attribute.ATKSP)
          break;
        case 'EVADE':
          attribute.EVADE += (item.value)
          attribute.EVADE = formula.methods.toNumber(attribute.EVADE)
          break;
        case 'CRIT':
          attribute.CRIT += (item.value)
          attribute.CRIT = formula.methods.toNumber(attribute.CRIT)
          break;
        case 'CRITDMG':
          attribute.CRITDMG += (item.value)
          attribute.CRITDMG = formula.methods.toNumber(attribute.CRITDMG)
          break;
        default:
          break;
      }
    })
    formula.methods.ATKSpeedFormula(attribute)
    
    if (hpPercent) {
      attribute.CURHP = parseInt(attribute.MAXHP * hpPercent)
    } else {
      attribute.CURHP = attribute.MAXHP
    }

    this.playerFinalAttr = playerBaseAttr
  }

}
export default Player