import Vue from 'vue'
import Vuex from 'vuex'
import vueInstance from './main'
import handle from './assets/js/handle'
Vue.use(Vuex)

var initial_player_attribute = {
  type: 'player',
  MAXHP: 100,
  CURHP: 100,
  // 战斗属性
  STR: 10,          //力量
  STA: 10,          //耐力
  AGI: 10,          //敏捷
  INT: 10,          //智力
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
  POINT:0,          //属性点
  SORA:1,           //金币与经验获取倍率
  GETSTR:3,         //升级获得的力量
  GETSTA:3,         //升级获得的耐力
  GETAGI:3,         //升级获得的敏捷
  GETINT:3,         //升级获得的智力
}

export default new Vuex.Store({
  state: {
    playerAttribute: {}
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
  },
})