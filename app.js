console.log('working');

var possessions = {
  havePassport: true,
  bag: [],
  eurostarTicket: 0,
  money: 100.00
};

var time = 0

alert('You have been set a challenge. The challenge is to travel from Sparta Global academy in Richmond to Paris as fast as possible.');
alert('You start off with just your passport, a watch and an oyster card. In the break-out space, there are some more items which may help you on your journey. However, your bag is only big enough to carry five items.');

var choice_of_items = ['phone', 'coat', 'Apple watch', 'wallet', 'bike', 'book', 'London guidebook', 'French dictionary', 'newspaper', 'socks', 'Tesco meal deal'];

alert('You head to the break-out space and see a phone, a coat, a key, a fold-up bike, a coat, a sleeping bag, a book, a toolbox, a juicy orange, a London guidebook and a pair of sunglasses.');


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

if (possessions.bag.includes('coat')) {
  alert('You search the coat and find a Eurostar ticket.');
  possessions.eurostarTicket++;
} else if (possessions.bag.includes('socks')) {
  alert('You pick up the socks and feel something inside one of them. You look inside and find a hidden Eurostar ticket. You pack the rest of your things.');
  possessions.eurostarTicket++;
}

if (possessions.bag.includes('book')) {
  alert('You pick up the book and £20 falls out of the cover, which you keep.');
  possessions.money = possessions.money + 20;
}

alert('You set off...');

// if (possessions.bag.includes('Revs free drink voucher')) {
//   alert('... But first you might as well use your free drinks voucher. It would be rude not to. You always have had your priorities straight.');
//   // time = time + 30;
//   var drinks = parseInt(prompt('How many drinks do you stay for?'));
//   alert('You\'ve wasted quite a bit of time already');
// }


if (possessions.bag.includes('bike')) {
  alert('...and begin to cycle to the train station. There are roadworks on the high street though. You follow the rest of the traffic winding through oneway systems in busy rushhour traffic. Eventually you find yourself in an area you don\'t recignise nd have no idea where you are.');
  if (possessions.bag.includes('phone') || possessions.bag.includes('London guidebook')) {
    if (possessions.bag.includes('phone')) {
      alert('You use the map on your phone to find the nearest station to you.');
    } else if (possessions.bag.includes('London guidebook')) {
      alert('You use the map in your guidebook to find the nearest station to you.');
    }
    alert('The nearest station is only five minutes away by bike.');
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
      possessions.bag.unshift(BuyFromShop);

      var CostFromShop = parseFloat(prompt('... which costs...'));
      possessions.money = possessions.money - CostFromShop;

      alert('The shop owner completes the transaction and explains that the nearest train station is just around the corner. You follow his directions and a train arrives promptly. You board the train.');
    }
  }
} else {

  var running = prompt('... and head to the train station on foot. You check your watch. The next train is soon. Should you should pick up the pace to catch it?');
  if (running === 'yes') {
    possessions.havePassport = false;
    alert('You break into a sprint to catch the train, bumping into and pushing through crowds of people travelling through the station. You jump onto the train just in time.');
  } else {
    alert('You decide not to run and walk to the station. You arrive at the station and board the next train.');
  }

  alert('You find a seat on the train.');
}

if (possessions.havePassport === false) {
  alert('After several stops, a guard asks to see your ticket, as you reach into your pocket your stomach sinks as you realise that you are missing your passport. You must have dropped it somewhere.');
  var transportOptions = prompt('You get off at the next stop and decide you must go back. The quickest way back is by taxi but it will be expensive. Should you get a taxi?');
  if (transportOptions === 'yes') {
    alert('You pay for a taxi back.');
    possessions.money = possessions.money - 50;
  } else {
    alert('You take the long return journey on the train');
  }
  alert('Luckily, somebody had handed your passport into lost and found at Richmond station. You collect it and board the train again having wasted a lot of time.');
}

