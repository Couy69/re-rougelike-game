/**
 * 戒指属性配置文件
 * @author couy
 */

export const equiAttributeRing = {
  data() {
    return {
      type: {
        name: "戒指",
        code: 'ring'
      },
      category: [{
        name: '白钨戒指',
        iconSrc: './icons/R1.png',
        entry: [{
          valCoefficient: 0.5,
          type: 'ARMOR',
          name: '护甲'
        }, {
          valCoefficient: 4,
          type: 'HP',
          name: '生命上限',
        }]
      },{
        name: '萤石戒指',
        iconSrc: './icons/R2.png',
        entry: [{
          valCoefficient: 1.6,
          type: 'ATK',
          name: '攻击力'
        },{
          valCoefficient: 0.4,
          type: 'CRIT',
          name: '暴击率',
          unit:'percent'
        }]
      },{
        name: '红宝石戒指',
        iconSrc: './icons/R3.png',
        entry: [{
          valCoefficient: 1.6,
          type: 'ATK',
          name: '攻击力'
        },{
          valCoefficient: 0.1,
          type: 'HPSTEAL',
          name: '生命偷取',
          unit: 'percent'
        }]
      },{
        name: '绿宝石戒指',
        iconSrc: './icons/R4.png',
        entry: [{
          valCoefficient: 1.6,
          type: 'ATK',
          name: '攻击力'
        },{
          valCoefficient: 1,
          type: 'ATKSP',
          name: '攻击速度',
        }]
      },{
        name: '蓝宝石戒指',
        iconSrc: './icons/R5.png',
        entry: [{
          valCoefficient: 1.6,
          type: 'ATK',
          name: '攻击力'
        },{
          valCoefficient: 0.3,
          type: 'ARP',
          name: '无视护甲',
        }]
      },{
        name: '瑟银戒指',
        iconSrc: './icons/R6.png',
        entry: [{
          valCoefficient: 0.5,
          type: 'ARMOR',
          name: '护甲'
        }, {
          valCoefficient: 0.5,
          type: 'HPRS',
          name: '每秒生命恢复',
        }]
      }],
      uniqueCategory: [{
        name: '珑村正',
        iconSrc: './icons/U_SRord01.png',
        entry: [{
          valCoefficient: 1.8,
          type: 'ATK',
          name: '攻击力'
        }]
      }],
      extraEntry: [{
        type: 'ATK',
        name: '攻击力',
      },{
        type: 'CRIT',
        name: '暴击率',
        unit:'percent'
      },{
        type: 'ARP',
        name: '无视护甲',
      },{
        type: 'CRITDMG',
        name: '暴击伤害',
        unit:'percent'
      },{
        type: 'ATKSP',
        name: '攻击速度',
      },{
        type: 'HPSTEAL',
        name: '生命偷取',
        unit:'percent'
      },{
        type: 'ARMOR',
        name: '护甲',
      }, {
        type: 'HPRS',
        name: '每秒生命恢复',
      }, {
        type: 'HP',
        name: '生命上限',
      }, {
        type: 'EVADE',
        name: '闪避',
        unit:'percent'
      }]
    }
  },
};