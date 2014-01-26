var MenuScene = enchant.Class.create(enchant.Scene, {
	initialize:function(background, playLabel) {
		var game = enchant.Game.instance;
		Scene.call(this);
		this.addChild(background);
		var label = new Label();
		
		label.text = playLabel;
		label.font = '60px strong';
		label.x = 320;
		label.y = 400;
		this.addChild(label);

		label.addEventListener(enchant.Event.TOUCH_END, function() {
            game.popScene(this);
            showControl();
        });
	}


    

});