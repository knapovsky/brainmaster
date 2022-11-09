var intervalId = -1;
var i = 0;
var pathStack = [];
var directionStack = [];
var type = 4;
var cellCount = 50;
var errorCounter = -1;
var timeout = 50;
var drawType = 3;
var timeoutToLearn = 15;
var timeoutToLearnBackup;
var pathStackBackup = [];
/* Promenna pro ulozeni predchazejiciho stisknuteho pole */
var previousCell;
var score = 0;
var game;
var diff;
var control;
var x = false;
var mouse = false;
var pathWindowStyle = {
	'position':"absolute",
	'width' : "36px",
	"height": "36px",
	"border": "0px solid #b1757c"
};

var border = {
	"border-radius": "8px",
  	"-moz-border-radius": "8px", /* Firefox */
  	"-webkit-border-radius": "8px", /* Safari and Chrome */
  	"-o-border-radius": "8px" /* Opera */
};

var g2colorArray = [];
var g2colorArrayBackup = [];
var g2drawTimeout = 1000;
var colors = 4;
var fields = 5;
var g2gameField = 10;
var g2gameArray = [];
var correctColors = 0;
var g2timeoutId = 0;
var g2timeToLearn = 3;
var g2timeToLearnBackup;
var g2enterPath = false;
var g2intervalId = 0;
var g2cellPerRow = 10;

var currentTime;

var gameWindowSize = 370;


function processResult(){
	var newCurrentTime = new Date;
	var userEntryTime = newCurrentTime - currentTime;
	var difficulty;
	if( diff == "easy" ) difficulty = 1;
	else if( diff == "normal") difficulty = 2;
	else if( diff == "insane") difficulty = 3;
	else ;

	//window.location.href="process.php?name=" + $("#user").html() + "&type=" + game + "&difficulty=" + difficulty + "&control=" + control + "&g1timetolearn=" + timeoutToLearnBackup + "&pathlenght=" + cellCount + "&pathfinderscore=" + score + "&time=" + userEntryTime + "&g2timetolearn=" + g2timeToLearn + "&fields=" + fields + "&correctcolors=" + correctColors;
}

function generatePathField(){
	for(var i = 0; i < 100; i++){
		$("<div id=" + i + "></div>").attr('class', 'path_cell').css('pointer', 'cursor').css('margin', '0px').css('padding', '0px').css('z-index', '2').css(pathWindowStyle).css('left', ''+(((i*37)%gameWindowSize)+0) + 'px').css('top', ((Math.floor(i*37/gameWindowSize)*37)+0) + 'px').appendTo('#pathWindow'); 
	}
	$('#pathWindow').css('background-image', 'url(img/grid.png)').css('background-position', '-1px 0px').css('background-repeat', 'repeat-x').css(border).css('margin', '0px').css('padding', '0px').css('left', '0px').css('z-index', '1').css('border', '2px solid #b1757c').css('width', gameWindowSize + '').css('height', '' + gameWindowSize).css('position', 'absolute').css('top', '69px');
	//$('#pathWindow').css('background', '#fedde1');
}

function gameStarter(){
	generatePathField();
}

function youArePrettyAwesome(cell){
	score++;
	$("#"+cell).css('background-image', 'url(img/filled.png)');
	$("#progressBarValue").html(score +'/'+(cellCount));
	$("#progressBar").progressbar({value:score/cellCount*100});
	pathStackBackup.shift();
}

function youAreInAPrettyDeepSomething(){
	$("#progressBarMessage").html("<b>You Lose</b>");
	processResult();
	pathStackBackup = [];
	score = 0;
}

