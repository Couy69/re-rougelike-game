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
            attr: {
              MAXHP: 20,
              CURHP: 20,
              ATKMIN: 5,
              ATKMAX: 7,
              ARMOR: 0,
              EVADE: 0,
              ATKSPEED: 1,
              ATKSI: 1,
              ARP:0,
              CRIT: 0,
              CRITDMG: 1.5,
              HPRS: 0,
              HPSTEAL: 0,
              unitType: 4,
              ATKSP: 0,
              LV: 1,
              EXP:20,
            },
          },
          lv2: {
            name: '循环挑战 lv2',
            tachie: 'lv2.gif',
            attr: {
              MAXHP: 260,
              CURHP: 260,
              ATKMIN: 15,
              ATKMAX: 17,
              ARMOR: 0,
              EVADE: 0,
              ATKSPEED: 1,
              ATKSI: 1,
              ARP:0,
              CRIT: 0,
              CRITDMG: 1.5,
              HPRS: 0,
              HPSTEAL: 0,
              unitType: 4,
              ATKSP: 0,
              LV: 7,
              EXP:30,
            },
          },
          lv3: {
            name: '循环挑战 lv3',
            tachie: 'lv3.gif',
            attr: {
              MAXHP: 460,
              CURHP: 460,
              ATKMIN: 25,
              ATKMAX: 27,
              ARMOR: 0,
              EVADE: 0,
              ATKSPEED: 1,
              ATKSI: 1,
              ARP:0,
              CRIT: 0,
              CRITDMG: 1.5,
              HPRS: 0,
              HPSTEAL: 0,
              unitType: 4,
              ATKSP: 0,
              LV: 13,
              EXP:40,
            },
          },
          lv4: {
            name: '循环挑战 lv4',
            tachie: 'lv4.gif',
            attr: {
              MAXHP: 660,
              CURHP: 660,
              ATKMIN: 35,
              ATKMAX: 37,
              ARMOR: 0,
              EVADE: 0,
              ATKSPEED: 1,
              ATKSI: 1,
              ARP:0,
              CRIT: 0,
              CRITDMG: 1.5,
              HPRS: 0,
              HPSTEAL: 0,
              unitType: 4,
              ATKSP: 0,
              LV: 1,
              EXP:50,
            },
          },
          lv5: {
            name: '循环挑战 lv5',
            tachie: 'lv5.gif',
            attr: {
              MAXHP: 860,
              CURHP: 860,
              ATKMIN: 55,
              ATKMAX: 57,
              ARMOR: 0,
              EVADE: 0,
              ATKSPEED: 1,
              ATKSI: 1,
              ARP:0,
              CRIT: 0,
              CRITDMG: 1.5,
              HPRS: 0,
              HPSTEAL: 0,
              unitType: 4,
              ATKSP: 0,
              LV: 1,
              EXP:60,
            },
          },
        },
      }
    }
  },
};