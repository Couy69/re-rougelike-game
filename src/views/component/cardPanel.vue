<template>
  <div
    class="card"
    @mousemove="mousemove"
    @mouseleave="mouseleave"
    :style="transform"
    @click="selectTheCard"
  >
    <div class="img">
      <img
        :src="require('../../assets/icons/tachie/' + data.tachie + '')"
        alt=""
      />
    </div>
    <div class="title">{{ data.name }}</div>
    <div class="desc">
      <p v-for="v in data.desc" :key="v.id">{{ v }}</p>
    </div>
  </div>
</template>
<script>
import Player from "../../assets/core/player.js"
import { assist } from "../../assets/js/assist"
import handle from "@/assets/core/handle.js"
export default {
  name: "cardSelectPanel",
  components: {},
  props: ["data"],
  mixins: [assist],
  data() {
    return {
      transform: {
        transform: ""
      }
    }
  },
  mounted() {},
  watch: {},
  methods: {
    mousemove(e) {
      let x = (e.offsetY - 150) / 10,
        y = (e.offsetX - 100) / 8
      this.transform = {
        transform: `
        rotateX(${x}deg) rotateY(${y}deg)
      `
      }
    },
    mouseleave() {
      this.transform = {
        transform: `none`
      }
    },
    selectTheCard() {
      let player = new Player()
      player.setPlayerBaseAttr(this.data)
      player.setPlayerFinalAttribute()
      this.$store.commit("set_player_attribute", player)

      var p = this.findComponentUpward(this, "index")
      p.hideCardSelecdPanel()

      handle.saveGame()
      this.$store.commit("set_sys_info", {
        msg: `
              你记起了你的身份，${player.playerBaseAttr.name}
            `,
        type: "trophy"
      })
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.card {
  cursor: pointer;
  border: 3px solid #f7921e;
  border-radius: 10px;
  margin: 0px 30px;
  background: #000;
  box-shadow: 0 0 5px 3px rgba(255, 255, 255, 0.315);
  transform: none;
  width: 200px;
  height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .img {
    background-color: #1f1f1f;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    position: relative;
    background-image: url(../../assets/img/border/sp7.png);
    background-size: 100%;
    background-position: center;
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: auto;
      height: 70%;
    }
  }
  .title {
    font-size: 20px;
    margin: 10px 0;
    font-weight: bold;
  }
  .desc {
    margin-left: -10px;
    p {
      margin: 3px 0;
    }
  }
}
</style>
