
//Pull JSON of items and returns it
var data = '{ "items" : [' +
  '{"id":"748" , "name":"Boots of Striding" , "type":"Legs" , "use":"Refresh" , "img":"748"},' +
  '{"id":"749" , "name":"Boots of Striding" , "type":"Legs" , "use":"Refresh" , "img":"748"},' +
  '{"id":"750" , "name":"Winged Shoes" , "type":"Legs" , "use":"Refresh" , "img":"750"},' +
  '{"id":"751" , "name":"Winged Shoes" , "type":"Legs" , "use":"Refresh" , "img":"750"},' +
  '{"id":"752" , "name":"Hide Armor" , "type":"Body" , "use":"Refresh" , "img":"752"},' +
  '{"id":"753" , "name":"Hide Armor" , "type":"Body" , "use":"Refresh" , "img":"752"},' +
  '{"id":"754" , "name":"Leather Armor" , "type":"Body" , "use":"Refresh" , "img":"754"},' +
  '{"id":"755" , "name":"Leather Armor" , "type":"Body" , "use":"Refresh" , "img":"754"},' +
  '{"id":"756" , "name":"Cloak of Invisibility" , "type":"Body" , "use":"Trash" , "img":"756"},' +
  '{"id":"757" , "name":"Cloak of Invisibility" , "type":"Body" , "use":"Trash" , "img":"756"},' +
  '{"id":"758" , "name":"Eagle-Eye Goggles" , "type":"Head" , "use":"Refresh" , "img":"758"},' +
  '{"id":"759" , "name":"Eagle-Eye Goggles" , "type":"Head" , "use":"Refresh" , "img":"758"},' +
  '{"id":"760" , "name":"Iron Helmet" , "type":"Head" , "use":"Constant" , "img":"760"},' +
  '{"id":"761" , "name":"Iron Helmet" , "type":"Head" , "use":"Constant" , "img":"760"},' +
  '{"id":"762" , "name":"Heater Shield" , "type":"OneHand" , "use":"Refresh" , "img":"762"},' +
  '{"id":"763" , "name":"Heater Shield" , "type":"OneHand" , "use":"Refresh" , "img":"762"},' +
  '{"id":"764" , "name":"Piercing Bow" , "type":"TwoHand" , "use":"Trash" , "img":"764"},' +
  '{"id":"765" , "name":"Piercing Bow" , "type":"TwoHand" , "use":"Trash" , "img":"764"},' +
  '{"id":"766" , "name":"War Hammer" , "type":"TwoHand" , "use":"Trash" , "img":"766"},' +
  '{"id":"767" , "name":"War Hammer" , "type":"TwoHand" , "use":"Trash" , "img":"766"},' +
  '{"id":"768" , "name":"Poison Dagger" , "type":"OneHand" , "use":"Refresh" , "img":"768"},' +
  '{"id":"769" , "name":"Poison Dagger" , "type":"OneHand" , "use":"Refresh" , "img":"768"},' +
  '{"id":"770" , "name":"Minor Healing Potion" , "type":"Small" , "use":"Trash" , "img":"770"},' +
  '{"id":"771" , "name":"Minor Healing Potion" , "type":"Small" , "use":"Trash" , "img":"770"},' +
  '{"id":"772" , "name":"Minor Healing Potion" , "type":"Small" , "use":"Trash" , "img":"770"},' +
  '{"id":"773" , "name":"Minor Healing Potion" , "type":"Small" , "use":"Trash" , "img":"770"},' +
  '{"id":"774" , "name":"Minor Stamina Potion" , "type":"Small" , "use":"Trash" , "img":"774"},' +
  '{"id":"775" , "name":"Minor Stamina Potion" , "type":"Small" , "use":"Trash" , "img":"774"},' +
  '{"id":"776" , "name":"Minor Stamina Potion" , "type":"Small" , "use":"Trash" , "img":"774"},' +
  '{"id":"777" , "name":"Minor Stamina Potion" , "type":"Small" , "use":"Trash" , "img":"774"},' +
  '{"id":"778" , "name":"Minor Power Potion" , "type":"Small" , "use":"Trash" , "img":"778"},' +
  '{"id":"779" , "name":"Minor Power Potion" , "type":"Small" , "use":"Trash" , "img":"778"},' +
  '{"id":"780" , "name":"Minor Power Potion" , "type":"Small" , "use":"Trash" , "img":"778"},' +
  '{"id":"781" , "name":"Minor Power Potion" , "type":"Small" , "use":"Trash" , "img":"778"},' +
  '{"id":"782" , "name":"Boots of Speed" , "type":"Legs" , "use":"Refresh" , "img":"782"},' +
  '{"id":"783" , "name":"Boots of Speed" , "type":"Legs" , "use":"Refresh" , "img":"782"},' +
  '{"id":"784" , "name":"Cloak of Pockets" , "type":"Body" , "use":"Constant" , "img":"784"},' +
  '{"id":"785" , "name":"Cloak of Pockets" , "type":"Body" , "use":"Constant" , "img":"784"},' +
  '{"id":"786" , "name":"Empowering Talisman" , "type":"Head" , "use":"Trash" , "img":"786"},' +
  '{"id":"787" , "name":"Empowering Talisman" , "type":"Head" , "use":"Trash" , "img":"786"},' +
  '{"id":"788" , "name":"Battle-Axe" , "type":"OneHand" , "use":"Trash" , "img":"788"},' +
  '{"id":"789" , "name":"Battle-Axe" , "type":"OneHand" , "use":"Trash" , "img":"788"},' +
  '{"id":"790" , "name":"Weighted Net" , "type":"TwoHand" , "use":"Refresh" , "img":"790"},' +
  '{"id":"791" , "name":"Weighted Net" , "type":"TwoHand" , "use":"Refresh" , "img":"790"},' +
  '{"id":"792" , "name":"Minor Mana Potion" , "type":"Small" , "use":"Trash" , "img":"792"},' +
  '{"id":"793" , "name":"Minor Mana Potion" , "type":"Small" , "use":"Trash" , "img":"792"},' +
  '{"id":"794" , "name":"Minor Mana Potion" , "type":"Small" , "use":"Trash" , "img":"792"},' +
  '{"id":"795" , "name":"Minor Mana Potion" , "type":"Small" , "use":"Trash" , "img":"792"},' +
  '{"id":"796" , "name":"Stun Powder" , "type":"Small" , "use":"Trash" , "img":"796"},' +
  '{"id":"797" , "name":"Stun Powder" , "type":"Small" , "use":"Trash" , "img":"796"},' +
  '{"id":"798" , "name":"Heavy Greaves" , "type":"Legs" , "use":"Constant" , "img":"798"},' +
  '{"id":"799" , "name":"Heavy Greaves" , "type":"Legs" , "use":"Constant" , "img":"798"},' +
  '{"id":"800" , "name":"Chainmail" , "type":"Body" , "use":"Refresh" , "img":"800"},' +
  '{"id":"801" , "name":"Chainmail" , "type":"Body" , "use":"Refresh" , "img":"800"},' +
  '{"id":"802" , "name":"Amulet of Life" , "type":"Helmet" , "use":"Refresh" , "img":"802"},' +
  '{"id":"803" , "name":"Amulet of Life" , "type":"Helmet" , "use":"Refresh" , "img":"802"},' +
  '{"id":"804" , "name":"Jagged Sword" , "type":"OneHand" , "use":"Refresh" , "img":"804"},' +
  '{"id":"805" , "name":"Jagged Sword" , "type":"OneHand" , "use":"Refresh" , "img":"804"},' +
  '{"id":"806" , "name":"Long Spear" , "type":"TwoHand" , "use":"Refresh" , "img":"806"},' +
  '{"id":"807" , "name":"Long Spear" , "type":"TwoHand" , "use":"Refresh" , "img":"806"},' +
  '{"id":"808" , "name":"Major Healing Potion" , "type":"Small" , "use":"Trash" , "img":"808"},' +
  '{"id":"809" , "name":"Major Healing Potion" , "type":"Small" , "use":"Trash" , "img":"808"},' +
  '{"id":"810" , "name":"Major Healing Potion" , "type":"Small" , "use":"Trash" , "img":"808"},' +
  '{"id":"811" , "name":"Major Healing Potion" , "type":"Small" , "use":"Trash" , "img":"808"},' +
  '{"id":"812" , "name":"Moon Earring" , "type":"Small" , "use":"Trash" , "img":"812"},' +
  '{"id":"813" , "name":"Moon Earring" , "type":"Small" , "use":"Trash" , "img":"812"},' +
  '{"id":"814" , "name":"Comfortable Shoes" , "type":"Legs" , "use":"Constant" , "img":"814"},' +
  '{"id":"815" , "name":"Comfortable Shoes" , "type":"Legs" , "use":"Constant" , "img":"814"},' +
  '{"id":"816" , "name":"Studded Leather" , "type":"Body" , "use":"Refresh" , "img":"816"},' +
  '{"id":"817" , "name":"Studded Leather" , "type":"Body" , "use":"Refresh" , "img":"816"},' +
  '{"id":"818" , "name":"Hawk Helm" , "type":"Helmet" , "use":"Refresh" , "img":"818"},' +
  '{"id":"819" , "name":"Hawk Helm" , "type":"Helmet" , "use":"Refresh" , "img":"818"},' +
  '{"id":"820" , "name":"Tower Shield" , "type":"OneHand" , "use":"Refresh" , "img":"820"},' +
  '{"id":"821" , "name":"Tower Shield" , "type":"OneHand" , "use":"Refresh" , "img":"820"},' +
  '{"id":"822" , "name":"Volatile Bomb" , "type":"OneHand" , "use":"Trash" , "img":"822"},' +
  '{"id":"823" , "name":"Volatile Bomb" , "type":"OneHand" , "use":"Trash" , "img":"822"},' +
  '{"id":"824" , "name":"Major Stamina Potion" , "type":"Small" , "use":"Trash" , "img":"824"},' +
  '{"id":"825" , "name":"Major Stamina Potion" , "type":"Small" , "use":"Trash" , "img":"824"},' +
  '{"id":"826" , "name":"Major Stamina Potion" , "type":"Small" , "use":"Trash" , "img":"824"},' +
  '{"id":"827" , "name":"Major Stamina Potion" , "type":"Small" , "use":"Trash" , "img":"824"},' +
  '{"id":"828" , "name":"Falcon Figurine" , "type":"Small" , "use":"Trash" , "img":"828"},' +
  '{"id":"829" , "name":"Falcon Figurine" , "type":"Small" , "use":"Trash" , "img":"828"},' +
  '{"id":"830" , "name":"Boots Of Dashing" , "type":"Legs" , "use":"Refresh" , "img":"830"},' +
  '{"id":"831" , "name":"Boots Of Dashing" , "type":"Legs" , "use":"Refresh" , "img":"830"},' +
  '{"id":"832" , "name":"Robes Of Evocation" , "type":"Body" , "use":"Refresh" , "img":"832"},' +
  '{"id":"833" , "name":"Robes Of Evocation" , "type":"Body" , "use":"Refresh" , "img":"832"},' +
  '{"id":"834" , "name":"Heavy Basinet" , "type":"Helmet" , "use":"Constant" , "img":"834"},' +
  '{"id":"835" , "name":"Heavy Basinet" , "type":"Helmet" , "use":"Constant" , "img":"834"},' +
  '{"id":"836" , "name":"Hooked Chain" , "type":"TwoHand" , "use":"Refresh" , "img":"836"},' +
  '{"id":"837" , "name":"Hooked Chain" , "type":"TwoHand" , "use":"Refresh" , "img":"836"},' +
  '{"id":"838" , "name":"Versatile Dagger" , "type":"OneHand" , "use":"Constant" , "img":"838"},' +
  '{"id":"839" , "name":"Versatile Dagger" , "type":"OneHand" , "use":"Constant" , "img":"838"},' +
  '{"id":"840" , "name":"Major Power Potion" , "type":"Small" , "use":"Trash" , "img":"840"},' +
  '{"id":"841" , "name":"Major Power Potion" , "type":"Small" , "use":"Trash" , "img":"840"},' +
  '{"id":"842" , "name":"Major Power Potion" , "type":"Small" , "use":"Trash" , "img":"840"},' +
  '{"id":"843" , "name":"Major Power Potion" , "type":"Small" , "use":"Trash" , "img":"840"},' +
  '{"id":"844" , "name":"Ring of Haste" , "type":"Small" , "use":"Trash" , "img":"844"},' +
  '{"id":"845" , "name":"Ring of Haste" , "type":"Small" , "use":"Trash" , "img":"844"},' +
  '{"id":"846" , "name":"Boots Of Quickness" , "type":"Legs" , "use":"Refresh" , "img":"846"},' +
  '{"id":"847" , "name":"Boots Of Quickness" , "type":"Legs" , "use":"Refresh" , "img":"846"},' +
  '{"id":"848" , "name":"Splintmail" , "type":"Body" , "use":"Refresh" , "img":"848"},' +
  '{"id":"849" , "name":"Splintmail" , "type":"Body" , "use":"Refresh" , "img":"848"},' +
  '{"id":"850" , "name":"Pendant of Dark Pacts" , "type":"Small" , "use":"Trash" , "img":"850"},' +
  '{"id":"851" , "name":"Pendant of Dark Pacts" , "type":"Small" , "use":"Trash" , "img":"850"},' +
  '{"id":"852" , "name":"Spiked Shield" , "type":"OneHand" , "use":"Refresh" , "img":"852"},' +
  '{"id":"853" , "name":"Spiked Shield" , "type":"OneHand" , "use":"Refresh" , "img":"852"},' +
  '{"id":"854" , "name":"Reaping Scythe" , "type":"TwoHand" , "use":"Trash" , "img":"854"},' +
  '{"id":"855" , "name":"Reaping Scythe" , "type":"TwoHand" , "use":"Trash" , "img":"854"},' +
  '{"id":"856" , "name":"Major Mana Potion" , "type":"Small" , "use":"Trash" , "img":"856"},' +
  '{"id":"857" , "name":"Major Mana Potion" , "type":"Small" , "use":"Trash" , "img":"856"},' +
  '{"id":"858" , "name":"Major Mana Potion" , "type":"Small" , "use":"Trash" , "img":"856"},' +
  '{"id":"859" , "name":"Major Mana Potion" , "type":"Small" , "use":"Trash" , "img":"856"},' +
  '{"id":"860" , "name":"Sun Earring" , "type":"Small" , "use":"Trash" , "img":"860"},' +
  '{"id":"861" , "name":"Sun Earring" , "type":"Small" , "use":"Trash" , "img":"860"},' +

  '{"id":"868" , "name":"Black Knife" , "type":"OneHand" , "use":"Refresh" , "img":"868"},' +
  '{"id":"869" , "name":"Black Knife" , "type":"OneHand" , "use":"Refresh" , "img":"868"},' +

  '{"id":"909" , "name":"Circlet of Elements" , "type":"Helmet" , "use":"Refresh" , "img":"909"},' +
  '{"id":"910" , "name":"Circlet of Elements" , "type":"Helmet" , "use":"Refresh" , "img":"909"},' +

  '{"id":"913" , "name":"Inferno Blade" , "type":"OneHand" , "use":"Constant" , "img":"913"},' +
  '{"id":"914" , "name":"Inferno Blade" , "type":"OneHand" , "use":"Constant" , "img":"913"},' +
  '{"id":"915" , "name":"Brilliant Blade" , "type":"OneHand" , "use":"Constant" , "img":"915"},' +
  '{"id":"916" , "name":"Brilliant Blade" , "type":"OneHand" , "use":"Constant" , "img":"915"},' +

  '{"id":"923" , "name":"Minor Cure Potion" , "type":"Small" , "use":"Trash" , "img":"923"},' +
  '{"id":"924" , "name":"Minor Cure Potion" , "type":"Small" , "use":"Trash" , "img":"923"},' +
  '{"id":"925" , "name":"Steel Ring" , "type":"Small" , "use":"Trash" , "img":"925"},' +
  '{"id":"926" , "name":"Steel Ring" , "type":"Small" , "use":"Trash" , "img":"925"},' +

  '{"id":"933" , "name":"Endurance Footwraps" , "type":"Legs" , "use":"Constant" , "img":"933"},' +
  '{"id":"934" , "name":"Drakescale Boots" , "type":"Legs" , "use":"Constant" , "img":"934"},' +
  '{"id":"936" , "name":"Robes of Summoning" , "type":"Body" , "use":"Refresh" , "img":"936"},' +
  '{"id":"939" , "name":"Drakescale Armor" , "type":"Body" , "use":"Constant" , "img":"939"},' +
  '{"id":"940" , "name":"Steam Armor" , "type":"Body" , "use":"Trash" , "img":"940"},' +
  '{"id":"941" , "name":"Flea-Bitten Shawl" , "type":"Body" , "use":"Constant" , "img":"941"},' +

  '{"id":"943" , "name":"Horned Helm" , "type":"Helmet" , "use":"Constant" , "img":"943"},' +
  '{"id":"944" , "name":"Horned Helm" , "type":"Helmet" , "use":"Constant" , "img":"943"},' +
  '{"id":"945" , "name":"Drakescale Helm" , "type":"Helmet" , "use":"Constant" , "img":"945"},' +
  '{"id":"947" , "name":"Helm of the Mountain" , "type":"Helmet" , "use":"Constant" , "img":"947"},' +
  '{"id":"949" , "name":"Ancient Drill" , "type":"TwoHand" , "use":"Trash" , "img":"949"},' +
  '{"id":"950" , "name":"Ancient Drill" , "type":"TwoHand" , "use":"Trash" , "img":"949"},' +

  '{"id":"951" , "name":"Skullbane Axe" , "type":"TwoHand" , "use":"Refresh" , "img":"951"},' +

  '{"id":"954" , "name":"Fueled Falchion" , "type":"OneHand" , "use":"Constant" , "img":"954"},' +
  '{"id":"955" , "name":"Fueled Falchion" , "type":"OneHand" , "use":"Constant" , "img":"954"},' +
  '{"id":"958" , "name":"Staff of Elements" , "type":"TwoHand" , "use":"Refresh" , "img":"958"},' +
  '{"id":"959" , "name":"Staff of Elements" , "type":"TwoHand" , "use":"Refresh" , "img":"958"},' +
  '{"id":"964" , "name":"Ring of Skulls" , "type":"Small" , "use":"Trash" , "img":"964"},' +
  '{"id":"965" , "name":"Ring of Skulls" , "type":"Small" , "use":"Trash" , "img":"964"},' +

  '{"id":"972" , "name":"Helix Ring" , "type":"Small" , "use":"Trash" , "img":"972"}' +
