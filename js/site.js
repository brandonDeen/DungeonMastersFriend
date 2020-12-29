const LOGGING_ENABLED = false;

function nullCheck(val){
	return val == null || val === '' ? 1 : parseInt(val);
}

function rollDice(numberOfDice, sides){
	if (numberOfDice === -1) { numberOfDice = nullCheck( $('#diceNumber').val() ); }
	if (sides === -1) { sides = nullCheck( $('#diceSides').val() ); }
	let roll = 0;

	for (let i = 0; i<numberOfDice; i++) {
		roll = roll + Math.floor(Math.random() * Math.floor(sides)) + 1;
	}

	if (LOGGING_ENABLED) { console.log(`${numberOfDice}d${sides} => ${roll}`); }
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

function loadDieStats(table, dieCount, dieSize, options) {
	table.append('<thead>' +
		'<tr>' +
		'<th>Stat Score</th>' +
		'<th>Roll Under Stat</th>' +
		'<th>Roll Over 11</th>' +
		'<th>Roll Over 21 - Stat</th>' +
		'</tr>' +
		'</thead>');

	let rollAttempts = 100000;
	let minStatScore = 3;
	let maxStatScore = 18;
	let results = [];
	for(let score=minStatScore; score<=maxStatScore; score++) {
		results.push(getRollStats(score, options, dieCount, dieSize, rollAttempts));
	}

	table.append('<tbody>');
	results.forEach(element => table.append(element.tableRowString));
	table.append('</tbody>');

	return results;
}

function calculateStatBonus(score) {
	return score - 10;
	// return Math.floor((score - 10) / 2);
}

function getRollStats(score, options, dieCount, dieSize, attempts) {
	let rollUnderCount = 0;
	let rollOver10Count = 0;
	let rollOver11Count = 0;
	let rollOver12Count = 0;
	let rollOver15Count = 0;
	let rollOver18Count = 0;
	let rollOver20Count = 0;
	let rollOver21MinusStatCount = 0;
	let targetModifier = (options === 'Easy' ? -5 : (options === 'Hard' ? 5 : 0));
	let statBonus = calculateStatBonus(score);

	for (let i=0; i<attempts; i++) {
		let roll = rollDice(dieCount, dieSize);
		(roll + targetModifier <= score) ? rollUnderCount++ : '';
		(roll + statBonus >= 10 + targetModifier) ? rollOver10Count++ : '';
		(roll + statBonus >= 11 + targetModifier) ? rollOver11Count++ : '';
		(roll + statBonus >= 12 + targetModifier) ? rollOver12Count++ : '';
		(roll + statBonus >= 15 + targetModifier) ? rollOver15Count++ : '';
		(roll + statBonus >= 18 + targetModifier) ? rollOver18Count++ : '';
		(roll + statBonus >= 20 + targetModifier) ? rollOver20Count++ : '';
		(roll >= 21 - score + targetModifier) ? rollOver21MinusStatCount++ : '';
	}

	let results =	{
			statScore: score,
			rollUnder: ((rollUnderCount / attempts) * 100).toFixed(2),
			rollOver10: ((rollOver10Count / attempts) * 100).toFixed(2),
			rollOver11: ((rollOver11Count / attempts) * 100).toFixed(2),
			rollOver12: ((rollOver12Count / attempts) * 100).toFixed(2),
			rollOver15: ((rollOver15Count / attempts) * 100).toFixed(2),
			rollOver18: ((rollOver18Count / attempts) * 100).toFixed(2),
			rollOver20: ((rollOver20Count / attempts) * 100).toFixed(2),
			rollOver21MinusStat: ((rollOver21MinusStatCount / attempts) * 100).toFixed(2),
			tableRowString: function(){
			return `<tr>` +
				`<td>${results.statScore}</td>` +
				`<td>${results.rollUnder}%</td>` +
				//`<td>${results.rollOver10}%</td>` +
				`<td>${results.rollOver11}%</td>` +
				//`<td>${results.rollOver12}%</td>` +
				//`<td>${results.rollOver15}%</td>` +
				//`<td>${results.rollOver18}%</td>` +
				//`<td>${results.rollOver20}%</td>` +
				`<td>${results.rollOver21MinusStat}%</td>` +
				`</tr>`
		}
	};
	return results;
}

function loadCompareStats(oneD20, threeD6) {
	let table = $('#vs-stats');
	table.append('<thead>' +
		'<tr>' +
		'<th>Stat Score</th>' +
		'<th>d20 Roll Under</th>' +
		'<th>3d6 Roll Under</th>' +
		'<th>Diff</th>' +
		'</tr>' +
		'</thead>');


	let results = [];
	
	// assumes oneD20.length == threeD6.length
	for(let i=0; i<oneD20.length; i++) {
		let val = {
			statScore: oneD20[i].statScore,
			rollUnderA: oneD20[i]['rollUnder'],
			rollUnderB: threeD6[i]['rollUnder'],
				
			tableRowString: function() {
				return `<tr>` +
				`<td>${val.statScore}</td>` +
				`<td>${Math.round(val.rollUnderA)}%</td>` +
				`<td>${Math.round(val.rollUnderB)}%</td>` +
				`<td>${Math.round(val.rollUnderA - val.rollUnderB)}</td>` +
				`</tr>`;
			}
		};
		results.push(val);
	}

	table.append('<tbody>');
	results.forEach(element => table.append(element.tableRowString));
	table.append('</tbody>');
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
	loadStore();
	let d20Stats = loadDieStats($('#d20-stats'), 1, 20, 'Normal');
	let threeD6Stats = loadDieStats($('#3d6-stats'), 3, 6, 'Normal');
	
	console.log(d20Stats);
	console.log(threeD6Stats);

	loadCompareStats(d20Stats, threeD6Stats);
});





