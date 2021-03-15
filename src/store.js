import Vue from 'vue'
import Vuex from 'vuex'
import vueInstance from './main'
import handle from './assets/core/handle'
Vue.use(Vuex)

var initial_player_attribute = {
  type: 'player',
  MAXHP: 100,
  CURHP: 100,
  // 战斗属性
  ATK: 10,          //攻击力
  ARMOR: 2,         //护甲
  EVADE: 0.5,       //闪避
  ATKSPEED: 1.5,    //攻击速度
  ATKSI: 0.6,       //基础攻击间隔
  ATKSP: 0,         //攻击速度加成
  ARP: 1,           //穿甲
  CRIT: 0.3,        //暴击几率
  CRITDMG: 1.5,     //暴击伤害
  HPRS:1,           //每秒生命恢复
  //人物属性
  GOLD:0,           //拥有的金币
  EXP:0,
  EXPNL:100,        //升到下一级需要的经验
  LV:1,
}

export default new Vuex.Store({
  state: {
    playerAttribute: {},
    sysInfo: [{
      type: '',
      msg: "😠"
    }],
  },
  mutations: {
    set_player_attribute(state, data) {
      this.state.playerAttribute.attribute = attribute
    },
    set_player_gold(state, data) {
      this.state.playerAttribute.GOLD += parseInt(data);
    },
    reset_player_gold(state, data) {
      this.state.playerAttribute.GOLD = parseInt(data);
    },

    clear_sys_info(state, data) {
      this.state.sysInfo.splice(1, this.state.sysInfo.length)
    },
  },
})