alert('The train arrives at Waterloo.');
if (possessions.eurostarTickets > 0) {
  alert('You decide to use your ticket to catch the Eurostar from King\'s Cross St Pancrus, since that is the quickest way to Paris. You rush to the underground and jump on the train. You look out of the window as you stop at...');

  var stations = ['Embankment', 'Charing Cross', 'Leicester Square', 'Covent Garden', 'Holburn', 'Russell Square', 'King\'s Cross St Pancras', 'Caledonian Road', 'Holloway Road', 'Arsenal', 'Finsbury Park'];

  var getOffTrain = '';
  var stationNumber = 0;
  var stationLoopCounter = 0;
  // doesn't stop after 11 stations
  for (stationNumber = 0;
  getOffTrain === '';
  ) {
    getOffTrain = getOffTrain.replace(prompt('Press enter to get off the train at ' + (stations[stationNumber]) + ' or type anything to stay on the train'));
    stationNumber++;
  }



  if (stationNumber === 7) {
    alert('You get off at King\'s Cross St Pancras, but the train is delayed by 2 hours. You wait for the train. It is dark by the time you board. The journey feels long but you eventually arrive in Paris.');
  } else if (stationNumber < 7) {
    alert('You accidently get off the train too early. The next train is delayed. You ask a guard if there is a quicker way to get to King\'s Cross St Pancras. A delivery driver overhears you and offers you a lift on his moped to the station. You jump on the back of his bike and you both take off. He weaves through traffic like a mad man, but you arrive at King\'s Cross on time and get on the train to Paris.');
  } else if (stationNumber > 7) {
    alert('Zzzzzzzz...');
    alert('You suddenly wake up as the train arrives at Finsbury Park. You fell asleep and missed your stop! You get off the train and cross to the opposite platform and get on the next train going back the way you came.');

    getOffTrain = '';
    stationNumber = 0;
    stationLoopCounter = 0;
    stations = stations.reverse();
    for (stationNumber = 0;
    getOffTrain === '';
    ) {
      getOffTrain = getOffTrain.replace(prompt('Press enter to get off the train at ' + (stations[stationNumber]) + ' or type anything to stay on the train'));
      stationNumber++;
    }

    if (stationNumber === 5) {
      alert('You arrive late at King\'s Cross St Pancras and have missed your train. You are able to catch the next train but it is not for 3 hours. You fall sleep again while you wait. Eventually you board the train and several hours later arrive in Paris.');
    } else if (stationNumber < 5) {
      alert('You accidently get off the train too early. The next train is delayed. You ask a guard if there is a quicker way to get to King\'s Cross St Pancras. A delivery driver overhears you and offers you a lift on his moped to the station. You jump on the back of his bike and you both take off. He weaves through traffic like a mad man, but you arrive at King\'s Cross on time and get on the train to Paris.');
    } else if (stationNumber > 5) {
      alert('Zzzzzzzz...');
      alert('You fall asleep again. This time you decide to pay for a taxi direct to the King\'s Cross. It costs £25. You arrive too late to catch your train, but are able to catch the next train. There is an hour wait before you board for Paris.');
      possessions.money = possessions.money - 25;
    }
  }


} else if (possessions.money >= 100.00) {
  alert('You plan to catch a flight. You head to the airport and purchase a ticket for £50.');
  possessions.money = possessions.money - 50;
  if (possessions.bag.includes('Tesco meal deal')) {
    alert('At the airport you eat your yum Tesco meal deal. You spill sauce on your shirt and have to buy a new one for £30. After chaging, you catch your flight to Paris smoothly.');
    possessions.money = possessions.money - 30;
  } else if (possessions.bag.length < 2) {
    var airportPurchase = prompt('You arrive at the airport with time to spare. After checking in, you decide that for the flight, you will need to buy a...');
    possessions.bag.pop(airportPurchase);
    var airportPurchasePrice = parseInt(prompt('... which costs... '));
    possessions.money = possessions.money - airportPurchase;
    possessions.bag.unshift(airportPurchase);
    alert('The flight is quick and you arrive in Paris before long.');

  } else if (possessions.bag.includes('Apple watch')) {
    alert('After checking in, go to buy food, which costs £10.');
    possessions.money = possessions.money - 10;
    alert('You arrive at your gate for your flight and take a seat and place your bag next to you. A mysterious looking man sits next to you. He notices your Apple watch and talks to you about it. You become uncomfortable and put in in your bag after the converstaion. The man gets up and walks away. You wait a few minutes before getting up to board your flight. You pick up your bag but it feels lighter. You check inside and see that your' + possessions.bag[0] + ' is missing. The presume the man must have stolen. You report the theft, but the police refuse to believe you. You board the plane a short while later and arrive in Paris soon after.');
    possessions.bag.shift();

  } else {
    alert('There is a long delay. You board the flight in the middle of the night and arrive in Paris shortly after.');
  }


} else {
  alert('The only method you can now afford is a ferry, you must take a ferry to Paris. You travel to Dover and buy a ticket for £30.');
  possessions.money = possessions.money - 30;
  var securityRandItem = possessions.bag[Math.floor((Math.random()*(possessions.bag.length-1)))];
  alert('As you board the boat, you are stopped by security. They ask to search your bag. They pull out the ' + securityRandItem + '. They question you suspiciously about this item and claim that they are banned from the ferry. You explain that you need it. They suggest  subtly that they would accept a bribe You hand them £15 and they let you keep the ' + securityRandItem + '.');
  possessions.money = possessions.money - 15;
}









console.log(possessions.bag);
console.log(possessions.money);
console.log(possessions.eurostarTicket);
