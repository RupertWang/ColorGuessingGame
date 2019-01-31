var colors=[];
var squares = document.querySelectorAll(".square");
var squares_length = 6;
var answer;
var str;
var success = false;
var level_easy = false;
var newc = document.querySelector("#newc");
var color_ans;

function generateRandomColor(l){
	answer = Math.round(Math.random()*(l-1));
	for(var i = 0; i < l; i++){
		var r = Math.round(Math.random() * 255);
		var g = Math.round(Math.random() * 255);
		var b = Math.round(Math.random() * 255);
		squares[i].style.backgroundColor = "rgb("+r+","+g+","+b+")";
		colors.push([r,g,b]);
	}

	color_ans = colors[answer];
	console.log(color_ans);
	var color_txt = document.querySelector("#color_txt");
	color_txt.textContent = " ("+color_ans[0]+","+color_ans[1]+","+color_ans[2]+")";

	for(var i = 0; i < l; i++){
		squares[i].addEventListener("click", click);
	}

	function click(){
		if(!success){
			if(Number(this.id[6]) - 1 === answer){
				for(var i = 0; i < l; i++){
					squares[i].style.backgroundColor = "rgb("+color_ans[0]+","+color_ans[1]+","+color_ans[2]+")";
				}
				document.querySelector("#status").textContent = "Correct!";
				document.querySelector("#heading").style.backgroundColor = "rgb("+color_ans[0]+","+color_ans[1]+","+color_ans[2]+")";
				success = true;
				newc.textContent = "Play Again?";
			}
			else{
				squares[Number(this.id[6]) - 1].style.backgroundColor = "#1c1e21";
				document.querySelector("#status").textContent="Try Again!";
			}
		}
	}
}

generateRandomColor(squares.length);



newc.addEventListener("click", function(){
	document.querySelector("#heading").style.backgroundColor = "rgb(59, 114, 204)";
	document.querySelector("#status").textContent = "";
	newc.textContent = "New Colors";
	if(level_easy){
		//level_easy = false;
		success = false;
		squares_length = 3;
		colors = [];
		generateRandomColor(squares_length);
		for(var i = 3; i < 6; i++){
			squares[i].style.display = "none";
		}
	}
	else{
		//level_easy = true;
		success = false;
		squares_length = 6;
		colors = [];
		generateRandomColor(squares_length);
		for(var i = 3; i < 6; i++){
			squares[i].style.display = "block";
		}
	}

});


var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click",function(){
	newc.textContent = "New Colors";
	document.querySelector("#heading").style.backgroundColor = "rgb(59, 114, 204)";
	document.querySelector("#status").textContent = "";
	level_easy = true;
	success = false;
	squares_length = 3;
	colors = [];
	generateRandomColor(squares_length);
	for(var i = 3; i < 6; i++){
		squares[i].style.display = "none";
	}
});

hard.addEventListener("click", function(){
	newc.textContent = "New Colors";
	document.querySelector("#heading").style.backgroundColor = "rgb(59, 114, 204)";
	document.querySelector("#status").textContent = "";
	level_easy = false;
	success = false;
	squares_length = 6;
	colors = [];
	generateRandomColor(squares_length);
	for(var i = 3; i < 6; i++){
			squares[i].style.display = "block";
		}
})