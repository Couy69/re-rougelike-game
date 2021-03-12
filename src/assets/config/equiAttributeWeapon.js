/**
 * 武器属性配置文件
 * @author couy
 */

export const equiAttributeWeapon = {
  data() {
    return {
      quality: [{
        name: '普通',
        qualityCoefficient: 0.8,
        probability: '0.25',
        color: '#fff',
        extraEntryNum: 1,
      }, {
        name: '稀有',
        qualityCoefficient: 1,
        probability: '0.55',
        color: '#fff',
        extraEntryNum: 2,
      }, {
        name: '史诗',
        qualityCoefficient: 1.15,
        probability: '0.15',
        color: '#ff00ff',
        extraEntryNum: 3,
      }, {
        name: '唯一',
        qualityCoefficient: 1.3,
        probability: '0.05',
        color: '#f78918',
        extraEntryNum: 4,
      }],
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
        des: '只有被选中的勇士才能唤醒它真正的力量。',
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