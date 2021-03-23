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
    // set_player_gold(state, data) {
    //   this.state.playerAttribute.GOLD += parseInt(data);
    // },
    // reset_player_gold(state, data) {
    //   this.state.playerAttribute.GOLD = parseInt(data);
    // },

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