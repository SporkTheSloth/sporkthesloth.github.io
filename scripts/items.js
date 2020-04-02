
//Pull JSON of items and returns it
function loadItems() {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://sporkthesloth.github.io/items/items.json');
  request.responseType = 'json';
  request.send();
  var allItems;
  //Wait for return of JSON item list
  request.onload = function()
  {
    allItems = request.response;
  }
  return allItems;
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
  maxItem = 828;
  break;
 case 9:
  maxItem = 904;
  break;
}
return maxItem;
}

//uses JSON to get base list of items based on Gloomhaven Prosperity
function buildStore(aItems, prosp) {
  var objects = [];
  var invLevel = getInvLevel(prosp);
  for (var i in aItems) {
    if (i.id <= invLevel)
    {
      objects.push(aItems[i]);
    }
  }
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
    html += "<td><img id="+store[i].id+" src=/items/images/"+store[i].img+".png alt=card "+store[i].id+"/></td>";
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

function buildAndShow(){
  var allI = loadItems();
  var store = buildStore(allI, 4);
  var storedisplay = displayStore(store);
  return storedisplay;
}
