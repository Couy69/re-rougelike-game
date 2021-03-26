/**
 * 武器属性配置文件
 * @author couy
 */

export const equiAttributeWeapon = {
  data() {
    return {
      type:{
        name:"武器",
        code:'weapon'
      },
      category: [{
        name: '狱岩石太刀',
        iconSrc: './icons/W_Sword016.png',
        entry: [{
          'valCoefficient': 1.2,
          type: 'ATK',
          'name': '攻击力'
        }]
      }],
      uniqueCategory: [{
        name: '珑村正',
        iconSrc: './icons/U_Sword01.png',
        entry: [{
          'valCoefficient': 1.8,
          type: 'ATK',
          'name': '攻击力'
        }, {
          type: 'CRIT',
          'valCoefficient': 1.5,
          'name': '暴击率'
        }, {
          'valCoefficient': 1.3,
          type: 'CRITDMG',
          'name': '暴击伤害'
        }]
      }],
      extraEntry: [{
        type: 'ATK',
        'name': '攻击力'
      }]
    }
  },
};