let productsFavContainer = document.querySelector(".products-fav-container")
let productsInFavArr = localStorage.getItem("productsInFavArr")
productsInFavArr = JSON.parse(productsInFavArr);
console.log(productsInFavArr);

function drawProductUI(){
    let productsInFavUI = productsInFavArr.map((item) => {

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
            <button class="add-to-cart">Add To Cart</button>
            <button class="heart-icon-red"><i class="far fa-heart"></i></button>
        </div>
        </div>
        <br>
        `;
        });

    productsFavContainer.innerHTML = productsInFavUI.join("");
};

if (productsInFavArr) {
    window.onload = drawProductUI()
}





// let productsDom = document.querySelector(".products")
// let productItem = document.querySelector(".product-item")
// let noProductsDom = document.querySelector(".no-products")

// // if (productsInCart) {
// //     let items = JSON.parse(productsInCart)
// //     drawCartProductsUI(items);
// // }


// function drawFavoritesProductsUI(allProducts = []){

//     if(JSON.parse(localStorage.getItem("productsFavorite")).length === 0){
//         noProductsDom.innerHTML = "Your card is empty !!"
//     }
//     let products = JSON.parse(localStorage.getItem("productsFavorite")) || allProducts;
//     let productsUI = products.map( (item) => {
//         return`
//         <div class="product-item">
//             <img src=${item.imgUrl} class="product-item-img" alt="laptop">

//             <div class="product-item-desc">
//                 <h2>${item.title}</h2>
//                 <p>${item.desc}</p>
//                 <span>Size: ${item.size}</span>
//                 <p>Quantity: ${item.qty}</p>

//             </div>

//             <div class="product-item-action">
//                 <!-- <i class="fas fa-cart-plus"></i> -->
//                 <i class="far fa-heart fa-2x favorite"></i>
//                 <button class="remove-from-cart" id="remove-from-cart" onclick="removeItemFromFavorites( ${item.id} )">Remove From Favorites</button>
//             </div>
//         </div>
//     `
//     } )

//     productsDom.innerHTML = productsUI.join("");
// }
// drawFavoritesProductsUI()

// function removeItemFromFavorites(id){
//     let productsFavorite = localStorage.getItem("productsFavorite")
//     if(productsFavorite){
//         let items = JSON.parse(productsFavorite);

//          let filteredItems = items.filter((item) => item.id !== id);
//         localStorage.setItem("productsFavorite" , JSON.stringify(filteredItems));
//         drawFavoritesProductsUI(filteredItems)
//     }
// }