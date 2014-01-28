/* 
* Background
*/

var b1 = {
path: "res/b1.png",
height: 600,
width: 800,
}
var b2 = {
path: "res/b2.png",
height: 600,
width: 800,
}


/*
* Fishie Stage
*/

var fishie_player_small = {
path: "res/fish_stage/enemies/salmon_alevin.png",
height: 157,
width: 600,
dir: "chase",
minScale: 0.05,
maxScale: 0.4
}
var fishie_enemy_medium_fish = {
path: "res/fish_stage/enemies/herring.png",
height: 159,
width: 600,
dir: "vertical",
minScale: 0.05,
maxScale: 0.4
}
var fishie_enemy_seal = {
path: "res/fish_stage/enemies/seal.png",
height: 396,
width: 600,
dir: "chase",
minScale: 0.1,
maxScale: 0.5
}
var fishie_enemy_small = {
path: "res/fish_stage/enemies/salmon_fry_animate.png",
height: 300,
width: 600,
dir: "horizontal",
minScale: 0.02,
maxScale: 0.2
}

fishie_enemies = [fishie_enemy_small, fishie_enemy_seal, fishie_enemy_medium_fish];	
