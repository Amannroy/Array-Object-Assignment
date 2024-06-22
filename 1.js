/* In the following shopping cart add, remove, and edit items
=> const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
 add 'Meat' in the beginning of your shopping cart if it has not been already added
 add Sugar at the end of you shopping cart if it has not been already added
 remove 'Honey' if you are allergic to honey
 modify Tea to 'Green Tea'
*/

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Adding 'Meat' at the beginning if it's not already added
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat');
}

// Adding 'Sugar' at the end if it's not already added
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
}

// Removing 'Honey' if allergic to it
const allergicToHoney = true;
if(allergicToHoney){
    shoppingCart = shoppingCart.filter(item => item !== 'Honey');
}

// Modifying 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if(teaIndex !== -1){
  shoppingCart[teaIndex] = 'Green Tea'
}
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]