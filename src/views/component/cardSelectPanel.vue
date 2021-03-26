<template>
  <div class="cardSelectPanel">
    <div class="title">
      你转生了，你忘掉了之前大部分经历，但是你隐约记得，你之前的身份似乎是...
    </div>
    <div class="panel">
      <card :data="v" v-for="v in datas" :key="v.id"/>
    </div>
  </div>
</template>
<script>
import card from "./cardPanel"
import {characterConfig} from "../../assets/config/characterConfig.js"
export default {
  name: "cardSelectPanel",
  components: { card },
  mixins:[characterConfig],
  data() {
    return {
      arr:[],
      datas:[]
    }
  },
  mounted() {},
  watch: {},
  methods: {
    // 随机三个随机初始人物
    selectCharacter() {
      this.getRandomNums()
      this.arr.map(item=>{
        this.datas.push(this.characterConfig[item])
      })
      
    },
    getRandomNums() {
      while (this.arr.length < 3) {
        let num = parseInt(Math.random()*this.characterConfig.length)
        if (this.arr.indexOf(num) == -1) {
          this.arr.push(num)
        }
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
  padding-top: 120px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .title {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .panel {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
