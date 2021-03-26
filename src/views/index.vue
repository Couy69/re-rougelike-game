<template>
  <div class="main" @contextmenu.prevent="contextmenu($event)">
    <div class="content">
      <div class="l">
        <div class="lt">
          <div class="main-info">
            <p class="playname" v-if="JSON.stringify(PLAYER).length > 2">
              {{ PLAYER.playerFinalAttr.name }}
            </p>
            <p class="time">00:00:00</p>
          </div>
          <div class="equi">
            <equiInfoPanel />
          </div>
        </div>
        <div class="lb">
          <playerAttr />
        </div>
      </div>
      <div class="r">
        <challengeMenu />
        <battlePanel />
        <settingsMenu />
        <infoPanel />
      </div>
    </div>
    <cardSelectPanel v-show="cardSelecdDialog" />
  </div>
</template>
<script>
import { assist } from "../assets/js/assist"
import handle from "../assets/core/handle.js"
import Player from "../assets/core/player.js"
import equiInfoPanel from "./component/equiInfoPanel"
import playerAttr from "./component/playerAttr"
import battlePanel from "./component/battlePanel"
import challengeMenu from "./component/challengeMenu"
import settingsMenu from "./component/settingsMenu"
import infoPanel from "./component/infoPanel"
import cardSelectPanel from "./component/cardSelectPanel"
export default {
  name: "index",
  mixins: [assist],
  data() {
    return {
      cardSelecdDialog: false
    }
  },
  components: {
    equiInfoPanel,
    playerAttr,
    battlePanel,
    challengeMenu,
    settingsMenu,
    infoPanel,
    cardSelectPanel
  },
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
  mounted() {
    let loadStatu = handle.loadGame()
    console.log(loadStatu)
    loadStatu || this.gameReset()
    handle.equiGet({
      MAXHP: 20,
      CURHP: 20,
      ATKMIN: 5,
      ATKMAX: 7,
      ARMOR: 0,
      EVADE: 0,
      ATKSPEED: 1,
      ATKSI: 1,
      ARP: 0,
      CRIT: 0,
      CRITDMG: 1.5,
      HPRS: 0,
      HPSTEAL: 0,
      unitType: 4,
      ATKSP: 0,
      LV: 1,
      EXP: 20
    })
  },
  computed: {
    PLAYER() {
      return this.$store.state.PLAYER
    }
  },
  watch: {},
  methods: {
    gameReset() {
      this.cardSelecdDialog = true
      let cardSelectPanel = this.findComponentDownward(this, "cardSelectPanel")
      cardSelectPanel.selectCharacter()
    },
    hideCardSelecdPanel() {
      this.cardSelecdDialog = false
    },
    contextmenu(e) {
      // 鼠标右键
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
  min-height: 700px;
  min-width: 1200px;
}
.content {
  width: 1200px;
  height: 100%;
  display: flex;
}
.l {
  width: 300px;
  height: 100%;
  .lt {
    height: 400px;
    width: 300px;
    .main-info {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.2rem;
      .playname {
        font-size: 0.2rem;
      }
      .time {
        font-size: 0.16rem;
      }
    }
    .equi {
      height: 300px;
      width: 100%;
    }
  }
  .lb {
    height: 300px;
    width: 300px;
  }
}
.r {
  width: 900px;
  height: 700px;
  position: relative;
}
</style>
