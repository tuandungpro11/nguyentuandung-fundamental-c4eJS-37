// inventory = {
//     gold : 500,
//     pouch : ["flint", "twine", "gemstone"],
//     backpack : ["xylophone", "dagger", "bedroll", "bread loaf"]
// }
// inventory.pocket = ["seashell", "strange berry", "lint"];
// delete inventory.backpack[1];
// inventory.gold +=50;


// console.log(inventory);

// Ex2
let prices  = { 
banana: 4,
apple: 2,
orange: 1.5,
pear: 3
}
let stock = {
    banana: 6,
    apple: 0,
    orange: 32,
    pear: 15
} 
let total = 0;
let w = Object.keys(prices);
for (let i=0;i<w.length;i++){
    console.log(w[i]);
    console.log(`price: ${prices[w[i]]}`);
    console.log(`stock: ${stock[w[i]]}`);
   total += prices[w[i]]*stock[w[i]];
}
console.log(`Total = ${total}`);





