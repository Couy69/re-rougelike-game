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
      ARP: 1, //穿甲
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
  setPlayerBaseAttr(data){
    this.playerBaseAttr = data
  }
  setPlayerWeapon(data) {
    this.state.playerAttribute.weapon = data
    this.setPlayerFinalAttribute()
  }
  setPlayerArmor(data) {
    this.state.playerAttribute.armor = data
    this.setPlayerFinalAttribute()
  }
  setPlayerRing(data) {
    this.state.playerAttribute.ring = data
    this.setPlayerFinalAttribute()
  }
  setPlayerShoes(data) {
    this.state.playerAttribute.shoes = data
    this.setPlayerFinalAttribute()
  }
  setPlayerFinalAttribute() {
    this.playerFinalAttr = this.playerBaseAttr
  }

}
export default Player