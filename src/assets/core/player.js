class Player {
  constructor() {
    this.playerBaseAttr = config.playerAttribute
    this.playerArmor = {}
    this.playerWeap = {}
    this.playerRing = {}
    this.playerShoes = {}
  }

  set_player_weapon(data) {
    this.state.playerAttribute.weapon = data
    this.set_player_attribute()
  }
  set_player_armor(data) {
    this.state.playerAttribute.armor = data
    this.set_player_attribute()
  }
  set_player_ring(data) {
    this.state.playerAttribute.ring = data
    this.set_player_attribute()
  }
  set_player_Shoes(data) {
    this.state.playerAttribute.shoes = data
    this.set_player_attribute()
  }
  set_player_attribute(){

  }

}

export default Player