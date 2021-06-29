i=0;
var song=[];
var audio = new Audio('music.mp3');
song.push(audio);
var audio = new Audio('music1.mp3');
song.push(audio);
var audio = new Audio('music2.mp3');
song.push(audio);
function back(){
	song[i].pause();
	song[i].currentTime=0;
	
	if(i>0){
		i=i-1;
		
	}
	else{
		i=song.length-1;
	}
	document.getElementById("img1").src = "play.png";
	play(i);
}
function play(i){
	
	if(song[i].paused){
		document.getElementById("img1").src = "pause.png";
		song[i].play();	
	}
	else if(!song[i].paused){
		document.getElementById("img1").src = "play.png";
		song[i].pause();		
	}
	else if(song[i].ended){
		end();
	}
	
	}
function end(){
var e=song[i].ended;
if(e){
	i+=1;
	if(i>=song.length){
		i=0;
	}

	
	play(i);
}

}

function next(){
song[i].pause();	
song[i].currentTime=0;
if(i==song.length-1){
	i=0;
}
else{
	i=i+1;
}
document.getElementById("img1").src = "play.png";
play(i);
}

function add(){	
    var newsong=prompt("Enter File Name");
	var audio = new Audio(newsong);
	song.push(newsong);
}