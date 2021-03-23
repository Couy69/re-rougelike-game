<template>
  <div class="battlePanel">
    <div class="button" style="position:fixed;" @click="battleStart">
      模拟战斗
    </div>
    <div class="player" v-if="JSON.stringify(PLAYER).length>2">
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
            require('../../assets/icons/tachie/' + playerFinalAttr.tachie + '')
          "
          alt=""
        />
      </div>
      <div class="dmg-font" v-for="v in playerHpChange" :key="v.id">
        <div v-if="v.show">
          <p v-if="v.type == 'miss'">{{ v.msg }}</p>
          <p v-if="v.type == 'crit'">⚡{{ v.msg }}</p>
          <p v-if="v.type == 'normol'">{{ v.msg }}</p>
        </div>
      </div>
    </div>
    <div class="player monster">
      <div class="player-hp">
        <div class="name">boss1号</div>
        <div class="num">
          <p class="chp">{{ monstAttr.CURHP }}</p>
          /
          <p class="fhp">{{ monstAttr.MAXHP }}</p>
        </div>
        <div class="hpline">
          <div class="ahp" :style="{ width: monsterHpLineLength + '%' }"></div>
          <div class="bhp" :style="{ width: monsterHpLineLength + '%' }"></div>
        </div>
      </div>
      <div class="player-tachie">
        <img
          :class="{ flicker: monsterFlicker }"
          src="../../assets/icons/tachie/boss3.gif"
          alt=""
        />
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
</template>
<script>
import handle from "../../assets/core/handle.js"
import player from "../../assets/core/player.js"
export default {
  name: "battlePanel",
  components: {},
  data() {
    return {
      playerAttr: {},
      playerFinalAttr: {
        // name: "player",
        // unitType: {
        //   name: "英雄单位",
        //   code: 1
        // },
        // //一级属性
        // MAXHP: 1000,
        // CURHP: 1000,
        // ATKMIN: 150, //攻击力
        // ATKMAX: 170, //攻击力
        // ARMOR: 28, //护甲
        // EVADE: 0.1, //闪避
        // ATKSPEED: 2.0, //每秒攻击次数
        // ATKSI: 0.6, //基础攻击间隔
        // ARP: 10, //穿甲
        // CRIT: 0.3, //暴击几率
        // CRITDMG: 1.5, //暴击伤害
        // HPRS: 1, //每秒生命恢复
        // HPSTEAL: 0, //生命偷取
        // // 二级属性
        // ATKSP: 0, //攻击速度加成
        // //人物属性
        // GOLD: 0, //拥有的金币
        // EXP: 0,
        // EXPNL: 100, //升到下一级需要的经验
        // LV: 30
      },
      monstAttr: {
        name: "monster",
        unitType: 2,
        //一级属性
        MAXHP: 100,
        CURHP: 100,
        ATKMIN: 10, //攻击力
        ATKMAX: 11, //攻击力
        ARMOR: 2, //护甲
        EVADE: 0, //闪避
        ATKSPEED: 1, //每秒攻击次数
        ATKSI: 0.6, //基础攻击间隔
        ARP: 0, //穿甲
        CRIT: 0, //暴击几率
        CRITDMG: 1.5, //暴击伤害
        HPRS: 1, //每秒生命恢复
        HPSTEAL: 0, //生命偷取
        // 二级属性
        ATKSP: 0 //攻击速度加成
      },
      playerHpChange: [],
      monsterHpChange: [],
      playerHpLineLength: 100,
      monsterHpLineLength: 100,
      monsterFlicker: false,
      playerFlicker: false
    }
  },
  props: ["item"],
  mounted() {
  },
  computed: {
    PLAYER() {
      this.playerFinalAttr = this.$store.state.PLAYER.playerFinalAttr
      return this.$store.state.PLAYER
    }
  },
  watch: {
    playerFinalAttr: {
      handler() {
        try {
          this.playerHpLineLength = parseInt(
            (this.playerFinalAttr.attr.CURHP / this.playerFinalAttr.attr.MAXHP) * 100
          )
        } catch (error) {}
      },
      immediate: false,
      deep: true
    },
    monstAttr: {
      handler() {
        this.monsterHpLineLength = parseInt(
          (this.monstAttr.CURHP / this.monstAttr.MAXHP) * 100
        )
      },
      immediate: false,
      deep: true
    }
  },
  methods: {
    battleStart() {
      handle.combatCalculation(this.playerFinalAttr.attr, this.monstAttr, this)
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
.player {
  width: 30%;
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
      }
      .bhp {
        z-index: 1;
        position: absolute;
        transition: 0.3s;
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
.monster {
  .player-tachie {
    img {
      transform: scaleX(1);
    }
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
