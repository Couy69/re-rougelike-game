import Vue from 'vue'
import Vuex from 'vuex'
import vueInstance from './main'
import handle from './assets/core/handle'
import Player from "@/assets/core/player.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    PLAYER: {},
    sysInfo: [],
    MONSTER: {},
    backpackGrids: JSON.stringify(new Array(24).fill({}))
  },
  mutations: {
    set_player_exp(state, data) {
      this.state.PLAYER.playerFinalAttr.attr.EXP = data
      this.state.PLAYER.playerBaseAttr.attr.EXP = data
    },
    set_player_lv(state, data) {
      this.state.PLAYER.playerFinalAttr.attr.LV = data
      this.state.PLAYER.playerBaseAttr.attr.LV = data
    },
    set_player_attribute(state, data) {
      this.state.PLAYER = data
    },
    set_player_attribute_byBaseAttr(state, attr) {
      this.state.PLAYER.playerBaseAttr.attr = attr
      this.state.PLAYER.setPlayerFinalAttribute()
    },
    set_player_attribute_constraint(state, data) {
      let player = new Player()
      player.playerBaseAttr = data.playerBaseAttr
      player.playerArmor =data.playerArmor
      player.playerWeapon =data.playerWeapon
      player.playerRing = data.playerRing
      player.playerShoes = data.playerShoes
      player.setPlayerFinalAttribute()
      this.state.PLAYER = player
    },
    set_monster_attribute(state, data) {
      this.state.MONSTER = data
    },
    set_player_curhp(state, data) {
      var CURHP = this.state.PLAYER.playerFinalAttr.attr.CURHP,
        MAXHP = this.state.PLAYER.playerFinalAttr.attr.MAXHP
      if (data == 'dead') {
        CURHP.value = 1
      } else if (data == 'full') {
        CURHP.value = MAXHP.value
      } else {
        this.state.PLAYER.playerFinalAttr.attr.CURHP = Number(CURHP) + Math.round(Number(data));
        if (this.state.PLAYER.playerFinalAttr.attr.CURHP > MAXHP) {
          this.state.PLAYER.playerFinalAttr.attr.CURHP = MAXHP
        }
      }
    },
    add_backpack_equi(state, data) {
      let backpackGrids = JSON.parse(state.backpackGrids)
      for (let i = 0; i < backpackGrids.length; i++) {
        if (JSON.stringify(backpackGrids[i]).length < 3) {
          backpackGrids[i] = data
          break
        }
      }
      state.backpackGrids = JSON.stringify(backpackGrids)
    },
    remove_backpack_equi(state, index){
      let backpackGrids = JSON.parse(state.backpackGrids)
      backpackGrids[index] = {}
      state.backpackGrids = JSON.stringify(backpackGrids)
    },
    change_backpack_equi(state,data){
      let backpackGrids = JSON.parse(state.backpackGrids)
      backpackGrids[data.index] = data.equi
      state.backpackGrids = JSON.stringify(backpackGrids)
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