function checkAndColor(elem)
{
	if( pathStackBackup[0] == elem.id ){
		score++;
		$("#progressBarValue").html(score +'/'+(cellCount));
		$("#progressBar").progressbar({value:score/cellCount*100});
		previousCell = pathStackBackup[0];
		document.getElementById(elem.id.toString()).style.backgroundImage = "url('img/filled.png')";
		pathStackBackup.shift();
	}
	else if(elem.id == previousCell);
	else{
		$("#progressBarMessage").html("<b>You Lose</b>");
		pathStackBackup = [];
		processResult();
		score = 0;
		return;
	}
	if(pathStackBackup.length == 0) {
		$("#progressBarMessage").html("<b>You Win</b>");
		processResult();
	}
}

function enterPath(){
	if( mouse == true ){
		//alert("mouse is true");
		for(var i = 0; i < 100; i++){
			if(pathStackBackup[0] != i) document.getElementById(i.toString()).setAttribute('onclick', 'checkAndColor(this)');
		}
		$("#"+ pathStackBackup[0]).css("background-image", "url(img/begin.png)");
		pathStackBackup.shift();
	}
	else{
		$("#progressBarMessage").html('Please enter path.');
		$("#"+ pathStackBackup[0]).css("background-image", "url(img/begin.png)");
		$(document).keydown(function(event){
			var currentPoint = new point(pathStackBackup[0]);
			if(event.keyCode == '38'){
				if(pathStackBackup[1] == currentPoint.up){
					youArePrettyAwesome(pathStackBackup[1]);	
				}
				else youAreInAPrettyDeepSomething();
			}
			else if(event.keyCode == '39'){
				if(pathStackBackup[1] == currentPoint.right){
					youArePrettyAwesome(pathStackBackup[1]);	
				}
				else youAreInAPrettyDeepSomething();
			}
			else if(event.keyCode == '40'){
				if(pathStackBackup[1] == currentPoint.down){
					youArePrettyAwesome(pathStackBackup[1]);	
				}
				else youAreInAPrettyDeepSomething();
			}
			else if(event.keyCode == '37'){
				if(pathStackBackup[1] == currentPoint.left){
					youArePrettyAwesome(pathStackBackup[1]);	
				}
				else youAreInAPrettyDeepSomething();
			}
			else $("#progressBarMessage").html('Use arrows please.');
			
			if(score == cellCount){
				$("#progressBarMessage").html('You Win!');
				$(document).unbind();
				processResult();
			}
		});
	}
}

function updateTimeout()
{	
	$("#progressBarName").html("Time Left");
	$("#progressBarValue").html(timeoutToLearn.toString());
	$("#progressBar").progressbar({ value: (((timeoutToLearn)/(timeoutToLearnBackup))*100)});
	timeoutToLearn--;
	if(timeoutToLearn < 0) {
		$("#progressBarMessage").html("<b>Enter Path</b>");
		$("#progressBarValue").html('0/'+(cellCount));
		$("#progressBarName").html('Progress');
		clearInterval(intervalId);
		for(var i = 0; i < 100; i++){
			$("#"+i).css('background-image', 'url(img/empty.png)');
		}
		currentTime = new Date();
		enterPath();
	}
}

// Funkce ziska random cislo mezi min a max
function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funkce ziska random cislo mezi 0 a 99
function getRandomCell()
{
	return getRandomInt(0, 99);
}

function point(position) {
		this.position = position;
		this.up = position - 10;
		this.down = position + 10;
		this.left = position - 1;
		this.right = position + 1;
		this.upup = position - 20;
		this.updown = position;
		this.upleft = position - 11;
		this.upright = position  - 9;
		this.downup = position;
		this.downdown = position + 20;
		this.downleft = position + 9;
		this.downright = position + 11;
		this.leftup = position - 11;
		this.leftdown = position + 9;
		this.leftleft = position - 2;
		this.leftright = position;
		this.rightup = position - 9;
		this.rightdown = position + 11;
		this.rightleft = position;
		this.rightright = position + 2;
}
	
function pause(millis) 
{
	var date = new Date();
	var curDate = null;

	do { curDate = new Date(); } 
	while(curDate-date < millis);
}

