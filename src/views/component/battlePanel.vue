<template>
  <div class="battlePanel">
    <div class="button" style="position:fixed;" @click="battleStart">
      模拟战斗
    </div>
    <div class="area">
      <div class="player" v-if="JSON.stringify(PLAYER).length > 2">
        <div class="player-hp">
          <div class="num">
            <p class="chp">{{ playerFinalAttr.attr.CURHP }}</p>
            /
            <p class="fhp">{{ playerFinalAttr.attr.MAXHP }}</p>
          </div>
          <div class="hpline">
            <div class="ahp" :style="{ width: playerHpLineLength + '%' }"></div>
            <div class="bhp" :style="{ width: playerHpLineLength + '%' }"></div>
          </div>
        </div>
        <div class="player-tachie">
          <img
            v-if="playerFinalAttr.tachie"
            :class="{ flicker: playerFlicker }"
            :src="
              require('../../assets/icons/tachie/' +
                playerFinalAttr.tachie +
                '')
            "
            alt=""
          />
          <div class="flicker-animation" v-if="playerFlicker">

          </div>
        </div>
        <div class="dmg-font" v-for="v in playerHpChange" :key="v.id">
          <div v-if="v.show">
            <p v-if="v.type == 'miss'">{{ v.msg }}</p>
            <p v-if="v.type == 'crit'">⚡{{ v.msg }}</p>
            <p v-if="v.type == 'normol'">{{ v.msg }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="player monster" v-if="JSON.stringify(MONSTER).length > 2">
        <div class="player-hp">
          <div class="name">{{ monsterFinalAttr.name }}</div>
          <div class="num">
            <p class="chp">{{ monsterFinalAttr.attr.CURHP }}</p>
            /
            <p class="fhp">{{ monsterFinalAttr.attr.MAXHP }}</p>
          </div>
          <div class="hpline">
            <div
              class="ahp"
              :style="{ width: monsterHpLineLength + '%' }"
            ></div>
            <div
              class="bhp"
              :style="{ width: monsterHpLineLength + '%' }"
            ></div>
          </div>
        </div>
        <div class="player-tachie">
          <img
            v-if="monsterFinalAttr.tachie"
            :class="{ flicker: monsterFlicker }"
            :src="
              require('../../assets/icons/tachie/' +
                monsterFinalAttr.tachie +
                '')
            "
            alt=""
          />
           <div class="flicker-animation" v-if="monsterFlicker">

          </div>
        </div>
        <div class="dmg-font" v-for="v in monsterHpChange" :key="v.id">
          <div v-if="v.show">
            <p v-if="v.type == 'miss'">{{ v.msg }}</p>
            <p v-if="v.type == 'crit'">⚡{{ v.msg }}</p>
            <p v-if="v.type == 'normol'">{{ v.msg }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import handle from "../../assets/core/handle.js"
import Monster from "../../assets/core/monster.js"
export default {
  name: "battlePanel",
  components: {},
  data() {
    return {
      playerAttr: {},
      playerFinalAttr: {},
      monsterFinalAttr: {},
      playerHpChange: [],
      monsterHpChange: [],
      playerHpLineLength: 100,
      monsterHpLineLength: 100,
      monsterFlicker: false,
      playerFlicker: false
    }
  },
  props: ["item"],
  mounted() {},
  computed: {
    PLAYER() {
      this.playerFinalAttr = this.$store.state.PLAYER.playerFinalAttr||{}
      return this.$store.state.PLAYER
    },
    MONSTER() {
      this.monsterFinalAttr = this.$store.state.MONSTER.monsterFinalAttr||{}
      return this.$store.state.MONSTER
    }
  },
  watch: {
    playerFinalAttr: {
      handler() {
        try {
          this.playerHpLineLength = parseInt(
            (this.playerFinalAttr.attr.CURHP /
              this.playerFinalAttr.attr.MAXHP) *
              100
          )
        } catch (error) {}
      },
      immediate: false,
      deep: true
    },
    monsterFinalAttr: {
      handler() {
        if(JSON.stringify(this.monsterFinalAttr).length<=2){
          return
        }
        this.monsterHpLineLength = parseInt(
          (this.monsterFinalAttr.attr.CURHP /
            this.monsterFinalAttr.attr.MAXHP) *
            100
        )
      },
      immediate: false,
      deep: true
    }
  },
  methods: {
    battleStart() {
      handle.combatCalculation(
        this.playerFinalAttr.attr,
        this.monsterFinalAttr.attr,
        this
      )
    },
    showDmgInfo(v, type) {
      // let v = {
      //   type: "miss",
      //   msg: "MISS",
      //   show: true
      // }

      switch (type) {
        case "player":
          this.playerHpChange.push(v)
          setTimeout(() => {
            v.show = false
          }, 1000)
          this.playerFlicker = true
          setTimeout(() => {
            this.playerFlicker = false
          }, 300)
          break

        default:
          this.monsterHpChange.push(v)
          setTimeout(() => {
            v.show = false
          }, 1000)
          this.monsterFlicker = true
          setTimeout(() => {
            this.monsterFlicker = false
          }, 300)
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
.battlePanel {
  width: 70%;
  height: 40%;
  padding: 10px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  // background: #000;
  // box-shadow:0 0  2px 2px #222;
}
@keyframes bezier {
  0% {
    transform: translateY(-50%) translate3d(0, 0px, 0);
  }

  20% {
    opacity: 0.8;
    transform: translateY(-50%) translate3d(-70px, -50px, 0);
  }
  100% {
    opacity: 0;
    transform: translateY(-50%) translate3d(-70px, -50px, 0);
  }
}
@keyframes bezier-reverse {
  0% {
    transform: translateY(-50%) translate3d(0, 0px, 0);
  }

  20% {
    opacity: 0.8;
    transform: translateY(-50%) translate3d(70px, -80px, 0);
  }
  100% {
    opacity: 0;
    transform: translateY(-50%) translate3d(70px, -80px, 0);
  }
}
@keyframes flicker {
  0% {
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}
.area{
width: 30%;
  height: 100%;
}
.player {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  .dmg-font {
    position: absolute;
    bottom: 40px;
    left: 50%;
    animation: bezier ease-in 1s;
    p {
      transform: translateX(-50%);
      text-shadow: 0px 0px 2px #000;
      font-size: 18px;
      color: #ff7d0d;
    }
  }
  .player-hp {
    width: 100%;
    border-radius: 2px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    .num {
      display: flex;
    }
    & > div {
      margin: 2px 0;
    }
    .name {
      font-size: 18px;
    }
    .hpline {
      display: flex;
      width: 130px;
      height: 15px;
      border: 2px solid #2c532d;
      box-shadow: inset 0 0 1px #2c532d;
      background: #000000;
      position: relative;
      & > div {
        height: 100%;
      }
      .ahp {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        background: #67d83d;
        transition: 0.1s;
      }
      .bhp {
        z-index: 1;
        position: absolute;
        transition: 0.5s;
        top: 0;
        left: 0;
        width: 100%;
        background: #e6e6e6;
      }
    }
  }
}
.player-tachie {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  img {
    transform: scaleX(-1);
  }
  .flicker {
    animation: flicker 0.3s;
  }
}
.flicker-animation{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%)   scaleX(-1);
    width: 100%;
    height:100%;
    background-position: 80% 100%;
    background-repeat: no-repeat;
    background-size: 50%;
    background-image: url(../../assets/img/animation/attack1.gif);
    z-index: -1;
  }
.monster {
  .player-tachie {
    img {
      transform: scaleX(1);
    }
  }
  .flicker-animation{
    transform: translate(-50%,-50%) !important;
  }
  .hpline {
    border: 2px solid #732727 !important;
    box-shadow: inset 0 0 1px #732727 !important;
    background: #000000;
    .ahp {
      width: 100%;
      background: #b52a00 !important;
    }
    .bhp {
      width: 0%;
      background: #e6e6e6;
    }
  }
  .dmg-font {
    animation: bezier-reverse ease-in 1s;
  }
}
</style>
