/**
 * 公式计算js配置文件
 * @author couy
 */

export const formula = {
  methods: {
    /**
     * 根据护甲计算承受的伤害比例
     * 请注意穿甲属性并不会导致护甲为负这种情况
     * 承伤最高限定为100%
     * @param {obj} armor 目标护甲
     */
    armorFormula: (armor) => {
      var takeDMGPercent = 1 - armor * 0.05 / (1 + 0.05 * armor)
      takeDMGPercent = takeDMGPercent > 1 ? 1 : takeDMGPercent
      return takeDMGPercent
    },

    /**
     * 根据基础攻击间隔与攻击速度加成计算最终攻击速度
     * 攻击速度限定最高为2次每秒
     * @param {obj} attr 需计算的目标属性
     */
    ATKSpeedFormula: (attr) => {
      attr.ATKSPEED = attr.BAT * (100 + attr.ATKSP)
      attr.ATKSPEED = attr.ATKSPEED >= 2 ? 2 : attr.ATKSPEED
      return takeDMGPercent
    },

    /**
     * 乘法叠加计算公式
     * 闪避、攻速降低都采用这种计算方式
     * 用闪避来举例简单来说：就是一次攻击要绕过这么多次闪避成功命中，就必须按顺序绕过每一次闪避，
     * 只有当所有的闪避都失败了，这次攻击才可以造成伤害
     * 比如说玩家现在有30%闪避，则evadeNow为0.3
     * 新装备的的装备有一个20%闪避词条（evadeNew=0.2），则此时的闪避概率为
     * 1-（1-30%）*（1-20%） = 44%  并非加法叠加的50%
     * @param {num} evadeNow 现在的闪避概率
     * @param {num} evadeNew 新增的闪避概率
     */
    evadeFormula: (evadeNow, evadeNew) => {
      let evade = 1 - (1 - evadeNow) * (1 - evadeNew)
      return Number(evade.toFixed(2))
    },

    /**
     * 词条计算并返回
     * @param {num} lv 物品等级
     * @param {num} valCoefficient 属性影响常数
     * @param {num} qualityCoefficient 装备品质影响常数
     * @returns 
     */
    baseEntryFormula: (lv, valCoefficient, qualityCoefficient,base=0) => {
      let entry = {
          value: 0,
          min: 0,
          max: 0,
        },
        min, max, random;
      
      random = ((lv+Math.random() * lv / 5) * valCoefficient)+base
      min = (lv) * valCoefficient+base
      max = (lv+lv / 5) * valCoefficient+base
      entry.min = Number((min * qualityCoefficient).toFixed(2))
      entry.max = Number((max * qualityCoefficient).toFixed(2))
      entry.value = Number((random * qualityCoefficient).toFixed(2))
      return entry
    },
  }
};