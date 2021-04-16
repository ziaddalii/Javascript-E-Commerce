let products = JSON.parse(localStorage.getItem("products"))
let productID = localStorage.getItem("productID")
let itemDom = document.querySelector(".item-details")
let productDetails = products.find ( item => item.id == productID)
console.log(productDetails);

itemDom.innerHTML = `
<img src="${productDetails.imgUrl}" alt="">
<h2>${productDetails.title}</h2>
<p>${productDetails.desc}</p>
<span>Size: ${productDetails.size}</span> <br>
<span>Quantity: ${productDetails.qty}</span>

`