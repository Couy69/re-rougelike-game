<template>
  <div class="main" @contextmenu.prevent="contextmenu($event)">
    <button @click="battleStart">battleStart</button>
  </div>
</template>
<script>
import cTooltip from './uiComponent/tooltip';
import { assist } from '../assets/js/assist';
import handle from '../assets/js/handle.js';
export default {
  name: "index",
  mixins: [assist],
  data() {
    return {
    };
  },
  components: { cTooltip },
  created() {
    // 窗口自适应
    window.onresize = () => {
      if (this.debounceTime) {
        clearTimeout(this.debounceTime);
      }
      this.debounceTime = setTimeout(() => {
        this.debounceTime = null;
        this.initial()
      }, 200);

    };
    this.initial()

  },
  mounted() {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    battleStart() {
      let playerAttribute = {
        type: 'player',
        MAXHP: 6000,
        CURHP: 6000,
        ATK: 1000,
        ARMOR: 200,
        EVADE: 0.5,
        ATKSPEED: 2.5,
        ARP: 100,
        CRIT: 0.3,
        CRITDMG: 1.5,
        STR: 10,
        STA: 10,
        AGI: 10,
        INT: 10,
      }
      let monsterAttribute = {
        type: 'monster',
        MAXHP: 20000,
        CURHP: 20000,
        ATK: 800,
        ARMOR: 200,
        EVADE: 0,
        ATKSPEED: 1,
        ARP: 1,
        CRIT: 0,
        CRITDMG: 1.5,
      }
      handle.combatCalculation(playerAttribute,monsterAttribute)
    },

    // 初始化rem
    initial() {
      let html = document.documentElement;
      let wW = html.clientHeight;
      let designSize = 1000; //设计高度
      if (!this.fullScreen) {
        wW = html.clientHeight;
      }
      let rem = (wW * 100) / designSize;
      document.documentElement.style.fontSize = rem + "px";

    },
  }
};


</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  user-select: none;
}
a {
  cursor: pointer;
}
.main {
  background: #111;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: #eee;
  height: 100%;
}
</style>
