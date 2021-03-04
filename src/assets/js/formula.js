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
    armorFormula:(armor)=>{
      var takeDMGPercent = 1-armor*0.05/(1+0.05*armor)
      takeDMGPercent=takeDMGPercent>1?1:takeDMGPercent
      return takeDMGPercent
    }
  }
};