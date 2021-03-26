/**
 * 武器属性配置文件
 * @author couy
 */

export const equiAttributeWeapon = {
  data() {
    return {
      category: [{
        name: '狱岩石太刀',
        iconSrc: './icons/W_Sword016.png',
        entry: [{
          'valCoefficient': 1.2,
          'value': '11',
          type: 'ATK',
          'name': '攻击力'
        }, {
          type: 'CRIT',
          'valCoefficient': 1.3,
          'value': '8',
          'name': '暴击率'
        }]
      }],
      uniqueCategory: [{
        name: '创世亡命剑',
        iconSrc: './icons/U_Sword01.png',
        entry: [{
          'valCoefficient': 1.8,
          'value': '11',
          type: 'ATK',
          'name': '攻击力'
        }, {
          type: 'CRIT',
          'valCoefficient': 1.5,
          'value': '8',
          'name': '暴击率'
        }, {
          'valCoefficient': 1.3,
          'value': '11',
          type: 'CRITDMG',
          'name': '暴击伤害'
        }]
      }],
      extraEntry: [{
        'value': '11',
        type: 'ATK',
        'name': '攻击力'
      }]
    }
  },
};