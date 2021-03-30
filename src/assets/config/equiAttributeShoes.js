/**
 * 鞋子属性配置文件
 * @author couy
 */

export const equiAttributeShoes = {
  data() {
    return {
      type: {
        name: "鞋子",
        code: 'shoes'
      },
      category: [{
        name: '精灵短靴',
        iconSrc: './icons/S1.png',
        entry: [{
          valCoefficient: 0.5,
          type: 'ARMOR',
          name: '护甲'
        }, {
          valCoefficient: 4,
          type: 'ATKSP',
          name: '攻击速度',
        }]
      }, {
        name: '钉头靴',
        iconSrc: './icons/S2.png',
        entry: [{
          valCoefficient: 0.5,
          type: 'ARMOR',
          name: '护甲'
        }, {
          valCoefficient: 0.5,
          type: 'CRIT',
          name: '暴击率',
          unit: 'percent'
        }]
      }, {
        name: '铁皮胫甲',
        iconSrc: './icons/S3.png',
        entry: [{
          valCoefficient: 0.5,
          type: 'ARMOR',
          name: '护甲'
        }, {
          valCoefficient: 4,
          type: 'HP',
          name: '生命上限',
        }]
      }, {
        name: '斥候长靴',
        iconSrc: './icons/S4.png',
        entry: [{
          valCoefficient: 0.5,
          type: 'ARMOR',
          name: '护甲'
        }, {
          valCoefficient: 0.4,
          EVADE: 'EVADE',
          name: '闪避',
          unit: 'percent'
        }]
      }, {
        name: '无踪长靴',
        iconSrc: './icons/S5.png',
        entry: [{
          valCoefficient: 0.5,
          type: 'ARMOR',
          name: '护甲'
        }, {
          valCoefficient: 1.0,
          type: 'ATK',
          name: '攻击力'
        }]
      }, {
        name: '影脉长靴',
        iconSrc: './icons/S6.png',
        entry: [{
          valCoefficient: 0.5,
          type: 'ARMOR',
          name: '护甲'
        }, {
          valCoefficient: 0.8,
          type: 'ARP',
          name: '无视护甲',
        }]
      }],
      uniqueCategory: [{
        name: '珑村正',
        iconSrc: './icons/U_Sword01.png',
        entry: [{
          valCoefficient: 1.8,
          type: 'EVADE',
          name: '闪避'
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