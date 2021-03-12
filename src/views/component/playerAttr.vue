<template>
<!-- MAXHP: 100,
      CURHP: 100,
      ATKMIN: 10, //攻击力
      ATKMAX: 13, //攻击力
      ARMOR: 2, //护甲
      EVADE: 0.5, //闪避
      ATKSPEED: 1.5, //每秒攻击次数
      ATKSI: 0.6, //基础攻击间隔
      ARP: 1, //穿甲
      CRIT: 0.3, //暴击几率
      CRITDMG: 1.5, //暴击伤害
      HPRS: 1, //每秒生命恢复
      HPSTEAL: 0, //生命偷取
      // 二级属性
      ATKSP: 0, //攻击速度加成
      //人物属性
      GOLD: 0, //拥有的金币
      EXP: 0,
      EXPNL: 100, //升到下一级需要的经验
      LV: 1, -->
  <div class="playerAttr">
    <div>
      <p>生命值：<span>{{attr.MAXHP}}</span></p>
      <p>每秒生命恢复：<span>{{attr.HPRS}}</span></p>
      <p>攻击力：<span>{{attr.ATKMIN}} - {{attr.ATKMAX}}</span></p>
      <p>护甲：<span>{{attr.ARMOR}}</span></p>
      <p>无视护甲：<span>{{attr.ARP}}</span></p>
      <p>每秒攻击次数：<span>{{attr.ATKSPEED}}</span></p>
      <p>基础攻击间隔：<span>{{attr.ATKSI}}</span></p>
      <p>闪避：<span>{{attr.EVADE*100}}%</span></p>
      <p>暴击几率：<span>{{attr.CRIT*100}}%</span></p>
      <p>暴击伤害：<span>{{attr.CRITDMG*100}}%</span></p>
      <p>生命偷取：<span>{{attr.HPSTEAL*100}}%</span></p>
    </div>
  </div>
</template>
<script>
import Player from "../../assets/core/player.js"
export default {
  name: "equiPanel",
  components: {},
  data() {
    return {
      attr: {}
    }
  },
  props: ["item"],
  mounted() {
    this.attr = Player.playerFinalAttr
  },
  watch: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.playerAttr{
  width:100%;
  height:100%;
  padding: 10px;
  p{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .15rem;
    margin:0.05rem;
  }
}
</style>
