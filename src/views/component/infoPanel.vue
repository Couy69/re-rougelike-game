<template>
  <div class="sys-info">
      <!-- <div class="clear" @click="clearSysInfo">清除信息</div> -->
      <div id='sysInfo'>
        <div class="info warning" :class="{red:v.type=='red',white:v.type=='white',orange:v.type=='orange',blue:v.type=='blue',green:v.type=='green',}" v-for="(v,k) in sysInfo" :key="k">系统<i style="font-size:.12rem" v-if="v.time">({{v.time}})</i>：
          <span>{{v.msg}}</span>
        </div>
      </div>
    </div>
</template>
<script>
import Player from "../../assets/core/player.js"
export default {
  name: "settingsMenu",
  components: {},
  data() {
    return {
      sysInfo:{}
    }
  },
  props: ["item"],
  mounted() {
    this.sysInfo = this.$store.state.sysInfo
  },
  watch: {},
  methods: {
    clearSysInfo() {
      this.$store.commit('clear_sys_info')
    },
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.sys-info {
    position: absolute;
    height: calc(100% - 4.4rem);
    width: 50%;
    bottom: 0.1rem;
    left: 0.1rem;
    transition: 0.2s;
    padding: 0.2rem;
    .clear {
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    #sysInfo {
      overflow-y: auto;
      transition: 0.2s;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .info {
      margin: 0.03rem 0;
    }
    a {
      cursor: pointer;
      text-decoration: underline;
      margin-left: 0.05rem;
    }
    .white > white {
      color: #fafafa;
    }
    .red > span {
      color: #f90202;
    }
    .orange > span {
      color: #de8618;
    }
    .blue > span {
      color: #24c4de;
    }
    .green > span {
      color: #2fe20f;
    }
  }
</style>
