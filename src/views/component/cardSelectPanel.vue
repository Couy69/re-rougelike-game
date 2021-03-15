<template>
  <div class="cardSelectPanel">
    <div
      class="card"
      @mousemove="mousemove"
      @mouseleave="mouseleave"
      :style="transform"
    >
      <img src="../../assets/icons/tachie/boss3.gif" alt="" />
    </div>
    <div class="card"></div>
    <div class="card"></div>
  </div>
</template>
<script>
export default {
  name: "cardSelectPanel",
  components: {},
  data() {
    return {
      attr: {},
      transform: {
        transform: "translate(0,-50%)"
      }
    }
  },
  mounted() {},
  watch: {},
  methods: {
    mousemove(e) {
      let x = ( e.offsetY -150 ) / 10,
        y = (e.offsetX-100) / 8
      this.transform = {
        transform: `
        translate(0,-50%)  rotateX(${x}deg) rotateY(${y}deg)
      `
      }
    },
    mouseleave() {
      this.transform = {
        transform: `
        translate(0,-50%)
      `
      }
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.cardSelectPanel {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba($color: #000000, $alpha: 0.7);
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    cursor: pointer;
    border: 1px solid #ccc;
    margin: 0px 30px;
    box-shadow: 0 0 5px 3px #fff;
    transform: translate(0, -50%);
    width: 200px;
    height: 300px;
  }
}
</style>
