/**
 * 人物初始属性设置
 * @author couy
 */

export const characterConfig = {
  data() {
    return {
      character1: {
        name: '黑羽上弦灭弓',
        tachie:'play2.gif',
        attr: {
          //一级属性   此一级非LV1
          MAXHP: 100,
          CURHP: 100,
          ATK: 10, //攻击力
          ARMOR: 2, //护甲
          EVADE: 0.5, //闪避
          ATKSPEED: 1.5, //每秒攻击次数
          ATKSI: 0.6, //基础攻击间隔
          ARP: 1, //穿甲
          CRIT: 0.3, //暴击几率
          CRITDMG: 1.5, //暴击伤害
          HPRS: 1, //每秒生命恢复
          HPSTEAL: 0, //生命偷取
          // 二级属性
          ATKSP: 0, //攻击速度加成
          LVGETATK:3,
          LVGETARMOR:1,
          LVGETHPRS:0,
          LVGETATKSP:0,
          //人物属性
          EXP: 0,
          EXPNL: 100, //升到下一级需要的经验
          LV: 1,
        }
      }
    }
  },
};