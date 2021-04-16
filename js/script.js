// localStorage.setItem("productsInFavArr" , [])
let productsInCart = localStorage.getItem("productsInCart");
productsInCart = JSON.parse(productsInCart);


let productsInCartObj = localStorage.getItem("productsInCartObj");
productsInCartObj = JSON.parse(productsInCartObj);

let productsInFavArr = localStorage.getItem("productsInFavArr")
productsInFavArr = JSON.parse(productsInFavArr);

let productsInFavObj = localStorage.getItem("productsInFav×Obj")


let allProducts = localStorage.getItem("products");
allProducts = JSON.parse(allProducts);

//********* Search Bar *********
let searchBar = document.getElementById("search")

searchBar.addEventListener("keyup" , function(e){
        search(e.target.value , JSON.parse(localStorage.getItem("products")))
    if(e.target.value.trim() === ""){
        drawProductUI(JSON.parse(localStorage.getItem("products")))
    }
});

function search(title , myArray){
    let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawProductUI(arr);
}

// ********* Display Products *********
let productsContainer = document.querySelector(".products-container")
function drawProductUI(array){
    let productsInFavArr = JSON.parse(localStorage.getItem("productsInFavArr")) || []; // read the value here so it's fresh before redraw happens
    var productsUI = array.map((item) => {
        if (productsInFavArr) {
            for (const favProd of productsInFavArr){
                    if (favProd.id === item.id) {
                    return `
                <div class="product-item"> 
                <div class="product-img-container">
                <img src=${item.imgURL} alt="products" class="product-img" width="100%" height="150px">
                </div>
                <div class="product-text">
                    <h2 class="product-title">${item.title}</h2>
                    <span class="product-desc">${item.desc}</span>
                    <p class="product-price">USD ${item.price}</p>
                </div>
                <div class="product-btns">
                    <button class="add-to-cart" onclick="addToCart(${item.id})">Add To Cart</button>
                    <button class="heart-btn heart-icon-red" onclick="removeItemFromFav( ${item.id} )"><i class="far fa-heart"></i></button>
                </div>
                </div>
                `;
                }
        }}
        return`
        <div class="product-item"> 
            <div class="product-img-container">
                <img src=${item.imgURL} alt="products" class="product-img" width="100%" height="150px"> 
            </div>
            <div class="product-text">
                <h2 class="product-title">${item.title}</h2>
                <span class="product-desc">${item.desc}</span>
                <p class="product-price">USD ${item.price}</p>
            </div>
            <div class="product-btns">
                <button class="add-to-cart" onclick="addToCart(${item.id})">Add To Cart</button>
                <button class="heart-btn heart-icon" onclick="addToFavorites(${item.id})" ><i class="far fa-heart"></i></button>
            </div>
        </div>
        `
    
    
    });
        productsContainer.innerHTML = productsUI.join("");    
    }

drawProductUI(allProducts)


// ********* SLIDE SHOW *********

let slideShowImg = document.getElementById("slideshow")

var i = 0;
var images = []


// Image List

images[0] = "images/Slide show/Shoes.jpg"
images[1] = "images/Slide show/Clothes.jpg"
images[2] = "images/Slide show/Furniture.jpg"
images[3] = "images/Slide show/tech.jpg"
images[4] = "images/Slide show/Accessories.jpg"
images[5] = "images/Slide show/happy.jpg"

// Change Image

function changeImage(){
    slideShowImg.src = images[i]

    if (i < images.length - 1) {
        i++
    }else{
        i=0
    }
    setTimeout("changeImage()" , 3000)
}
window.onload = changeImage()






// ********* Add to cart Menu *********

// To get the product I want To add
let addToCartBtn = document.querySelectorAll(".add-to-cart")

for(let n=0; n < addToCartBtn.length; n++){
    addToCartBtn[n].addEventListener("click" ,()=>{
        // console.log(allProducts[n]);
        addToCart(allProducts[n]);
    } );
}

