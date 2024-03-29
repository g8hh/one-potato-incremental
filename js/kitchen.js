
var food_type = "none"
var auto_food_selected = ""
var food_tier = 0
var fry_bonus = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var fry_multiplier = 1
var auto_cook = false
var auto_cook_recipie = 0
var auto_eating = false;

function makeBakedPotato() {
  if (have_potato == false || seeds == 0 || food_type != "none") {
    return
  }
  food_type = "baked_potato"
  food_tier = potato_tier
  have_potato = false
  updatePotatoText()
  document.getElementById("plate").innerHTML = "<img src='sprites/baked_potato.png' style='height:100px;width:100px;'></img>"
  document.getElementById("food_info").innerHTML = "Baked Potato, Tier " + food_tier
  document.getElementById("food_options").style.display = "block"
  document.getElementById("eat_food").innerHTML = "Eat It ["+numberFormat(potato_stage_requirements[food_tier-1])+"/1]<br>(-1% growth time for tier " + food_tier + ")"
  awardAchievement(5,1)
  if (auto_eating) {
    eatFood();
  }
}

function makeFries() {
  if (have_potato == false || seeds == 0 || food_type != "none") {
    return
  }
  food_type = "fries"
  food_tier = potato_tier
  have_potato = false
  updatePotatoText()
  document.getElementById("plate").innerHTML = "<img src='sprites/fries.png' style='height:100px;width:100px;'></img>"
  document.getElementById("food_info").innerHTML = "Fries, Tier " + food_tier
  document.getElementById("food_options").style.display = "block"
  document.getElementById("eat_food").innerHTML = "Eat Them<br>(+1% coins from food)<br>["+fry_bonus[food_tier-1]+"/"+(100+fry_boost[food_tier-1])+"]"
  awardAchievement(1,2)
  if (auto_eating) {
    eatFood();
  }
}

function makeChips() {
  if (have_potato == false || seeds == 0 || food_type != "none") {
    return
  }
  food_type = "chips"
  food_tier = potato_tier
  have_potato = false
  updatePotatoText()
  document.getElementById("plate").innerHTML = "<img src='sprites/chips.png' style='height:100px;width:100px;'></img>"
  document.getElementById("food_info").innerHTML = "Chips, Tier " + food_tier
  document.getElementById("food_options").style.display = "block"
  document.getElementById("eat_food").innerHTML = "Eat Them<br>(" + numberFormat(8**(food_tier-1)) + " coins/min)"
  awardAchievement(4,2)
  if (auto_eating) {
    eatFood();
  }
}

function removeFood() {
  food_type = "none"
  food_tier = 0
  document.getElementById("plate").innerHTML = ""
  document.getElementById("food_options").style.display = "none"
  if (auto_cook_recipie == 0) {
    return
  } else if (auto_cook_recipie == 1) {
    makeBakedPotato();
  } else if (auto_cook_recipie == 2) {
    makeFries();
  } else if (auto_cook_recipie == 3) {
    makeChips();
  }
}

function eatFood() {
  if (food_type == "baked_potato") {
    if (potato_stage_requirements[food_tier - 1] > 1) {
      potato_stage_requirements[food_tier - 1] -= (Math.floor(1 + (potato_stage_requirements[food_tier - 1]/100)))*(baked_potato_boost[food_tier - 1]+1)
      if (food_tier == 8) {
        awardAchievement(6,1)
      }
      if (potato_stage_requirements[food_tier - 1] < 1) {
        potato_stage_requirements[food_tier - 1] = 1
      }
      removeFood()
      }
  } else if (food_type == "fries") {
    if (fry_bonus[food_tier - 1] < 100 + fry_boost[food_tier - 1]) {
      if (fry_bonus[food_tier - 1] == undefined) {
        fry_bonus[food_tier - 1] = 1
      } else {
        fry_bonus[food_tier - 1] += 1
      }
      fry_multiplier = 1
      for (i = 0; i < fry_bonus.length; i++) {
        fry_multiplier *= 1+(fry_bonus[i]/100)
      }
      removeFood()
    }
  } else if (food_type == "chips") {
    coins_per_second += (8**(food_tier-1)) / 60
    removeFood()
  }
}

function toggleAutoEat() {
  if (auto_eating == false) {
    auto_eating = true;
    document.getElementById("auto_eat_button").innerHTML = "Auto Eat: On";
  } else {
    auto_eating = false;
    document.getElementById("auto_eat_button").innerHTML = "Auto Eat: Off";
  }
}

function sellFood() {
  coins += 2*8**(food_tier-1)*fry_multiplier
  updateCoinsText()
  removeFood()
}

function autoCook(recipie) {
  document.getElementById("microwave_inside").innerHTML = ""
  document.getElementById("auto_cook_1").style.background = "darkblue"
  document.getElementById("auto_cook_2").style.background = "darkblue"
  document.getElementById("auto_cook_3").style.background = "darkblue"
  if (recipie == 1) {
    if (auto_cook_recipie == 1) {
      auto_cook_recipie = 0
      return
    }
    auto_cook_recipie = 1;
    makeBakedPotato();
    document.getElementById("microwave_inside").innerHTML = "<img src='sprites/baked_potato.png' style='height:100px;width:100px;'></img>"
    document.getElementById("auto_cook_1").style.background = "darkgreen"
  }
  else if (recipie == 2) {
    if (auto_cook_recipie == 2) {
      auto_cook_recipie = 0
      return
    }
    auto_cook_recipie = 2;
    makeFries();
    document.getElementById("microwave_inside").innerHTML = "<img src='sprites/fries.png' style='height:100px;width:100px;'></img>"
    document.getElementById("auto_cook_2").style.background = "darkgreen"
  }
  else if (recipie == 3) {
    if (auto_cook_recipie == 3) {
      auto_cook_recipie = 0
      return
    }
    auto_cook_recipie = 3;
    makeChips();
    document.getElementById("microwave_inside").innerHTML = "<img src='sprites/chips.png' style='height:100px;width:100px;'></img>"
    document.getElementById("auto_cook_3").style.background = "darkgreen"
  }
}
