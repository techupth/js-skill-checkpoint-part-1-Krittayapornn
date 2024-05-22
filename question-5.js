// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE20";
// เริ่มเขียนโค้ดตรงนี้

let totalPrice = 0;
for (let i=0; i<products.length;i++){
  totalPrice = totalPrice + ((products[i].price)*(products[i].quantity))
}
console.log(totalPrice)


function calculateTotalPrice (price, discount){
  if(discount === ""){
    return price
  }else if(discount === "SALE20"){
    return price*0.8
  }else if(discount === "SALE50"){
    return price*0.5
  }
}
console.log(calculateTotalPrice(totalPrice,promotionCode))