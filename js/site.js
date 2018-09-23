function nullCheck(val){
	return val == null || val == '' ? 0 : parseInt(val);
}

function randomValue(low, high){
	console.log("Generating random value. Low: " + low + ", High: " + high);
	return Math.floor(Math.random() * high) + low;
}

function rollDice(){
	var numberOfDice = nullCheck( $('#diceNumber').val() );
	var sides = nullCheck( $('#diceSides').val() );

	var max = numberOfDice * sides;
	var min = numberOfDice;
	alert(randomValue(min, max));
}

function convertCurrency(){
	var fromValue = nullCheck( $('#fromValue').val() );
	var fromCurrency = nullCheck( $('#fromCurrency').val() );
	var toCurrency = nullCheck( $('#toCurrency').val() );

	var newVal = fromValue * fromCurrency / toCurrency;

	if(fromCurrency < toCurrency && fromValue < 10){
		alert("Not enough money to convert");
	}
	else{
		alert(newVal);
	}
}

function loadStore(){
	store.goodsToTable();
	store.armorToTable();
	store.meleeToTable();
	store.rangedToTable();
	store.ammoToTable();
	store.animalsToTable();
	store.foodToTable();
	store.servicesToTable();
}

function load_content(sections){
	for(var i=0; i<sections.length; i++){ 
		var selector = '#' + sections[i].id
		$(selector).append(sections[i].content);
	}
}

function load_navbar(links){
	var navbarSelector = "#myNavbar";
	$(navbarSelector).append("<ul class='nav navbar-nav navbar-right'>");
	for(var i=0; i<links.length; i++){
		$(navbarSelector).append("<li><a href='#" + links[i] + "'>" + links[i] + "</a></li>");
	}
	$(navbarSelector).append("</ul>");
}

var app = {
	sections: ["home", "character_tracker", "monster_generator", "npc_generator", "loot_generator", "store", "campaign", "dice_roll_quick_maths" ]
};

function get_page_sections(){
	sections = [
		// {	"id": "navbar", "content"}
		{	"id": "home", "content": app.home().display() },
		{	"id": "loot_generator", "content": app.display_mini_contact() },
		{	"id": "store", "content": work.display()	},
		{	"id": "character_tracker", "content": education.display()	},
		{	"id": "monster_generator", "content": skills.display_technical() },
		{	"id": "npc_generator", "content": skills.display_soft() },
		{	"id": "dice_roll_quick_maths", "content": projects.display_all() },
		{	"id": "campaign", "content": app.links.join('') }
	]

	return sections;
}

//-------------------page content----------------------------------



function handleMailto(){
	var email = 'brandon.deen47@gmail.com';
	var subject = $('#subject').val() || '';
	var body = $('#comments').val() || '';
	window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
}

//---------------------ON LOAD-----------------------------------

$(document).ready(function(){
	// load_navbar(app.sections);
	// load_content( get_page_sections() );
	loadStore();
});





