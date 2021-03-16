/**
 * 人物初始属性设置
 * @author couy
 */

export const characterConfig = {
  data() {
    return {
      characterConfig: [{
          name: '黑羽上弦灭弓',
          tachie: 'play2.gif',
          attr: {
            //一级属性   此一级非LV1
            MAXHP: 100,
            CURHP: 100,
            ATKMIN: 10, //攻击力
            ATKMAX: 13, //攻击力
            ARMOR: 0, //护甲
            EVADE: 0, //闪避
            ATKSPEED: 0.6, //每秒攻击次数
            ATKSI: 0.6, //基础攻击间隔
            ARP: 1, //穿甲
            CRIT: 0, //暴击几率
            CRITDMG: 1.5, //暴击伤害
            HPRS: 1, //每秒生命恢复
            HPSTEAL: 0, //生命偷取
            // 二级属性
            ATKSP: 0, //攻击速度加成
            LVGETATK: 3,
            LVGETARMOR: 0,
            LVGETHPRS: 0,
            LVGETATKSP: 1,
            //人物属性
            EXP: 0,
            EXPNL: 100, //升到下一级需要的经验
            LV: 1,
          },
          desc: [
            '升级获取攻击力+3',
            '升级获取攻击速度+1',
          ]
        },
        {
          name: '呆毛大姐头',
          tachie: 'play3.gif',
          attr: {
            //一级属性   此一级非LV1
            MAXHP: 100,
            CURHP: 100,
            ATKMIN: 10, //攻击力
            ATKMAX: 13, //攻击力
            ARMOR: 0, //护甲
            EVADE: 0, //闪避
            ATKSPEED: 0.6, //每秒攻击次数
            ATKSI: 0.6, //基础攻击间隔
            ARP: 1, //穿甲
            CRIT: 0, //暴击几率
            CRITDMG: 1.5, //暴击伤害
            HPRS: 1, //每秒生命恢复
            HPSTEAL: 0, //生命偷取
            // 二级属性
            ATKSP: 0, //攻击速度加成
            LVGETATK: 4,
            LVGETARMOR: 0,
            LVGETHPRS: 0,
            LVGETATKSP: 0,
            //人物属性
            EXP: 0,
            EXPNL: 100, //升到下一级需要的经验
            LV: 1,
          },
          desc: [
            '升级获取攻击力+4',
          ]
        },
        {
          name: '我我我少女',
          tachie: 'play1.gif',
          attr: {
            //一级属性   此一级非LV1
            MAXHP: 100,
            CURHP: 100,
            ATKMIN: 10, //攻击力
            ATKMAX: 13, //攻击力
            ARMOR: 0, //护甲
            EVADE: 0, //闪避
            ATKSPEED: 0.6, //每秒攻击次数
            ATKSI: 0.6, //基础攻击间隔
            ARP: 1, //穿甲
            CRIT: 0, //暴击几率
            CRITDMG: 1.5, //暴击伤害
            HPRS: 1, //每秒生命恢复
            HPSTEAL: 0, //生命偷取
            // 二级属性
            ATKSP: 0, //攻击速度加成
            LVGETATK: 2,
            LVGETARMOR: 0,
            LVGETHPRS: 0,
            LVGETATKSP: 2,
            //人物属性
            EXP: 0,
            EXPNL: 100, //升到下一级需要的经验
            LV: 1,
          },
          desc: [
            '升级获取攻击力+2',
            '升级获取攻击速度+2',
          ]
        }
      ]
    }
  },
};