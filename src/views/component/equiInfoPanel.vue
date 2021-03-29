<template>
  <div class="equiInfoPanel">
    <div class="cgrid">
      <div class="grid grid-weapon">
        <!-- <equiItemPanel /> -->
      </div>
      <div class="grid grid-armor"></div>
      <div class="grid grid-ring"></div>
      <div class="grid grid-shoes"></div>
      <!-- <equiItemPanel /> -->
    </div>
    <div class="bgrid">
      <div v-for="(v, k) in backpackGrids" :key="k">
        <div class="grid">
          <div v-if="JSON.stringify(v) != '{}'">
            <equiItemPanel :item="v" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import equiItemPanel from "./equiItemPanel"
export default {
  name: "equiPanel",
  components: { equiItemPanel },
  data() {
    return {
    }
  },
  props: ["item"],
  created() {},
  computed: {
    backpackGrids() {
      return JSON.parse(this.$store.state.backpackGrids)
    }
  },
  
  mounted() {
    // setInterval(()=>{
    //   console.log(this.backpackGrids)
    // },1000)
  },
  // watch: {
  //   Grids: {
  //     handler() {
  //       this.backpackGrids = JSON.parse(JSON.stringify(this.Grids))
  //     },
  //     immediate: false,
  //     deep: true
  //   }
  // },
  methods: {}
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.equiInfoPanel {
  height: 320px;
  width: 100%;
}
.cgrid {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.grid {
  width: 50px;
  height: 50px;
  border: 1px solid #6b6b6b;
  position: relative;
  border-radius: 4px;
  margin-top: -1px;
  margin-left: -1px;
  box-sizing: border-box;
  &::after {
    content: "";
    position: absolute;
    width: 34px;
    height: 34px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.34;
    z-index: 1;
  }
  &.grid-weapon::after {
    background-image: url(../../assets/icons/default/weapon.png);
  }
  &.grid-armor::after {
    background-image: url(../../assets/icons/default/armor.png);
  }
  &.grid-ring::after {
    background-image: url(../../assets/icons/default/ring.png);
  }
  &.grid-shoes::after {
    background-image: url(../../assets/icons/default/shoes.png);
  }
}
.bgrid {
  width: 100%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  .grid {
    border-radius: 0px;
  }
}
</style>
