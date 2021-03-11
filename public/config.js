const config = {
  playerAttribute: {
    name: 'player',
    unitType: {
      name: "英雄单位",
      code: 1
    },
    MAXHP: 100,
    CURHP: 100,
    // 战斗属性
    ATK: 10, //攻击力
    ARMOR: 2, //护甲
    EVADE: 0.5, //闪避
    ATKSPEED: 1.5, //攻击速度
    ATKSI: 0.6, //基础攻击间隔
    ATKSP: 0, //攻击速度加成
    ARP: 1, //穿甲
    CRIT: 0.3, //暴击几率
    CRITDMG: 1.5, //暴击伤害
    HPRS: 1, //每秒生命恢复
    //人物属性
    GOLD: 0, //拥有的金币
    EXP: 0,
    EXPNL: 100, //升到下一级需要的经验
    LV: 1,
  },
  monsterAttribute: {
    type: 'monster',
    unitType: {
      name: "普通单位",
      code: 3
    },
    MAXHP: 20000,
    CURHP: 20000,
    ATK: 800,
    ARMOR: 200,
    EVADE: 0,
    ATKSPEED: 1,
    ARP: 1,
    CRIT: 0,
    CRITDMG: 1.5,
  },
  unitType: [{
    name: "英雄单位",
    code: 1
  }, {
    name: "精英单位",
    code: 2
  }, {
    name: "普通单位",
    code: 3
  }]
}