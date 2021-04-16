let productsDom = document.querySelector(".products")
let productItem = document.querySelector(".product-item")
let noProductsDom = document.querySelector(".no-products")

// if (productsInCart) {
//     let items = JSON.parse(productsInCart)
//     drawCartProductsUI(items);
// }


function drawCartProductsUI(allProducts = []){

    if(JSON.parse(localStorage.getItem("productsInCart")).length === 0){
        noProductsDom.innerHTML = "Your card is empty !!"
    }
    let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts;
    let productsUI = products.map( (item) => {
        return`
        <div class="product-item">
            <img src=${item.imgUrl} class="product-item-img" alt="laptop">

            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>${item.desc}</p>
                <span>Size: ${item.size}</span>
                <p>Quantity: ${item.qty}</p>

            </div>

            <div class="product-item-action">
                <!-- <i class="fas fa-cart-plus"></i> -->
                <i class="far fa-heart fa-2x favorite"></i>
                <button class="remove-from-cart" id="remove-from-cart" onclick="removeItemFromCart( ${item.id} )">Remove From Cart</button>
            </div>
        </div>
    `
    } )

    productsDom.innerHTML = productsUI.join("");
}
drawCartProductsUI()

function removeItemFromCart(id){
    let productsInCart = localStorage.getItem("productsInCart")
    if(productsInCart){
        let items = JSON.parse(productsInCart);

         let filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem("productsInCart" , JSON.stringify(filteredItems));
        drawCartProductsUI(filteredItems)
    }
}