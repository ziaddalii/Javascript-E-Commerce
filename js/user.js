let notLoggedNav = document.getElementById("not-logged")
let nav = document.getElementById("nav")

if(localStorage.getItem("userValidate") && localStorage.getItem("passValidate")){
    
    // console.log(productsInCartArr.length);
    notLoggedNav.style.display="none"

    nav.innerHTML = `<div class="logo">
        <a href="index.html">Shopping Cart</a>
        </div> 
        <ul class="nav-list" id="not-logged">
        <li class="cart-icon"><span class="fas fa-shopping-cart cart "></li>
        <div class="cart-ui">
        <div class="product-in-cart">
        <div class="cart-nav">
                                    <span class="cart-nav-item">Item</span>
                                    <span class="cart-nav-quantity">Quantity</span>
                                    <span class="cart-nav-price">Price</span>
                                    </div>
                                    <div class="cartItemUI">
                                    <span class="empty-cart-msg">your cart is empty!</span>

                                </div>
                                <div class="total-price-info">
                                    <h2 class="total-price">Total: </h2>
                                    <span class="total-counter">USD 0</span>
                                </div>
                                <button class="check-out-btn">Check Out</button>
                            </div>
                        </div>
        <li><a href="favorites.html" class="link">My Favorites</a></li>
        <li><a href="#" class="link">Categories</a></li>
        <li><a href="#" class="link">Contact Us</a></li>
        <li><a href="#" class="link">${localStorage.getItem("username")}</a></li>
        <li><a href="#" class="link" id="logout">Log out</a></li>
        </ul>`
}

let logOutBtn = document.getElementById("logout");
if(localStorage.getItem("userValidate") && localStorage.getItem("passValidate")){
    logOutBtn.addEventListener("click" , logOut)
}

function logOut(){
    window.localStorage.removeItem("userValidate")
    window.localStorage.removeItem("passValidate")
    location.reload()

}