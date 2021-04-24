
var auto_seeder_unlocked = false
var auto_planter_unlocked = false
var fertilizer_price = 5
var fertilizer_level = 0

function autoSeeder() {
  if (coins < 5) {
    return
  }
  coins -= 5
  updateCoinsText()
  auto_seeder_unlocked = true
  document.getElementById("buy_auto_seeder").style.display = "none"
  document.getElementById("make_seeds_auto_p").style.display = "inline-block"
  document.getElementById("make_seeds_auto").checked = true
}

function autoPlanter() {
  if (coins < 25) {
    return
  }
  coins -= 25
  updateCoinsText()
  auto_planter_unlocked = true
  document.getElementById("buy_auto_planter").style.display = "none"
  document.getElementById("plant_auto_p").style.display = "inline-block"
  document.getElementById("plant_auto").checked = true
  document.getElementById("plant_auto").innerHTML = "auto"
}

function buyFertilizer() {
  if (coins < fertilizer_price) {
    return
  }
  coins -= fertilizer_price
  updateCoinsText()
  fertilizer_level += 1
  fertilizer_price *= 100
  document.getElementById("buy_fertilizer").innerHTML = "Buy fertilizer [" + fertilizer_level + "/5]<br>" + fertilizer_price + icons[2]
  if (fertilizer_level == 5) {
    document.getElementById("buy_fertilizer").style.display = "none"
  }
}

function autoHarvest() {
  if (coins < 200) {
    return
  }
  coins -= 200
  updateCoinsText()
  document.getElementById("buy_auto_harvest").style.display = "none"
  document.getElementById("harvest_auto_p").style.display = "inline-block"
  document.getElementById("harvest_auto").checked = true
  document.getElementById("harvest_auto").innerHTML = "auto"
}
