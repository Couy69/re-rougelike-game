<template>
  <div class="battlePanel">
    <div class="player">
      <div class="player-hp">
        <div class="num">
          <p class="chp">70</p>
          /
          <p class="fhp">100</p>
        </div>
        <div class="hpline">
          <div class="ahp"></div>
          <div class="bhp"></div>
          <div class="chp"></div>
        </div>
      </div>
      <div class="player-tachie">
        <img src="../../assets/icons/tachie/play7.gif" alt="" />
      </div>
    </div>
    <div class="player monster">
      <div class="player-hp">
        <div class="name">boss1号</div>
        <div class="num">
          <p class="chp">70</p>
          /
          <p class="fhp">100</p>
        </div>
        <div class="hpline">
          <div class="ahp"></div>
          <div class="bhp"></div>
          <div class="chp"></div>
        </div>
      </div>
      <div class="player-tachie">
        <img src="../../assets/icons/tachie/boss1.gif" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "battlePanel",
  components: {},
  data() {
    return {
      attr: {},
    }
  },
  props: ["item"],
  mounted() {
  },
  watch: {},
  methods: {},
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
.player {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
    &>div{
      margin:2px 0;
    }
    .name{
      font-size: 18px;
    }
    .hpline {
      display: flex;
      width: 130px;
      height: 15px;
      border: 2px solid #2c532d;
      box-shadow: inset 0 0 1px #2c532d;
      & > div {
        height: 100%;
      }
      .ahp {
        width: 70%;
        background: #67d83d;
      }
      .bhp {
        width: 0%;
        background: #e6e6e6;
      }
      .chp {
        width: 30%;
        background: #000001;
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
}
.monster {
  .player-tachie {
    img {
      transform: scaleX(1);
    }
  }
  .hpline {
    border: 2px solid #381919 !important;
    box-shadow: inset 0 0 1px #381919 !important;
    .ahp {
      width: 70%;
      background: #b52a00 !important;
    }
    .bhp {
      width: 0%;
      background: #e6e6e6;
    }
    .chp {
      width: 30%;
      background: #000001;
    }
  }
}
</style>
