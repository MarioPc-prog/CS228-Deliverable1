var controllerOptions = {};
//set window width 1/2 as x 
var x = window.innerWidth*1/2 ;
//set window height 1/2 as y
var y = window.innerHeight*1/2;
Leap.loop(controllerOptions, function(frame){
	//clear();
	//circle(x,y,50);
	//var randomX = Math.random();
	//x = x + randomX;
	//var randomY = Math.random(-1);
	//y = y +randomY
	console.log(frame);
	for(var h = 0; h < frame.hands.length; h++){
    		var hand = frame.hands[h];
	}

}
);


















