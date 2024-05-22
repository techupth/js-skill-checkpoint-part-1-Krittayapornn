// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

// เริ่มเขียนโค้ดตรงนี้

let dataQuantity = [];
for (let i=0; i<inventory.length; i++){
  dataQuantity.push(inventory[i].quantity)
}
console.log(dataQuantity)


function minQuantity (quantity){
  return "สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ " + Math.min(...dataQuantity) + " ชิ้น"
}
let minData = minQuantity(dataQuantity);
console.log(minData)

//note : ใส่คำว่า banana ไม่เป็นที่ให้มันเปลี่ยนตาม min