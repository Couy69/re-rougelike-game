/**
 * 护甲属性配置文件
 * @author couy
 */

export const equiAttributeArmor = {
  data() {
    return {
      type: {
        name: "防具",
        code: 'armor'
      },
      category: [{
        name: '铁甲',
        iconSrc: './icons/A1.png',
        entry: [{
          valCoefficient: 0.4,
          type: 'ARMOR',
          name: '护甲'
        }, {
          valCoefficient: 0.2,
          type: 'ARMOR',
          name: '护甲',
        }]
      }, {
        name: '赤红甲',
        iconSrc: './icons/A2.png',
        entry: [{
          valCoefficient: 0.4,
          type: 'ARMOR',
          name: '护甲'
        }, {
          valCoefficient: 4,
          type: 'HP',
          name: '生命上限',
        }]
      }, {
        name: '轻便布衣',
        iconSrc: './icons/A3.png',
        entry: [{
          valCoefficient: 0.4,
          type: 'ARMOR',
          name: '护甲'
        }, {
          valCoefficient: 1,
          type: 'ATKSP',
          name: '攻击速度',
        }]
      }, {
        name: '高级战甲',
        iconSrc: './icons/A4.png',
        entry: [{
          valCoefficient: 0.4,
          type: 'ARMOR',
          name: '护甲'
        }, {
          valCoefficient: 0.3,
          type: 'HPRS',
          name: '每秒生命恢复',
        }]
      }, {
        name: '银甲',
        iconSrc: './icons/A5.png',
        entry: [{
          valCoefficient: 0.4,
          type: 'ARMOR',
          name: '护甲'
        }, {
          valCoefficient: 0.1,
          type: 'HPSTEAL',
          name: '生命偷取',
          unit: 'percent'
        }]
      }],
      uniqueCategory: [{
        name: '珑村正',
        iconSrc: './icons/U_Sword01.png',
        entry: [{
          valCoefficient: 1.8,
          type: 'ARMOR',
          name: '护甲'
        }]
      }],
      extraEntry: [{
        type: 'ARMOR',
        name: '护甲',
      }, {
        type: 'HPRS',
        name: '每秒生命恢复',
      }, {
        type: 'HP',
        name: '生命上限',
      },{
        type: 'ATKSP',
        name: '攻击速度',
      }]
    }
  },
};