function drawPath(pathStack, directionStack) {
	for(var i = 0; i < pathStack.length; i++) {
		
		$("#"+pathStack[i]).css("borderWidth", "0");
		 
		if( i == 0 ) {
			if( directionStack[i+1] == "down" ) {
				$("#"+pathStack[i]).css("background-image", "url(img/beginDown.png)");
			}
			else if( directionStack[i+1] == "up" ) {
				$("#"+pathStack[i]).css("background-image", "url(img/beginUp.png)"); 
			}
			else if( directionStack[i+1] == "left" ) {
				$("#"+pathStack[i]).css("background-image", "url(img/beginLeft.png)"); 
			}
			else if( directionStack[i+1] == "right" ) {
				$("#"+pathStack[i]).css("background-image", "url(img/beginRight.png)");
				
			}	
		}
		else {			
			if(directionStack[i] == "up" && directionStack[i+1] == "down") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpDown.png)");
			}
			else if(directionStack[i] == "up" && directionStack[i+1] == "left") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledLeftDown.png)");
			}
			else if(directionStack[i] == "up" && directionStack[i+1] == "right") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledDownRight.png)");
			}
			else if(directionStack[i] == "up" && directionStack[i+1] == "up") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpDown.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == "up") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpDown.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == "down") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpDown.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == "left") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpLeft.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == "right") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpRight.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == "up") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpDown.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == "down") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpDown.png)");
			}
			else if(directionStack[i] == "left" && directionStack[i+1] == "left") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledLeftRight.png)");
			}
			else if(directionStack[i] == "left" && directionStack[i+1] == "right") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledLeftRight.png)");
			}
			else if(directionStack[i] == "left" && directionStack[i+1] == "up") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpRight.png)");
			}
			else if(directionStack[i] == "left" && directionStack[i+1] == "down") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledDownRight.png)");
			}
			else if(directionStack[i] == "right" && directionStack[i+1] == "left") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledLeftRight.png)");
			}
			else if(directionStack[i] == "right" && directionStack[i+1] == "right") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledLeftRight.png)");
			}
			else if(directionStack[i] == "right" && directionStack[i+1] == "up") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpLeft.png)");
			}
			else if(directionStack[i] == "right" && directionStack[i+1] == "down") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledLeftDown.png)");
			}
			else if(directionStack[i] == "up" && directionStack[i+1] == undefined ){
				$("#"+pathStack[i]).css("background-image", "url(img/filledEndDown.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == undefined ){
				$("#"+pathStack[i]).css("background-image", "url(img/filledEndUp.png)");
			}
			else if(directionStack[i] == "right" && directionStack[i+1] == undefined ){
				$("#"+pathStack[i]).css("background-image", "url(img/filledEndLeft.png)");
			}
			else if(directionStack[i] == "left" && directionStack[i+1] == undefined ){
				$("#"+pathStack[i]).css("background-image", "url(img/filledEndRight.png)");
			}
		}
	}
}

