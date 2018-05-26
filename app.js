console.log('working');

var possetions = {
  have_passport: true,
  bag: [],
  money: 100.00
};

var time = 0;

alert('You have been set a challenge. The challenge is to travel from Sparta Global academy in Richmond to Paris as fast as possible.');
alert('You start off with just your passport and an oyster card. In the break-out space, there are some more items which may help you on your journey. However, your bag is only big enough to carry three items.');

var choice_of_items = ['phone', 'wallet', 'key', 'Revs free drink voucher', 'coat', 'sleeping bag', 'blazer', 'toolbox', 'orange', 'sunglasses'];

alert('You head to the break-out space and see a phone, a wallet, a key, a Revs free drink voucher, a coat, a sleeping bag, a blazer, a toolbox, a juicy orange and a pair of sunglasses.');

var item_counter = 0;
for (item_counter === 0; item_counter < 3; item_counter + 0) {
  var chosenItem = prompt('You choose the...', choice_of_items);
  if (choice_of_items.includes(chosenItem)) {
    possetions.bag.push(chosenItem);
    item_counter++;
  }
  else {
    alert('Item selected is not available. Try again...');
  }
}

console.log(possetions.bag);



// if (chosenItem === 'phone' || chosenItem === 'wallet') {
//   console.log('phone or wallet chosen');
// } else {
//   console.log('something else chosen');
// }
