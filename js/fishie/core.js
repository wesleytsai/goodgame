/*
 * Fishie Stage
 */
 
var fishie_player_small = {
							path: "res/fish_stage/player/GreenFish.png",
							height: 12,
							width: 22,
                            dir: "vertical"
						  }
var fishie_enemy_medium_fish = {
							path: "res/fish_stage/enemies/salmon_fry.png",
							height: 0,
							width: 0,
                            dir: "vertical"
						       }
var fishie_enemy_seal = {
							path: "res/fish_stage/enemies/seal.png",
							height: 0,
							width: 0,
                            dir: "chase"
						 }
var fishie_enemy_small = {
							path: "res/fish_stage/enemies/fishbaddie_parts.png",
							height: 50,
							width: 50,
                            dir: "horizontal"
						 }

fishie_enemies = [fishie_player_small];//, fishie_enemy_small];	