function drawNextCell(pathStack, directionStack){
	if(pathStack.length == 0) {
		clearInterval(intervalId);
		//odpocet casu
		intervalId = setInterval("updateTimeout()", 1000);
		return;
	}
	else{
		i = 0;
		$("#"+pathStack[i]).css("borderWidth", "0");	 
		if( directionStack[0] == "start" ) {	
			if( directionStack[i+1] == "down" ) {
				$("#"+pathStack[i]).css("background-image", "url(img/beginDown.png)");
			}
			else if( directionStack[i+1] == "up" ) {
				$("#"+pathStack[i]).css("background-image", "url(img/beginUp.png)"); 
			}
			else if( directionStack[i+1] == "left" ) {
				$("#"+pathStack[i]).css("background-image", "url(img/beginLeft.png)"); 
			}
			else if( directionStack[i+1] == "right" ) {
				$("#"+pathStack[i]).css("background-image", "url(img/beginRight.png)");
				
			}	
		}
		else {	
			
			if(directionStack[i] == "up" && directionStack[i+1] == "down") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpDown.png)");
			}
			else if(directionStack[i] == "up" && directionStack[i+1] == "left") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledLeftDown.png)");
			}
			else if(directionStack[i] == "up" && directionStack[i+1] == "right") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledDownRight.png)");
			}
			else if(directionStack[i] == "up" && directionStack[i+1] == "up") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpDown.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == "up") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpDown.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == "down") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpDown.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == "left") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpLeft.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == "right") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpRight.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == "up") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpDown.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == "down") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpDown.png)");
			}
			else if(directionStack[i] == "left" && directionStack[i+1] == "left") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledLeftRight.png)");
			}
			else if(directionStack[i] == "left" && directionStack[i+1] == "right") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledLeftRight.png)");
			}
			else if(directionStack[i] == "left" && directionStack[i+1] == "up") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpRight.png)");
			}
			else if(directionStack[i] == "left" && directionStack[i+1] == "down") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledDownRight.png)");
			}
			else if(directionStack[i] == "right" && directionStack[i+1] == "left") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledLeftRight.png)");
			}
			else if(directionStack[i] == "right" && directionStack[i+1] == "right") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledLeftRight.png)");
			}
			else if(directionStack[i] == "right" && directionStack[i+1] == "up") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledUpLeft.png)");
			}
			else if(directionStack[i] == "right" && directionStack[i+1] == "down") {
				$("#"+pathStack[i]).css("background-image", "url(img/filledLeftDown.png)");
			}
			else if(directionStack[i] == "up" && directionStack[i+1] == undefined ){
				$("#"+pathStack[i]).css("background-image", "url(img/filledEndDown.png)");
			}
			else if(directionStack[i] == "down" && directionStack[i+1] == undefined ){
				$("#"+pathStack[i]).css("background-image", "url(img/filledEndUp.png)");
			}
			else if(directionStack[i] == "right" && directionStack[i+1] == undefined ){
				$("#"+pathStack[i]).css("background-image", "url(img/filledEndLeft.png)");
			}
			else if(directionStack[i] == "left" && directionStack[i+1] == undefined ){
				$("#"+pathStack[i]).css("background-image", "url(img/filledEndRight.png)");
			}
		}
	}
	pathStack.shift();
	directionStack.shift();
	return;
}
		
function drawPath(pathStack, directionStack) {
	if(pathStack.length == 0) {
		clearInterval(intervalId);
		//odpocet casu
		intervalId = setInterval("updateTimeout()", 1000);
		return;
	}
	else{
		if( directionStack[0] == "start" ){
			$("#"+pathStack[i]).css("background-image", "url(img/begin.png)");
		}
		else{	
			$("#"+pathStack[i]).css("background-image", "url(img/filled.png)");
		}
	}
	pathStack.shift();
	directionStack.shift();
	return;
}

function drawPathArrow(pathStack, directionStack) {
	if(pathStack.length == 0) {
		clearInterval(intervalId);
		//odpocet casu
		intervalId = setInterval("updateTimeout()", 1000);
		return;
	}
	else{
		if( directionStack[0] == "start" ){
			if(directionStack[i+1] == "up"){
			$("#"+pathStack[i]).css("background-image", "url(img/begin.png)");
			}
			else if(directionStack[i+1] == "down"){
				$("#"+pathStack[i]).css("background-image", "url(img/begin.png)");
			}
			else if(directionStack[i+1] == "right"){
				$("#"+pathStack[i]).css("background-image", "url(img/begin.png)");
			}
			else if(directionStack[i+1] == "left"){
				$("#"+pathStack[i]).css("background-image", "url(img/begin.png)");
			}
		}
		else{	
			if(directionStack[i+1] == "up"){
				$("#"+pathStack[i]).css("background-image", "url(img/filledUp.png)");
			}
			else if(directionStack[i+1] == "down"){
				$("#"+pathStack[i]).css("background-image", "url(img/filledDown.png)");
			}
			else if(directionStack[i+1] == "right"){
				$("#"+pathStack[i]).css("background-image", "url(img/filledRight.png)");
			}
			else if(directionStack[i+1] == "left"){
				$("#"+pathStack[i]).css("background-image", "url(img/filledLeft.png)");
			}
			else $("#"+pathStack[i]).css("background-image", "url(img/filled.png)");
		}
	}
	pathStack.shift();
	directionStack.shift();
	return;
}

