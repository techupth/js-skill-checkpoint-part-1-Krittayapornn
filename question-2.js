// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
inventory.push({name: "Orange", price: 20, quantity: 300})

let sum = 0;
for( let i=0; i<inventory.length; i++){
  sum = sum + ((inventory[i].quantity)*(inventory[i].price));
}
console.log("มูลค่ารวมของสินค้าทั้งหมดในสต๊อก " + sum)