// To add the product to the local storage and Cart Menu UI
let cart = document.querySelector(".cart")
function addToCart(id){
    console.log(cart);
    if(localStorage.getItem("userValidate") && localStorage.getItem("passValidate")){
        const product = allProducts.find(p => p.id == id);
        if (!product) { return; }
        let productsInCartObj = localStorage.getItem("productsInCartObj");
        productsInCartObj = JSON.parse(productsInCartObj);
        if(productsInCartObj != null){ // if the productsInCart exists

                if(productsInCartObj[product.id] == undefined){ // and if the product i added is not in the cart
                    console.log("Not In The Cart");
                    productsInCartObj = { // so it adds and object with the last items + the new item
                        ...productsInCartObj,
                        [product.id] : product // this means it will put the id of the product as an Index or somthing like (id : title:sunglasses , price: etc..)
                        }
                        cartItemUI.innerHTML += ` 
                        <div class="cart-item-info">
                            <div class="img-title-product-cart">
                                <img class="cart-img" src=${product.imgURL} alt="" width="50px" height="50">
                                <span class="product-title-cart">${product.title}</span>
                            </div>
                    
                            <div class="quantity-remove-product-cart">
                                <input class="quantity-cart" type="number" value="${product.qty}">
                                <button class="remove-product-cart" onclick="removeItemFromCart( ${product.id} )">Remove</button>
                            </div>
                    
                            <div class="price-usd">
                            <span class="product-price-cart product-price-cart1">${product.price}</span>
                            <p class="product-price-cart">USD</p>
            
                            </div>
                            </div>
            
                        </div>
                        `
    
                }else{
                    productsInCartObj[product.id].qty += 1
                }

            
    
        }else{ // and if its the first product to be added in the cart
            productsInCartObj = {
                [product.id] : product
            }
            cart.innerHTML=`<span class="badge">1</span>`

            cartItemUI.innerHTML = ` <div class="cart-item-info">
            <div class="img-title-product-cart">
                <img class="cart-img" src=${product.imgURL} alt="" width="50px" height="50">
                <span class="product-title-cart">${product.title}</span>
            </div>
    
            <div class="quantity-remove-product-cart">
                <input class="quantity-cart" type="number" value="${product.qty}"}>
                <button class="remove-product-cart" onclick="removeItemFromCart( ${product.id} )">Remove</button>
            </div>
    
            <div class="price-usd">
            <span class="product-price-cart product-price-cart1">${product.price}</span>
            <p class="product-price-cart">USD</p>

        </div>
        </div>

        </div>
        `
        
    }
    let productsInCartArr = Object.values(productsInCartObj)

    localStorage.setItem("productsInCart" , JSON.stringify(productsInCartArr) )
    localStorage.setItem("productsInCartObj" , JSON.stringify(productsInCartObj) )
    // updateCartTotal()
    }else{
        window.location.href = "login.html";
    }
    updateCartTotal()
    drawProductInCartUI()
    updateCartBadge()
}

function updateCartBadge(){
    let productsInCart = localStorage.getItem("productsInCart");
    productsInCart = JSON.parse(productsInCart);
    let badge = document.querySelector(".badge")
    let quantity = 0
    if (productsInCart) {
        badge.style.display = "block"
        for(let i=0; i < quantityElement.length; i++){
            quantity += productsInCart[i].qty
            badge.innerHTML = quantity
        }
    }else{
        badge.style.display = "none"
    }
}



let quantityElement = document.getElementsByClassName("quantity-cart");



// ********* Display Products In Cart*********

let cartUI = document.querySelector(".cart-ui");
let cartIcon = document.querySelector(".cart-icon");
let cartItemUI = document.querySelector(".cartItemUI");
console.log(cartItemUI);

function drawProductInCartUI(){
    let productsInCart = localStorage.getItem("productsInCart");
    productsInCart = JSON.parse(productsInCart);


        let productsInCartArr = productsInCart.map( (product) =>{

        return`        

            <div class="cart-item-info">
                <div class="img-title-product-cart">
                    <img class="cart-img" src=${product.imgURL} alt="" width="50px" height="50">
                    <span class="product-title-cart">${product.title}</span>
                </div>
        
                <div class="quantity-remove-product-cart">
                    <input class="quantity-cart" type="number" autocomplete='on' value="${product.qty}">
                    <button class="remove-product-cart" onclick="removeItemFromCart( ${product.id} )">Remove</button>
                </div>
        
                <div class="price-usd">
                <span class="product-price-cart product-price-cart1">${product.price}</span>
                <p class="product-price-cart">USD</p>

            </div>
            </div>

            </div>

    `
    
}
)
cartItemUI.innerHTML = productsInCartArr.join("")
let quantity=0
for(let i=0; i < quantityElement.length; i++){
    quantity += productsInCart[i].qty
cart.innerHTML=`<span class="badge">${quantity}</span>`
}
}

if(productsInCartObj != null){
    drawProductInCartUI()
    updateCartTotal()
    // updateCartBadge()  
}




cartIcon.addEventListener("click" , openCartMenu);

function openCartMenu(){
    if (cartUI.style.display=="block") {
        cartUI.style.display="none";
    }else{
        cartUI.style.display="block"
    }
}


// ********* Remove Products From Cart *********