function markPath(pathStack) {
	for(var i = 0; i < pathStack.length; i++) {
		document.getElementById(pathStack[i].toString()).innerHTML=i;
	}
}

// Funkce vytvori cestu a vlozi prvky na zasobnik
function makePath(currentCell, length, pathStack, directionStack, type)
{	
	if(length <= 0) {
		return;
	}
	
	var upCounter = 0;
	var downCounter = 0;
	var leftCounter = 0;
	var rightCounter = 0;
	var restrictedCells = [];
	var allowedCells = [];
	
	// kontrola horni hranice
	if(currentCell.up < 0) restrictedCells.push(currentCell.up);
	// kontrola prave hranice
	if(currentCell.position%10 == 9) restrictedCells.push(currentCell.right);
	// kontrola dolni meze
	if(currentCell.down > 99) restrictedCells.push(currentCell.down); 
	// kontrola leve hranice
	if(currentCell.position%10 == 0) restrictedCells.push(currentCell.left);
	
	// kontrola, kam muzeme jit (na kterych polich jsme jeste nebyli)
	if(pathStack.indexOf(currentCell.up) != -1) {
		if(restrictedCells.indexOf(currentCell.up) == -1) {restrictedCells.push(currentCell.up);}
	}
	if(pathStack.indexOf(currentCell.right) != -1) {
		if(restrictedCells.indexOf(currentCell.right) == -1) {restrictedCells.push(currentCell.right);}
	}
	if(pathStack.indexOf(currentCell.down) != -1) {
		if(restrictedCells.indexOf(currentCell.down) == -1) {restrictedCells.push(currentCell.down);}
	}
	if(pathStack.indexOf(currentCell.left) != -1) {
		if(restrictedCells.indexOf(currentCell.left) == -1) {restrictedCells.push(currentCell.left);}
	}	
	// dalsi pole se nesmi dotykat 2 vybarvenych poli
	
	if(pathStack.indexOf(currentCell.upup) != -1) upCounter++;
	if(pathStack.indexOf(currentCell.updown) != -1) upCounter++;
	if(pathStack.indexOf(currentCell.upleft) != -1) upCounter++;
	if(pathStack.indexOf(currentCell.upright) != -1) upCounter++;
	
	if(pathStack.indexOf(currentCell.downup) != -1) downCounter++;
	if(pathStack.indexOf(currentCell.downdown) != -1) downCounter++;
	if(pathStack.indexOf(currentCell.downleft) != -1) downCounter++;
	if(pathStack.indexOf(currentCell.downright) != -1) downCounter++;
	
	if(pathStack.indexOf(currentCell.leftup) != -1) leftCounter++;
	if(pathStack.indexOf(currentCell.leftdown) != -1) leftCounter++;
	if(pathStack.indexOf(currentCell.leftleft) != -1) leftCounter++;
	if(pathStack.indexOf(currentCell.leftright) != -1) leftCounter++;
	
	if(pathStack.indexOf(currentCell.rightup) != -1) rightCounter++;
	if(pathStack.indexOf(currentCell.rightdown) != -1) rightCounter++;
	if(pathStack.indexOf(currentCell.rightleft) != -1) rightCounter++;
	if(pathStack.indexOf(currentCell.rightright) != -1) rightCounter++;
	
	if(upCounter > type) restrictedCells.push(currentCell.up);
	if(rightCounter > type) restrictedCells.push(currentCell.right);
	if(downCounter > type) restrictedCells.push(currentCell.down);
	if(leftCounter > type) restrictedCells.push(currentCell.left);
	
	if(restrictedCells.indexOf(currentCell.up) == -1) allowedCells.push(currentCell.up);
	if(restrictedCells.indexOf(currentCell.right) == -1) allowedCells.push(currentCell.right);
	if(restrictedCells.indexOf(currentCell.down) == -1) allowedCells.push(currentCell.down);
	if(restrictedCells.indexOf(currentCell.left) == -1) allowedCells.push(currentCell.left);
	
	if(allowedCells.length == 0) { pathStack.push(-1);  return; }		
	
	var nextCellId = getRandomInt(0, allowedCells.length - 1);
	pathStack.push(allowedCells[nextCellId]);
	if(currentCell.up == allowedCells[nextCellId]) directionStack.push("up");
	else if (currentCell.right == allowedCells[nextCellId]) directionStack.push("right");
	else if (currentCell.down == allowedCells[nextCellId]) directionStack.push("down");
	else if (currentCell.left == allowedCells[nextCellId]) directionStack.push("left");
	else { pathStack.push(-1); return; }
	
	var newPoint = new point(allowedCells[nextCellId]);
	makePath(newPoint, length - 1, pathStack, directionStack, type);
}
	
