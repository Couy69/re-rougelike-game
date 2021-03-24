import Vue from 'vue'
import Vuex from 'vuex'
import vueInstance from './main'
import handle from './assets/core/handle'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    PLAYER: {},
    sysInfo: [],
    MONSTER:{}
  },
  mutations: {
    set_player_attribute(state, data) {
      this.state.PLAYER = data
    },
    set_monster_attribute(state, data) {
      this.state.MONSTER = data
    },
    set_player_curhp(state, data) {
      var CURHP = this.state.PLAYER.playerFinalAttr.attr.CURHP,
        MAXHP = this.state.PLAYER.playerFinalAttr.attr.MAXHP
      if (data == 'dead') {
        CURHP.value = 1
      }else if(data == 'full'){
        CURHP.value = MAXHP.value
      }
       else {
        this.state.PLAYER.playerFinalAttr.attr.CURHP = Number(CURHP)+Math.round(Number(data));
        if (this.state.PLAYER.playerFinalAttr.attr.CURHP > MAXHP) {
          this.state.PLAYER.playerFinalAttr.attr.CURHP = MAXHP
        }
      }
    },

    set_sys_info(state, data) {
      this.state.sysInfo.push(data);
      if (this.state.sysInfo.length > 30) {
        this.state.sysInfo.shift()
      }
    },
    clear_sys_info(state, data) {
      this.state.sysInfo.splice(1, this.state.sysInfo.length)
    },
  },
})