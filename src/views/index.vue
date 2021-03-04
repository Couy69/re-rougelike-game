<template>
  <div class="main" @contextmenu.prevent="contextmenu($event)">
  </div>
</template>
<script>
import cTooltip from './uiComponent/tooltip';
import { assist } from '../assets/js/assist';
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

      if (document.documentElement.clientWidth < 768) {
        this.$store.commit('set_operator_schema', true)
      } else {
        this.$store.commit('set_operator_schema', false)
      }
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
