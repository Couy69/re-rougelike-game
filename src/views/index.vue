<template>
  <div class="main" @contextmenu.prevent="contextmenu($event)">
    <div class="content">
      <div class="l">
        <div class="lt">

        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import { assist } from "../assets/js/assist"
import handle from "../assets/core/handle.js"
import Player from "../assets/core/player.js"
import equiPanel from "./component/equiPanel"
export default {
  name: "index",
  mixins: [assist],
  data() {
    return {}
  },
  components: { equiPanel },
  created() {
    // 窗口自适应
    window.onresize = () => {
      if (this.debounceTime) {
        clearTimeout(this.debounceTime)
      }
      this.debounceTime = setTimeout(() => {
        this.debounceTime = null
        this.initial()
      }, 200)
    }
    this.initial()
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    battleStart() {
      var player = new Player
      console.log(player.playerBaseAttr)
    },

    // 初始化rem
    initial() {
      let html = document.documentElement
      let wW = html.clientHeight
      let designSize = 1000 //设计高度
      if (!this.fullScreen) {
        wW = html.clientHeight
      }
      let rem = (wW * 100) / designSize
      document.documentElement.style.fontSize = rem + "px"
    }
  }
}
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
  background: #222;
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
  display: flex;
  justify-content: center;
  min-height:700px;
  min-width: 1200px;
}
.content{
  width: 1200px;
  height:100%;
  border: 1px solid #eee;
}
.l{
  width: 300px;
  height:100%;
  .lt{
    
  }
}
</style>