function clearPathFinderGame(){
	
	// cisteni progress baru
	$("progressBarMessage").html('');
	$("prograssBarValue").html('');
	$("prograssBarName").html('');
	$("#progressBar").progressbar({ value: 100});
	
	// cisteni hraciho pole
	$('#colors').html( '' );
	$('#gameField').html( '' ); 
	$('#pathWindow').html( '' );
	$('#colors').css('display', 'none');
	$('#gameField').css('display', 'none');
	
	//errorCounter = 0;
	pathStack = [];
	directionStack = [];
	pathStackBackup = [];
	//mouse = false;
	
	
	$("td").css("background-image", "url(img/empty.png)");
	for(var i = 0; i < 100; i++){
		$("#"+i).css("borderWidth", "1");
	}
	clearInterval(intervalId);
	score = 0;
	
	//alert("konec");
}

function tryToMakeAFuckingNicePathfiderGameRightNow()
{
	//alert("::");
	//clearPathFinderGame();
	//alert(errorCounter);
	// nahodny pocatecni prvek
	var position = getRandomCell();
	var firstCell = new point(position);
	pathStack.push(firstCell.position);
	directionStack.push("start");	
	makePath(firstCell, cellCount, pathStack, directionStack, type);
	if(pathStack.indexOf(-1) != -1) {pathStack = []; directionStack = []; return false;}
	pathStackBackup = pathStackBackup.concat(pathStack);
	//alert(pathStackBackup);
	if(drawType == 1){
		intervalId = setInterval("drawNextCell(pathStack, directionStack)", timeout);
	}
	else if(drawType == 2){
		intervalId = setInterval("drawPathArrow(pathStack, directionStack)", timeout);
	}
	else intervalId = setInterval("drawPath(pathStack, directionStack)", timeout);

	
	return true;
	
}

function pathFinderGameStart()
{
	var cellCountTmp = 0;
	if (control == "mouse") mouse = true;
	else mouse = false;
	
	if(diff == "easy"){
		cellCount = 10;
		timeoutToLearn = 10;
	}
	else if( diff == "normal"){
		cellCount = 15;
		timeoutToLearn = 10;
	}
	else if( diff == "insane"){
		cellCount = 25;
		timeoutToLearn = 10;
	}
	else ;
	
	clearPathFinderGame();
	
	pathStackBackup = [];
	x = false;
	timeout = 100;
	type = 1;
	drawType = 3;
	//cellCount = 3;
	//timeoutToLearn = 3;
	timeoutToLearnBackup = timeoutToLearn;
	//alert(":");
	cellCountTmp = cellCount;
	// vytvoreni hraciho pole 
	generatePathField();
	// vytvoreni cesty a jeji vykresleni
	do{
		x = tryToMakeAFuckingNicePathfiderGameRightNow();
		cellCount = cellCountTmp;
		errorCounter++;
	}while(x == false);
}

