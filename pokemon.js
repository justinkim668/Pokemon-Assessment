// Your code here!
class Pokemon {
  constructor(name, attack, defense, health, type) {
    this.name = name
    this.attack = attack
    this.defense = defense
    this.health = health
    this.maxhealth = health
    this.type = type
  }

takeDamage(damage) {
  var x = this.health
  var y = damage
  var z = x - y
  if (z < 0){
    z = 0
  }
  this.health = z
  return this.health
}

attackOpponent(oppName){
  var netLoss = this.attack - oppName.defense
  if (netLoss < 0){
    netLoss = 0
  }
  return oppName.takeDamage(netLoss)
}

display(){
  let originalHealth = this.maxhealth
  let pokemonName = this.name
  let pokemonType = this.type
  let pokemonNameCaps = pokemonName.toUpperCase()
  let pokemonTypeCaps = pokemonType.toUpperCase()
  var remainingHealth = this.health
  var status = pokemonNameCaps +" ("+ pokemonTypeCaps+") "+remainingHealth+"/"+originalHealth
  var statusString = status.toString()
  return statusString

}
}
// Don't edit this line!
module.exports = Pokemon;
