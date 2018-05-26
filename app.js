console.log('working');

var possessions = {
  have_passport: true,
  bag: [],
  money: 100.00
};

// var time = 0;

alert('You have been set a challenge. The challenge is to travel from Sparta Global academy in Richmond to Paris as fast as possible.');
alert('You start off with just your passport and an oyster card. In the break-out space, there are some more items which may help you on your journey. However, your bag is only big enough to carry five items.');

var choice_of_items = ['phone', 'wallet', 'key', 'bike', 'coat', 'sleeping bag', 'blazer', 'toolbox', 'orange', 'sunglasses', 'map of London'];

alert('You head to the break-out space and see a phone, a wallet, a key, a fold-up bike, a coat, a sleeping bag, a blazer, a toolbox, a juicy orange, a map of London and a pair of sunglasses.');


for (var item_counter = 0;
item_counter < 2;
item_counter + 0) {
  var chosenItem = prompt('You choose the...', choice_of_items);
  if (choice_of_items.includes(chosenItem)) {
    possessions.bag.push(chosenItem);
    item_counter++;
  }
  else {
    alert('Item selected is not available. Try again...');
  }
}



alert('You set off...');

if (possessions.bag.includes('Revs free drink voucher')) {
  alert('... But first you might as well use your free drinks voucher. It would be rude not to. You always have had your priorities straight.');
  // time = time + 30;
  var drinks = parseInt(prompt('How many drinks do you stay for?'));
  alert('You\'ve wasted quite a bit of time already');
}


if (possessions.bag.includes('bike')) {
  alert('...and begin to cycle to the train station. There are roadworks on the high street though. You follow the rest of the traffic winding through oneway systems in busy rushhour traffic. Eventually you find yourself in an area you don\'t recignise nd have no idea where you are.');
  if (possessions.bag.includes('phone') || possessions.bag.includes('map of London')) {
    alert('You use your phone to find the nearest station to you. The nearest station is only five minutes away by bike.');
    alert('You arrive at the station and you see a train standing at the platform. You dump your bike on the floor and rush onto the train just in time before the doors close behind you.');

    // ------ removes bike from bag ------
    var removeBike = possessions.bag.indexOf('bike');
    if (removeBike > -1) {
        possessions.bag.splice(removeBike, 1);
    }
    // ------ removes bike from bag ------
  } else {
    alert('You enter a shop to ask for directions, but the shop owner is grumpy, he says he will only help you if you buy something from his shop. To do so you need to make more room in your bag.');


    for (var removeItemCounter = 0;
    removeItemCounter < 1;
    removeItemCounter + 0) {
      var removeFromBag = prompt('You choose to remove the...', possessions.bag);
      if (possessions.bag.includes(removeFromBag)) {
        var removeInShop = possessions.bag.indexOf(removeFromBag);
        if (removeInShop > -1) {
            possessions.bag.splice(removeInShop, 1);
        }
        removeItemCounter++;
      }
      else {
        alert('This item is not in your bag, choose an item that is in your bag');
      }

      var BuyFromShop = prompt('... and you purchase a...');
      possessions.bag.pop(BuyFromShop);

      var CostFromShop = parseFloat(prompt('... which costs...'));
      possessions.money = possessions.money - CostFromShop;

      alert('The shop owner completes the transaction and explains that the nearest train station is just around the corner. You follow his directions and a train arrives promptly. You board the train.')
    }
  }
} else {
  alert('... and head to the train station on foot. You arrive at the station and get on the train.');
}

console.log(possessions.bag);
console.log(possessions.money)
