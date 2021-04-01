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
        name: '士兵短剑',
        iconSrc: './icons/W1.png',
        entry: [{
          valCoefficient: 1.8,
          type: 'ATK',
          name: '攻击力'
        },{
          valCoefficient: 0.6,
          type: 'ATKSP',
          name: '攻击速度',
        }]
      },{
        name: '巨脊剑',
        iconSrc: './icons/W2.png',
        entry: [{
          valCoefficient: 1.8,
          type: 'ATK',
          name: '攻击力'
        },{
          valCoefficient: 0.5,
          type: 'CRIT',
          name: '暴击率',
          unit:'percent'
        }]
      },{
        name: '守护巨剑',
        iconSrc: './icons/W3.png',
        entry: [{
          valCoefficient: 1.8,
          type: 'ATK',
          name: '攻击力'
        },{
          valCoefficient: 0.2,
          type: 'ARMOR',
          name: '护甲',
        }]
      },{
        name: '流光剑',
        iconSrc: './icons/W4.png',
        entry: [{
          valCoefficient: 1.8,
          type: 'ATK',
          name: '攻击力'
        },{
          valCoefficient: 0.5,
          type: 'CRITDMG',
          name: '暴击伤害',
          unit:'percent'
        }]
      },{
        name: '吸血短剑',
        iconSrc: './icons/W5.png',
        entry: [{
          valCoefficient: 1.8,
          type: 'ATK',
          name: '攻击力'
        },{
          valCoefficient: 0.1,
          type: 'HPSTEAL',
          name: '生命偷取',
          unit:'percent'
        }]
      }],
      uniqueCategory: [{
        name: '珑村正',
        iconSrc: './icons/U_Sword01.png',
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
      }]
    }
  },
};