function g2updateTimeout(){
	$("#progressBarName").html("Time Left");
	$("#progressBarValue").html(g2timeToLearn.toString());
	g2timeToLearn--;
	$("#progressBar").progressbar({ value: (((g2timeToLearn+1)/(g2timeToLearnBackup))*100)});
	if(g2timeToLearn < 0) {
		clearInterval(g2intervalId);
		$("#progressBarMessage").html("<b>Enter Colors</b>");
		$("#progressBarValue").html('0/'+(fields));
		$("#progressBarName").html('Progress');
		g2clearGameField();
		currentTime = new Date();
		g2enterPath = true;
	}
}

function g2clearGameField(){
	for(var i = 0; i < g2gameField; i++){
		$('#drop'+i).css( 'background-image', "url(img/empty.png)");   
	}
}

function colorDropper( event, ui ){
	$("#progressBarMessage").html("");
	var gameCell = $(this).data( 'gameCell' );
	var gameCellColor = $(this).data( 'color' );
	var droppedColor = ui.draggable.data( 'color' );
	
	if(g2enterPath){
		if(gameCellColor == droppedColor) {
			$("#progressBarValue").html((correctColors+1)+'/'+(fields));
			$(this).css('background-image', 'url(./img/color' + droppedColor + '.png)');
			ui.draggable.addClass( 'correct' );
			$(this).droppable( 'disable' );
			ui.draggable.draggable( 'option', 'revert', false);
			correctColors++;
			$("#progressBar").progressbar({ value: ((correctColors/(fields)) * 100)});
		}
		else{
			$("#progressBarMessage").html("<b>You Lose</b>");
			processResult();
			
			
			
			
			
			
		}
	}
	else $("#progressBarMessage").html("<b>Wait Please</b>");
	
	if(correctColors == fields){
		$("#progressBarMessage").html("<b>You Win</b>");
		processResult();
		
		
		
		
		
		
	}
}

function makeColorField() {
	$('#colors').html( '' );
	$('#colors').css('position', 'absolute').css('width', '160px').css('height', '38px').css('top', '150px').css('left', '200px');
	for(var i = 0; i < colors; i++){
		$('<div></div>').data( 'color', (i + 1) ).css('pointer', 'cursor').css('position', 'absolute').css('left', ''+(i*40)+'px').css('z-index', ''+ (i + 1)).css('background-image', 'url(./img/color' + (i + 1) + '.png)').attr( 'id', 'color'+ i).attr('class', 'color_cell').css( 'border' , '0px solid black').css( 'width', '36px' ).css( 'height', '36px' ).appendTo( '#colors' ).draggable({
			containment: '#center',
			cursor: 'move',
			helper: 'clone',
			revert: true
		});
	}
}

function makeGameField() {
	$('#gameField').html( '' );
	$('#gameField').css('position', 'absolute').css('background-position', '-1px 0px').css('width', gameWindowSize+'px').css(border).css('background-color', '#fedde1').css('border', '2px solid #b1757c').css('height', '74px').css('top', '222px').css('background-image', 'url(img/grid-gameField.png)');
	for(var i = 0; i < g2gameField; i++) {
		$('<div></div>').data( 'gameCell', i ).css('pointer', 'cursor').css('position', 'absolute').css('left', (((37*i)%(37*g2cellPerRow)))+'px').css('top', ((Math.floor((i/g2cellPerRow))*37)+0)+'px').attr( 'id', 'drop'+ i).css( 'border' , '0px solid black').css( 'width', '36px' ).css( 'height', '36px' ).appendTo( '#gameField' ).droppable({
			hoverClass: 'hovered',
			drop: colorDropper
		});
	}
}

