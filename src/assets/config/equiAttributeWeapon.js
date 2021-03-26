/**
 * 武器属性配置文件
 * @author couy
 */

export const equiAttributeWeapon = {
  data() {
    return {
      type: {
        name: "武器",
        code: 'weapon'
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
      }]
    }
  },
};