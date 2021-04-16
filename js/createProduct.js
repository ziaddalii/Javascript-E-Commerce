// Variables
let productNameInp = document.getElementById("product-title")
let productDescInp = document.getElementById("product-desc")
let productPriceInp = document.getElementById("product-price")
let imgUpload = document.getElementById("product-img")
let productCreateBtn = document.getElementById("product-create-btn")
let createForm = document.getElementById("create-form")
let productImgValue

// Events
imgUpload.addEventListener("change" , uploadImg)
productCreateBtn.addEventListener("click" , addProduct)

// Functions
 function addProduct(e){
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("products"));
    let nameValue = productNameInp.value
    let descValue = productDescInp.value
    let priceValue = productPriceInp.value
    console.log(allProducts.length);

    if (nameValue && descValue && priceValue && productImgValue) {
        let obj = {
            title: nameValue,
            imgURL: productImgValue,
            desc: descValue,
            price:priceValue,
            id: allProducts.length + 1
        }

        let newProducts = [...allProducts , obj ]
        localStorage.setItem('products' , JSON.stringify(newProducts));

        productNameInp.value = ""
        productDescInp.value = ""
        productPriceInp.value = ""
        imgUpload.value = ""
    }else{
            alert("ENTER DATA")
        }
}

// Upload Image
function uploadImg(){
    let file = this.files[0]    
    let types = ["image/jpeg" , "image/png"];

        if(types.indexOf(file.type) == -1){
        alert("TYPE NOT SUPPORTED");
        return;
    }
    if(file.size > 2 * 1024 * 1024){
        alert("IMAGE SIZE CANT BE OVER 2MG");
        return;
    }

    const reader = new FileReader();
    console.log(reader);
    reader.addEventListener("load" , ()=>{
        productImgValue = reader.result;
        console.log(productImgValue);
    })
    reader.readAsDataURL(this.files[0]);
    // console.log(productImgValueURL);
}


// // Variables

// let productName = document.getElementById("product-name")
// let productDesc = document.getElementById("product-desc")
// let productSizeSelect = document.getElementById("product-size")
// let productBtn = document.getElementById("product-create-btn")
// let createForm = document.getElementById("create-form")
// let inputFile = document.getElementById("upload-img-file")
// let productSizeValue;
// let productImg;


// // Events
// productSizeSelect.addEventListener("change" , getProductSizeValue)
// createForm.addEventListener("submit" , createProductFun)
// inputFile.addEventListener("change" , uploadImage)

// // Functions
// function getProductSizeValue(e){
//     productSizeValue = e.target.value;
// }

// function createProductFun(e){
//     e.preventDefault();
//     allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
//     let nameValue = productName.value;
//     let descValue = productDesc.value;


//     if(nameValue && descValue) {
//         let obj = {
//             id: allProducts ? allProducts.length + 1 : 1,
//             qty: 1,
//             imageUrl: productImg,
//             size: productSizeValue,
//             title: nameValue,
//             desc: descValue,
//         };

//         let newProducts = allProducts ? [...allProducts , obj] : [obj];
//         localStorage.setItem('products' , JSON.stringify(newProducts));

//         productName.value = ""
//         productDesc.value = ""
//         productSizeSelect.value = ""
//     }
//     else{
//         alert("ENTER DATA")
//     }
// }

// // Upload Image
// function uploadImage(){
//     let file = this.files[0]    
//     let types = ["image/jpeg" , "image/png"];
    
//     if(types.indexOf(file.type) == -1){
//         alert("TYPE NOT SUPPORTED");
//         return;
//     }
//     if(file.size > 2 * 1024 * 1024){
//         alert("IMAGE SIZE CANT BE OVER 2MG");
//         return;
//     }
    
//     getImageBase64(file)
//     // productImg = URL.createObjectURL(file)
// }

// function getImageBase64(file){
//     let reader = new FileReader();

//     reader.readAsDataURL(file);

//     reader.onload = function (){
//         productImage = reader.result;
//     };

//     reader.onerror = function(){
//         alert("ERROR");
//     };
// }