function initGameArray() {
	for(var i = 0; i < g2gameField; i++){
		g2gameArray.push(0);
	}
}

function clearColorArray() {
	g2colorArray = [];
}

function generateColors(){
	clearColorArray();
	for(var i = 0; i < fields; i++){
		g2colorArray.push(Math.round((Math.random() * colors + 0.5)));
	}
}
	
function drawColors(){
	if(g2colorArray.length == 0){
		clearTimeout(g2timeoutId);
		g2intervalId = setInterval("g2updateTimeout()", 1000);
	}
	else {
		var position = 0;
		do{
			position = Math.round(Math.random() * g2gameField - 1);
		}while( g2gameArray[position] != 0);
		$("#drop"+position).data( 'color' , g2colorArray[0]).css('background-image', 'url(./img/color' + g2colorArray[0]+ '.png)');
		g2gameArray[position] = g2colorArray[0];
		g2colorArray.shift();
		
		g2timeoutId = setTimeout("drawColors()", g2drawTimeout);
	}
}

function clearColorChallengeGame() {
	
	// cisteni progress baru
	$("progressBarMessage").html('');
	$("prograssBarValue").html('');
	$("prograssBarName").html('');
	$("#progressBar").progressbar({ value: 100});
	
	// cisteni hraciho pole
	$('#colors').html( '' );
	$('#gameField').html( '' ); 
	$('#pathWindow').html('');
	$('#pathWindow').css('display', 'none');
	
	// cisteni promennych
	g2timeToLearn = 0;
	g2timeToLearnBackup = 0;
	g2clearGameField();
	clearColorArray();
	g2colorArrayBackup = [];
	initGameArray();
	clearTimeout(g2timeoutId);
	clearInterval(g2intervalId);
	g2timeToLearn = g2timeToLearnBackup;
	g2enterPath = false;
	correctColors = 0;
	g2gameField = 0;
	fields = 0;
}

function colorChallengeGameStart() {
	// vycisteni hry
	clearColorChallengeGame();
	//@note$("#mouse_ico").css("background", "url(./img/mouseIcoLowAlpha.png)");
	
	if( diff == "easy" ){
		g2timeToLearn = 10;	// cas na uceni
		colors = 4;	// x barev pro urcovani
		g2gameField = 20;	// velikost hraciho pole
		fields = 4;	// vykreslenych barev pro pamatovani
	}
	else if( diff == "normal" ){
		g2timeToLearn = 10;
		colors = 4;
		g2gameField = 20;
		fields = 6;
	}
	else if( diff == "insane" ){
		g2timeToLearn = 10;
		colors = 4;
		g2gameField = 20;
		fields = 10;
	}
	else ;

	// zalohovani casu kvuli odpoctu
	g2timeToLearnBackup = g2timeToLearn;
	
	// zobrazeni rucicky
	$("#dragit").css('display', 'block');
	// vytvoreni hernich poli
	makeColorField();
	makeGameField();
	// Generate colors and game field
	generateColors();
	g2colorArrayBackup = g2colorArrayBackup.concat(g2colorArray);
	initGameArray();
	drawColors();
}	

function startGame(){
	
	hideAll();
	// ziskani vstupu od uzivatele: typ hry, obtiznost a ovladani
	game = $("input:[name=game_group]:checked").val();
	diff = $("input:[name=dif_group]:checked").val();
	control = $("input:[name=control_group]:checked").val();
	
	if(control == "mouse") mouse = true;
	else mouse = false;
	
	//alert(game);
	if(game == "pathFinder"){
		pathFinderGameStart();
	}
	else if(game == "colorChallenge"){
		colorChallengeGameStart();
	}
	else ; //pro dalsi hry
}
