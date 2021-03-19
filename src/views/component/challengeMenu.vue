<template>
  <div class="challengeMenu">
    <div class="menu">
      <div class="Backpack" @click="openMenu('boss')">
        <img src="../../assets/icons/menu/1.png" alt="" />
        <span>boss挑战</span>
      </div>
      <div class="Backpack" @click="openMenu('relic')">
        <img src="../../assets/icons/menu/1.png" alt="" />
        <span>宝物挑战</span>
      </div>
      <div class="Backpack" @click="openMenu('equi')">
        <img src="../../assets/icons/menu/1.png" alt="" />
        <span>装备挑战</span>
      </div>
      <div class="Backpack" @click="openMenu('loop')">
        <img src="../../assets/icons/menu/1.png" alt="" />
        <span>循环挑战</span>
      </div>
    </div>
    <div class="dialog" v-if="challengeMenuDialog">
      <div class="title">{{currentMenu.name}}</div>
      <div class="dmenu">
        <div class="item" v-for="v in currentMenu.menuList" :key="v.id" @click="resetCurrentMonster(v)">
          <div class="img">
            <div class="cover"></div>
            <img
              :src="require('../../assets/icons/tachie/' + v.tachie + '')"
              alt=""
            />
          </div>
          <div class="dname">{{ v.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Player from "../../assets/core/player.js"
export default {
  name: "challengeMenu",
  components: {},
  data() {
    return {
      currentMenu: {},
      challengeMenuDialog: false,
      loopMenu: {
        name: "循环挑战",
        type: "loop",
        menuList: [
          {
            name: "lv1",
            tachie: "lv1.gif"
          },
          {
            name: "lv2",
            tachie: "lv2.gif"
          },
          {
            name: "lv3",
            tachie: "lv3.gif"
          },
          {
            name: "lv4",
            tachie: "lv4.gif"
          },
          {
            name: "lv5",
            tachie: "lv5.gif"
          }
        ]
      },
      equiMenu: {
        name: "装备挑战",
        type: "equi",
        menuList: [
          {
            name: "lv1",
            tachie: "equi.gif"
          },
          {
            name: "lv2",
            tachie: "equi.gif"
          },
          {
            name: "lv3",
            tachie: "equi.gif"
          },
          {
            name: "lv4",
            tachie: "equi.gif"
          },
          {
            name: "lv5",
            tachie: "equi.gif"
          }
        ]
      },
      
    }
  },
  props: ["item"],
  mounted() {},
  watch: {},
  methods: {
    resetCurrentMonster(v){
      console.log(v)
    },
    openMenu(type) {
      if(this.currentMenu.type == type){
        this.currentMenu = {}
        return this.challengeMenuDialog = false
      }
      this.challengeMenuDialog = true
      switch (type) {
        case "loop":
          this.currentMenu = this.loopMenu
          break
        case "equi":
          this.currentMenu = this.equiMenu
          break
        case "relic":
          this.currentMenu = this.relicMenu
          break
        case "boss":
          this.currentMenu = this.bossMenu
          break

        default:
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.challengeMenu {
  width: 100%;
  height: 60px;
  position: absolute;
  right: 0;
  bottom: 20px;
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.15rem;
    margin: 0.05rem;
  }
  .dialog {
    position: absolute;
    bottom: 70px;
    right: 0;
    // background: linear-gradient(210.55deg, #ebf2f9 19.14%, #c6d7eb 154.68%);
    background: #292929;
    box-shadow: inset -2px -2px 3px #9a9393,
      inset 1px 1px 1px rgba(117, 117, 117, 0.5);
    border: 1px solid #ccc;
    padding: 10px 15px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .dmenu {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        margin: 10px 8px;
        cursor: pointer;
        .img {
          width: 50px;
          height: 50px;
          position: relative;
          overflow: hidden;
          .cover {
            background-image: url(../../assets/img/border/sp2.png);
            background-size: 105%;
            background-position: center;
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 2;
          }
          img {
            z-index: 1;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 85%;
            height: auto;
            transform: translate(-50%, -50%);
          }
        }
        .dname {
          margin-top: 4px;
        }
      }
    }
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
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
