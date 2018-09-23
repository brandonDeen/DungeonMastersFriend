// name, price, info, weight
var store = {
    // regular items
    generalGoods: [
        { 'name': 'Ammo Pouch (empty)', 'cost': '5s', 'weight': 1, 'info': 'holds up to 10 stones' },
        { 'name': 'Backpack (empty)', 'cost': '2g', 'weight': 2, 'info': 'holds up to 10 items or 100 pounds' },
        { 'name': 'Bedroll', 'cost': '1s', 'weight': 2 },
        { 'name': 'Bell', 'cost': '1g', 'weight': 0 },
        { 'name': 'Blanket, winter', 'cost': '5s', 'weight': 3 },
        { 'name': 'Bottle (empty)', 'cost': '2g', 'weight': 0 },
        { 'name': 'Caltrops', 'cost': '1g', 'weight': 2 },
        { 'name': 'Candle', 'cost': '1c', 'weight': 0 },
        { 'name': 'Chalk (1 piece)', 'cost': '1c', 'weight': 0 },
        { 'name': 'Crowbar', 'cost': '2g', 'weight': 5 },
        { 'name': 'Flint & Steel', 'cost': '1g', 'weight': 0 },
        { 'name': 'Grappling Hook', 'cost': '1g', 'weight': 4 },
        { 'name': 'Hammer (12 nails)', 'cost': '5s', 'weight': 2 },
        { 'name': 'Lamp, common', 'cost': '1s', 'weight': 1 },
        { 'name': 'Lantern, bullseye', 'cost': '1s', 'weight': 3 },
        { 'name': 'Mirror, small steel', 'cost': '10g', 'weight': 0.5 },
        { 'name': 'Oil (1-pint flask)', 'cost': '1s', 'weight': 1 },
        { 'name': 'Pole, 10 foot', 'cost': '2s', 'weight': 8 },
        { 'name': 'Pot, Iron', 'cost': '1g', 'weight': 4 },
        { 'name': 'Pouch, belt (empty)', 'cost': '1g', 'weight': 0.5, 'info': 'holds up to 5 items or 25 pounds' },
        { 'name': 'Quiver', 'cost': '1g', 'weight': 2 },
        { 'name': 'Rations (1 days)', 'cost': '5s', 'weight': 1 },
        { 'name': 'Rope, hempen (50 feet)', 'cost': '1g', 'weight': 10 },
        { 'name': 'Rope, silk (50 feet)', 'cost': '10g', 'weight': 5 },
        { 'name': 'Sack (empty)', 'cost': '1s', 'weight': 0.5, 'info': 'holds up to 5 items or 50 pounds' },
        { 'name': 'Signal Whistle', 'cost': '8s', 'weight': 0 },
        { 'name': 'Soap', 'cost': '1c', 'weight': 0.5 },
        { 'name': 'Tent (3 person)', 'cost': '10g', 'weight': 15 },
        { 'name': 'Torch', 'cost': '1c', 'weight': 1 },
        { 'name': 'Waterskin', 'cost': '1g', 'weight': 4 }
    ],
    goodsToTable: function(){
        var table = $('#goodsTable');
        // clear anything...just in case
        table.empty();

        // add the header
        var header = '<thead><tr><th>Name</th><th>Cost</th><th>Weight (lbs)</th></tr></thead>';
        table.append(header);

        // add the data
        table.append('<tbody>');
        for(var i=0; i<store.generalGoods.length; i++){
            var item = store.generalGoods[i];
            var row = '<tr>'
            + '<td>' + item.name + '</td>'
            + '<td>' + item.cost + '</td>'
            + '<td>' + item.weight + '</td>'
            // + '<td>' + item.info + '</td>'
            + '</tr>';
            table.append(row);
        }
        table.append('</tbody>');
    },
    // armor
    armor: [
        { 'name': 'Basic Armor', 'armorClass':	10, 'weight': 0, 'cost': 0 },
        { 'name': 'Leather Armor', 'armorClass':	13, 'weight': 15, 'cost': '20g' },
        { 'name': 'Scale Armor', 'armorClass':	14, 'weight': 30, 'cost': '250g' },
        { 'name': 'Chain Armor', 'armorClass':	15, 'weight': 40, 'cost': '40g' },
        { 'name': 'Banded Armor', 'armorClass':	16, 'weight': 45, 'cost': '400g' },
        { 'name': 'Plate Armor', 'armorClass':	17, 'weight': 60, 'cost': '800g' },
        { 'name': 'Shield (uses off hand)', 'armorClass':	11, 'weight': 5, 'cost': '10g' }
    ],
    armorToTable: function(){
         var table = $('#armorTable');
        // clear anything...just in case
        table.empty();

        // add the header
        var header = '<thead><tr><th>Name</th><th>Armor Class</th><th>Cost</th><th>Weight (lbs)</th></tr></thead>';
        table.append(header);

        // add the data
        table.append('<tbody>');
        for(var i=0; i<store.armor.length; i++){
            var item = store.armor[i];
            var row = '<tr>'
            + '<td>' + item.name + '</td>'
            + '<td>' + item.armorClass + '</td>'
            + '<td>' + item.cost + '</td>'
            + '<td>' + item.weight + '</td>'
            + '</tr>';
            table.append(row);
        }
        table.append('</tbody>');
    },
    // melee weapons
    melee_weapons: [
        {'name': 'Torch', 'damage': '1d4', 'cost': '2g', 'type': 'burning', 'weight': 1},
        {'name': 'Dagger', 'damage': '1d4', 'cost': '5g', 'type': 'piercing', 'weight': 1},
        {'name': 'Hand Axe', 'damage': '1d4', 'cost': '5g', 'type': 'piercing', 'weight': 1},
        {'name': 'Short Sword', 'damage': '1d6', 'cost': '10g', 'type': 'piercing', 'weight': 2},
        {'name': 'Long Sword', 'damage': '1d8', 'cost': '15g', 'type': 'piercing', 'weight': 4},
        {'name': 'Bastard Sword (2h)', 'damage': '1d10', 'cost': '35g', 'type': 'piercing', 'weight': 8},
        {'name': 'Claymore (2h)', 'damage': '2d6', 'cost': '75g', 'type': 'piercing', 'weight': 16},
        {'name': 'Mace', 'damage': '1d6', 'cost': '10g', 'type': 'bludgeoning', 'weight': 4},
        {'name': 'Battle Axe', 'damage': '1d8', 'cost': '25g', 'type': 'piercing', 'weight': 6},
        {'name': 'Great Axe (2h)', 'damage': '2d8', 'cost': '80g', 'type': 'piercing', 'weight': 15},
        {'name': 'Warhammer (2h)', 'damage': '2d6', 'cost': '80g', 'type': 'bludgeoning', 'weight': 20},
        {'name': 'Staff', 'damage': '1d8', 'cost': '10g', 'type': 'bludgeoning', 'weight': 2}
    ],
    meleeToTable: function(){
        var table = $('#weaponsTable');
        // clear anything...just in case
        table.empty();

        // add the header
        var header = '<thead><tr><th>Name</th><th>Damage</th><th>Damage Type</th><th>Cost</th><th>Weight (lbs)</th></tr></thead>';
        table.append(header);

        // add the data
        table.append('<tbody>');
        for(var i=0; i<store.melee_weapons.length; i++){
            var item = store.melee_weapons[i];
            var row = '<tr>'
            + '<td>' + item.name + '</td>'
            + '<td>' + item.damage + '</td>'
            + '<td>' + item.type + '</td>'
            + '<td>' + item.cost + '</td>'
            + '<td>' + item.weight + '</td>'
            + '</tr>';
            table.append(row);
        }
        table.append('</tbody>');
    },
    // ranged weapons
    ranged_weapons: [
        {'name':'Crossbow', 'damage': '1d8', 'cost': 25, 'type': 'piercing', 'weight': 6, 'range': 80},
        {'name':'Hand Crossbow', 'damage': '1d8', 'cost': 25, 'type': 'piercing', 'weight': 3, 'range': 30},
        {'name':'Heavy Crossbow', 'damage': '1d8', 'cost': 25, 'type': 'piercing', 'weight': 10, 'range': 100},
        {'name':'Dart', 'damage': '1d8', 'cost': 25, 'type': 'piercing', 'weight': 0.5, 'range': 30},
        {'name':'Sling', 'damage': '1d8', 'cost': 25, 'type': 'piercing', 'weight': 0.5, 'range': 30},
        {'name':'Spear', 'damage': '1d8', 'cost': 25, 'type': 'piercing', 'weight': 4, 'range': 30},
        {'name':'Short Bow', 'damage': '1d8', 'cost': 25, 'type': 'piercing', 'weight': 3, 'range': 80},
        {'name':'Long Bow', 'damage': '1d8', 'cost': 25, 'type': 'piercing', 'weight': 5, 'range': 150},
    ],
    rangedToTable: function(){
        var table = $('#rangedWeaponsTable');
        // clear anything...just in case
        table.empty();

        // add the header
        var header = '<thead><tr><th>Name</th><th>Damage</th><th>Damage Type</th><th>Range (feet)</th><th>Cost</th><th>Weight (lbs)</th></tr></thead>';
        table.append(header);

        // add the data
        table.append('<tbody>');
        for(var i=0; i<store.ranged_weapons.length; i++){
            var item = store.ranged_weapons[i];
            var row = '<tr>'
            + '<td>' + item.name + '</td>'
            + '<td>' + item.damage + '</td>'
            + '<td>' + item.type + '</td>'
            + '<td>' + item.range + '</td>'
            + '<td>' + item.cost + '</td>'
            + '<td>' + item.weight + '</td>'
            + '</tr>';
            table.append(row);
        }
        table.append('</tbody>');
    },
    // ammo
    ammunition: [
        { 'name': 'Arrow', 'cost': '5c', weight: 0.1 },
        { 'name': 'Bolt', 'cost': '5c', weight: 0.2 },
        { 'name': 'Stones', 'cost': '3c', weight: 0.25 }

    ],
    ammoToTable: function(){
        var table = $('#ammoTable');
        // clear anything...just in case
        table.empty();

        // add the header
        var header = '<thead><tr><th>Name</th><th>Cost</th><th>Weight (lbs)</th></tr></thead>';
        table.append(header);

        // add the data
        table.append('<tbody>');
        for(var i=0; i<store.ammunition.length; i++){
            var item = store.ammunition[i];
            var row = '<tr>'
            + '<td>' + item.name + '</td>'
            + '<td>' + item.cost + '</td>'
            + '<td>' + item.weight + '</td>'
            + '</tr>';
            table.append(row);
        }
        table.append('</tbody>');
    },
    // services
    services: [
        {'name': 'Identify', 'cost': '25g'},
        {'name': 'Remove Curse', 'cost': '50g'},
        {'name': 'Resurrection', 'cost': '1000g'},
        {'name': 'Heal', 'cost': '100g'},
        // tavern services
        {'name': 'Inn, cheap (1 night)', 'cost': '2s'},
        {'name': 'Inn, decent (1 night)', 'cost': '5s'},
        {'name': 'Inn, fine (1 night)', 'cost': '2g'},
    ],
    servicesToTable: function(){
        var table = $('#servicesTable');
        // clear anything...just in case
        table.empty();

        // add the header
        var header = '<thead><tr><th>Name</th><th>Cost</th></tr></thead>';
        table.append(header);

        // add the data
        table.append('<tbody>');
        for(var i=0; i<store.services.length; i++){
            var item = store.services[i];
            var row = '<tr>'
            + '<td>' + item.name + '</td>'
            + '<td>' + item.cost + '</td>'
            + '</tr>';
            table.append(row);
        }
        table.append('</tbody>');
    },
    // food
    food: [
        {'name': 'Ale, gallon', 'cost': '2s', 'weight': 8},
        {'name': 'Ale, pint', 'cost': '4c', 'weight': 1},
        {'name': 'Wine, common', 'cost': '2s', 'weight': 6},
        {'name': 'Wine, fine', 'cost': '10g', 'weight': 1.5},
        {'name': 'Bread, per loaf', 'cost': '2c', 'weight': 0.5},
        {'name': 'Cheese, hunk', 'cost': '1s', 'weight': 0.5},
        {'name': 'Meat, chunk (roasted)', 'cost': '3s', 'weight': 0.5},
    ],
    foodToTable: function(){
        var table = $('#foodTable');
        // clear anything...just in case
        table.empty();

        // add the header
        var header = '<thead><tr><th>Name</th><th>Cost</th><th>Weight (lbs)</th></tr></thead>';
        table.append(header);

        // add the data
        table.append('<tbody>');
        for(var i=0; i<store.food.length; i++){
            var item = store.food[i];
            var row = '<tr>'
            + '<td>' + item.name + '</td>'
            + '<td>' + item.cost + '</td>'
            + '<td>' + item.weight + '</td>'
            + '</tr>';
            table.append(row);
        }
        table.append('</tbody>');
    },
    // animals
    animals: [
        {'name': 'Horse, Light', 'hp': 3, 'speed': 60, 'carry': 80, 'cost': '75g', 'info': ''},
        {'name': 'Horse, Heavy', 'hp': 5, 'speed': 40, 'carry': 160, 'cost': '200g', 'info': ''},
        {'name': 'Horse, War', 'hp': 4, 'speed': 50, 'carry': 100, 'cost': '400g', 'info': 'Armor Class:14, Attack:1d8' },
        {'name': 'Dog, Guard', 'hp': 3, 'speed': 60, 'carry': 40, 'cost': '25g', 'info': 'Armor Class:12, Attack:1d4, Owner gains Advantage to Notice' } 
    ],
    animalsToTable: function(){
        var table = $('#animalsTable');
        // clear anything...just in case
        table.empty();

        // add the header
        var header = '<thead><tr><th>Name</th><th>HP</th><th>Speed</th><th>Carry Weight (lbs)</th><th>Cost</th></tr></thead>';
        table.append(header);

        // add the data
        table.append('<tbody>');
        for(var i=0; i<store.animals.length; i++){
            var item = store.animals[i];
            var row = '<tr>'
            + '<td>' + item.name + '</td>'
            + '<td>' + item.hp + '</td>'
            + '<td>' + item.speed + '</td>'
            + '<td>' + item.carry + '</td>'
            + '<td>' + item.cost + '</td>'
            // + '<td>' + item.info + '</td>'
            + '</tr>';
            table.append(row);
            if(item.info != null && typeof item.info != undefined && item.info != ''){
                table.append('<tr><td colspan="5"><em>' + item.info + '</em></td></tr>');
            }
        }
        table.append('</tbody>');
    }
};