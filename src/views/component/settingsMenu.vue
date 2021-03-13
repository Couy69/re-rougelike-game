<template>
  <div class="settingsMenu">
    <div class="menu">
      <div class="Backpack">
        <img src="../../assets/icons/menu/1.png" alt="">
        <span>速通排行榜</span>
      </div>
      <div class="Backpack">
        <img src="../../assets/icons/menu/1.png" alt="">
        <span>沙包排行榜</span>
      </div>
    </div>
  </div>
</template>
<script>
import Player from "../../assets/core/player.js"
export default {
  name: "settingsMenu",
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
.settingsMenu{
  width:100%;
  height:60px;
  position: absolute;
  right:0;
  top:20px;
  p{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .15rem;
    margin:0.05rem;
  }
}
.menu {
  padding: 6px;
  display: flex;
  flex-direction: row-reverse;
  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    margin: 0 14px;
    justify-content: space-between;
    span {
      color: #fff;
      font-size: 14px;
      line-height: 14px;
      padding: 10px 0;
      text-shadow: 1px 1px 3px rgb(0, 0, 0);
    }
  }
}
</style>
