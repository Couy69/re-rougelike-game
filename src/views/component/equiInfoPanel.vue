<template>
  <div class="equiInfoPanel">
    <div class="cgrid">
      <div class="grid grid-weapon">
        <div
            v-if="JSON.stringify(playerWeapon) != '{}'"
          >
            <equiItemPanel :item="playerWeapon" />
          </div>
      </div>
      <div class="grid grid-armor"></div>
      <div class="grid grid-ring"></div>
      <div class="grid grid-shoes"></div>
      <!-- <equiItemPanel /> -->
    </div>
    <div class="bgrid">
      <div v-for="(v, k) in backpackGrids" :key="k">
        <div class="grid">
          <div
            v-if="JSON.stringify(v) != '{}'"
            @contextmenu.prevent="openMenu(k,$event)"
          >
            <equiItemPanel :item="v" />
          </div>
        </div>
      </div>
      <ul
        v-show="visible"
        :style="{ left: left + 'px', top: top + 'px' }"
        class="contextmenu"
      >
        <li @click="equipTheEquipment()">装备</li>
        <!-- <li @click="lockTheEquipment(true)" v-if="!currentItem.locked">锁定</li> -->
        <!-- <li @click="lockTheEquipment(false)" v-if="currentItem.locked">解锁</li> -->
        <!-- <li @click="sellTheEquipment()">出售</li> -->
      </ul>
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
      left: "",
      top: "",
      visible: false,
      currentItem: {},
      currentItemIndex: '',
    }
  },
  props: ["item"],
  created() {},
  computed: {
    backpackGrids() {
      return JSON.parse(this.$store.state.backpackGrids)
    },
    playerWeapon(){
      return this.$store.state.PLAYER.playerWeapon
    }
  },

  mounted() {
    // setInterval(()=>{
    //   console.log(this.backpackGrids)
    // },1000)
  },
  watch: {
    visible(value) {
      if (value) {
        document.body.addEventListener("click", this.closeMenu);
      } else {
        document.body.removeEventListener("click", this.closeMenu);
      }
    },
  },
  methods: {
    openMenu(k,e) {
      this.currentItemIndex = k
      this.currentItem = this.backpackGrids[k]
      const menuMinWidth = 105
      const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
      const offsetWidth = this.$el.offsetWidth // container width
      const maxLeft = offsetWidth - menuMinWidth + 155 // left boundary
      var left = e.clientX - offsetLeft + 15 // 15: margin right

      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }

      this.top = e.offsetY
      this.visible = true
    },
    closeMenu() {
      this.visible = false;
    },
    equipTheEquipment() {
      let PLAYER = this.$store.state.PLAYER
      switch (this.currentItem.itemType.code) {
        case 'weapon':
          if(JSON.stringify(this.playerWeapon) == "{}"){
            
            this.$store.commit("remove_backpack_equi", this.currentItemIndex)  
            PLAYER.setPlayerWeapon(this.currentItem)
            this.$store.commit("set_player_attribute", PLAYER)  
          }else{
            this.$store.commit("change_backpack_equi",{equi:this.playerWeapon, index:this.currentItemIndex})  
            PLAYER.setPlayerWeapon(this.currentItem)
            this.$store.commit("set_player_attribute", PLAYER)  
          }
          break;
        case 'armor':
          break;
        case 'ring':
          break;
        case 'shoes':
          break;
        default:
          break;
      }
    }
  }
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
  position: relative;
  .grid {
    border-radius: 0px;
  }
}
.contextmenu {
  margin: 0;
  background: #000;
  border: 1px solid #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);

  li {
    margin: 0;
    padding: 9px 16px;
    cursor: pointer;
    border-top: 1px solid #ccc;
    margin-top: -1px;
    font-size: 14px;
    letter-spacing: 6px;
    word-break: keep-all;
    &:hover {
      color: #ccc;
    }
  }
}
</style>
