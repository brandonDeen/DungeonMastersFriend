function nullCheck(val){
	return val == null || val == '' ? 1 : parseInt(val);
}

function rollDice(){
	let numberOfDice = nullCheck( $('#diceNumber').val() );
	let sides = nullCheck( $('#diceSides').val() );
	let roll = 0;

	for (let i = 0; i<numberOfDice; i++) {
		roll = roll + Math.floor(Math.random() * Math.floor(sides)) + 1;
	}

	console.log(`${numberOfDice}d${sides} => ${roll}`);
	return roll;
}

function convertCurrency(){
	let currencies = [
		{name: 'copper', symbol: 'c'},
		{name: 'silver', symbol: 's'},
		{name: 'gold', symbol: 'g'},
		{name: 'platinum', symbol: 'p'},
	];
	let fromValue = nullCheck( $('#fromValue').val() );
	let fromCurrency = nullCheck( $('#fromCurrency').val() );
	let toCurrency = nullCheck( $('#toCurrency').val() );

	let newVal = fromValue * fromCurrency / toCurrency;

	if(fromCurrency < toCurrency && fromValue < 10){
		alert("Not enough money to convert");
	}
	else{
		$('#currencyConversionResult').empty().append(newVal);
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

//-------------------page content----------------------------------

function load_content(sections){
	for(let i=0; i<sections.length; i++){
		let selector = '#' + sections[i].id
		$(selector).append(sections[i].content);
	}
}

function load_navbar(links){
	let navbarSelector = "#myNavbar";
	$(navbarSelector).append("<ul class='nav navbar-nav navbar-right'>");
	for(let i=0; i<links.length; i++){
		$(navbarSelector).append("<li><a href='#" + links[i] + "'>" + links[i] + "</a></li>");
	}
	$(navbarSelector).append("</ul>");
}

let app = {
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

function handleMailto(){
	let email = '';
	let subject = $('#subject').val() || '';
	let body = $('#comments').val() || '';
	window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
}

function emptyAndAppend(elementId, content) {
	$('#'+elementId).empty().append(content);
}

function moveToDiv(event, divId) {
	console.log(`moving to ${divId}`);
	$('html,body').animate({
			scrollTop: $('#'+ divId).offset().top},
		'slow');
}

//---------------------ON LOAD-----------------------------------

$(document).ready(function(){
	// load_navbar(app.sections);
	// load_content( get_page_sections() );
	loadStore();
});





