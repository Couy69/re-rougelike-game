class Player {
  constructor() {
    this.playerBaseAttr = config.playerAttribute
    this.playerArmor = {}
    this.playerWeap = {}
    this.playerRing = {}
    this.playerShoes = {}
  }

  setPlayerWeapon(data) {
    this.state.playerAttribute.weapon = data
    this.setPlayerAttribute()
  }
  setPlayerArmor(data) {
    this.state.playerAttribute.armor = data
    this.setPlayerAttribute()
  }
  setPlayerRing(data) {
    this.state.playerAttribute.ring = data
    this.setPlayerAttribute()
  }
  setPlayerShoes(data) {
    this.state.playerAttribute.shoes = data
    this.setPlayerAttribute()
  }
  setPlayerAttribute(){

  }

}

export default Player