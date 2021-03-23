/**
 * 挑战怪物属性设置
 * @author couy
 */

export const dungeonsConfig = {
  data() {
    return {
      dungeonsConfig: {
        // 循环挑战怪物类型设置
        loop: {
          lv1: {
            name: '循环挑战 lv1',
            tachie: 'lv1.gif',
            exp: 20,
            attr: {
              MAXHP: 60,
              CURHP: 60,
              ATKMIN: 5,
              ATKMAX: 7,
              ARMOR: 0,
              EVADE: 0,
              ATKSPEED: 0.6,
              ATKSI: 0.6,
              ARP: 7,
              CRIT: 0,
              CRITDMG: 1.5,
              HPRS: 7,
              HPSTEAL: 0,
              unitType: 4,
              ATKSP: 0,
              LV: 1,
            },
          }
        },
      }
    }
  },
};