']}';


async function loadItems2() {
  const URL = 'https://sporkthesloth.github.io/items/items.json';
  const fetchResult = fetch(URL)
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

//returns the highest number of items from base store based on prosperity level
function getInvLevel(prosp) {
var maxItem = 0;
switch(prosp) {
 case 1:
  maxItem = 778;
  break;
 case 2:
  maxItem = 796;
  break;
 case 3:
  maxItem = 812;
  break;
 case 4:
  maxItem = 828;
  break;
 case 5:
  maxItem = 828;
  break;
 case 6:
  maxItem = 828;
  break;
 case 7:
  maxItem = 828;
  break;
 case 8:
  maxItem = 1050;
  break;
 case 9:
  maxItem = 904;
  break;
}
return maxItem;
}

//uses JSON to get base list of items based on Gloomhaven Prosperity
async function buildStore(aItems, prosp) {
  var objects = [];
  var humorme = 0;
  var invLevel = getInvLevel(prosp);
  aItems.then(function(data) {
    humorme = data.items.length;
    for (var i = 0; i < data.items.length; i++) {
      if ( data.items[i].id <= invLevel)
      {
        objects.push(data.items[i]);
      }
    }
  });
  return objects;
}
//uses JSON to get base list of items based on Gloomhaven Prosperity
function buildStore2(aitems, prosp) {
  var objects = [];
  var data = JSON.parse(aitems);
  var humorme = 0;
  var invLevel = getInvLevel(prosp);
    humorme = data.items.length;
    for (var i = 0; i < data.items.length; i++) {
      if ( data.items[i].id <= invLevel)
      {
        objects.push(data.items[i]);
      }
    };
  return objects;
}

function addToStore(aItems, store, cardNo)
{
  for( i in aItems)
  {
    if (i.id == cardNo)
    {
      store.push(aItems[i]);
      break;
    }
  }
  return store;
}

//takes store object array and returns html string for displaying images.
function displayStore(store) {
  html = "<table><tr>";
  //loop through avaialable items
  for(var i = 0; i<store.length; i++)
  {
    html += "<td><img id="+store[i].id+" class='item inStore' src=./items/images/"+store[i].img+".png alt="+store[i].img+" /></td>";
    //roll to next row
    var next = i+1;
    if(next%5==0 && next!=store.length)
    {
      html += "</tr><tr>";
    }
  }
  html+= "</tr></table>";
  return html;
}
function displayItems() {
  var personalItems = [];
  var cookieString = getCookie("personalItems");
  personalItems = JSON.parse(cookieString);
  html = "<table><tr>";
  //loop through avaialable items
  for(var i = 0; i<personalItems.length; i++)
  {
    html += "<td><img id=item"+i+" class='item personal-item' src=/items/images/"+personalItems[i]+".png alt=card"+i+" /></td>";
    //roll to next row
    var next = i+1;
    if(next%5==0 && next!=personalItems.length)
    {
      html += "</tr><tr>";
    }
  }
  html+= "</tr></table>";
  return html;
}

function buildAndShow(){
  //var allI = loadItems2();
  var store = buildStore2(data, 8);
  var storedisplay = displayStore(store);
  return storedisplay;
}