function removeItemFromCart(id){
    let productsInCart = localStorage.getItem("productsInCart")
    if(productsInCart){
        let items = JSON.parse(productsInCart);
        
        let filteredItems = items.filter((item) => item.id !== id);
        for (const prod of filteredItems){
            let filteredItemsObj ={
                [prod.id]:prod
            }
            localStorage.setItem("productsInCartObj" , JSON.stringify(filteredItemsObj) )
        }
        localStorage.setItem("productsInCart" , JSON.stringify(filteredItems));        
        drawProductInCartUI(filteredItems)
        updateCartTotal()
        console.log(filteredItems);
        if(filteredItems.length==0){
        let badge = document.querySelector(".badge")
            localStorage.removeItem("productsInCart")
            localStorage.removeItem("productsInCartObj")
            let total = document.querySelector(".total-counter");
            total.innerHTML="USD 0"
            cartItemUI.innerHTML += `<span class="empty-cart-msg">your cart is empty!</span>`
            badge.style.display="none"
        }
    }
}

// ********* Count Cart Total Cost *********

function updateCartTotal(){
    let productsInCart = localStorage.getItem("productsInCart");
    productsInCart = JSON.parse(productsInCart);
    var cartItemsContainer = document.getElementsByClassName("cart-ui")[0];
    var cartRows = cartItemsContainer.getElementsByClassName("cart-item-info");
    var totalPrice = 0
    for(var i = 0; i < cartRows.length; i++){
        const res = productsInCart.map(product => 
            ({ ...product, totalPrice: product.qty * product.price })
          );
          totalPrice += res[i].totalPrice
          console.log(totalPrice);
    }
    document.getElementsByClassName("total-counter")[0].innerText="USD " + totalPrice
}



// for(let i=0; i < quantityElement.length; i++){
    
//     quantityElement[i].addEventListener("input" , ()=>{

//         let productsInCart = localStorage.getItem("productsInCart");
//         productsInCart = JSON.parse(productsInCart);
    
//         let productsInCartObj = localStorage.getItem("productsInCartObj");
//         productsInCartObj = JSON.parse(productsInCartObj);
//         console.log("quantity Changed");
//         let res = productsInCart.map(product => 
//             ({ ...product, qty: parseInt(quantityElement[i].value)}))
//             console.log(res);
//             console.log(quantityElement[i]);
//             // let resArr = []
//             // resArr.push(res)
//             let resArr = JSON.stringify(res)
//             let resObj = Object.assign({}, JSON.parse(resArr))
//             console.log("this is resObj",JSON.stringify(resObj));
//             localStorage.setItem("productsInCart" , JSON.stringify(res));
//             localStorage.setItem("productsInCartObj" , JSON.stringify(resObj))
//             console.log("This is array ob objects" , productsInCart);
//         }
//         )
//         break;
// }


for(let i=0; i < quantityElement.length; i++){
    quantityElement[i].addEventListener("input" , ()=>{
        quantityChanged(quantityElement[i])})
}
function quantityChanged (quantityElement){
    console.log("quantity Changed");
    let res = productsInCart.map(product => 
        ({ ...product, qty: parseInt(quantityElement.value)}))
        console.log(res);
        console.log(quantityElement);
    // let resArr = []
    // resArr.push(res)
    let resArr = JSON.stringify(res)
    let resObj = Object.assign({}, JSON.parse(resArr))
    console.log("this is resObj",JSON.stringify(resObj));
localStorage.setItem("productsInCart" , JSON.stringify(res));
localStorage.setItem("productsInCartObj" , JSON.stringify(resObj))
console.log("This is array ob objects" , productsInCart);
updateCartTotal()
updateCartBadge()
}

// ********* Favorite Products *********
function addToFavorites(id){
    if (localStorage.getItem("userValidate") && localStorage.getItem("passValidate")) {
        const product = allProducts.find(p => p.id == id);
        if (!product) { return; }
        let productsInFavObj = localStorage.getItem("productsInFavObj");
        productsInFavObj = JSON.parse(productsInFavObj);
        if(productsInFavObj != null){
            if(productsInFavObj[id] == undefined){
                productsInFavObj = { 
                    ...productsInFavObj,
                    [id] : product
                }            
            }
        }else{
            productsInFavObj = {
               [id] : product
            }
        }
        let productsInFavArr = Object.values(productsInFavObj)
        localStorage.setItem("productsInFavArr" , JSON.stringify(productsInFavArr) )
        localStorage.setItem("productsInFavObj" , JSON.stringify(productsInFavObj) )
        drawProductUI(allProducts); // this redraws the UI
    }else{
        window.location.href = "login.html";
    }
}

// Remove from Favorite

function removeItemFromFav(id){
    let productsInFavArr = localStorage.getItem("productsInFavArr")
    if(productsInFavArr){
        let items = JSON.parse(productsInFavArr);
        let filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem("productsInFavArr" , JSON.stringify(filteredItems) );        
        localStorage.setItem("productsInFavObj" , JSON.stringify(filteredItems) )
        drawProductUI(allProducts)
        if(filteredItems.length==0){
            localStorage.removeItem("productsInFavArr")
            localStorage.removeItem("productsInFavObj")
        }
    }
}
        


