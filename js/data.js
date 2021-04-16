let products = [
    {
        title: "Sunglasses",
        imgURL: "images/Products/sunglasses.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla adipisci fugiat pariatur recusandae repudiandae fuga molestias doloremque itaque obcaecati.",
        price:80,
        qty:1,
        id: 1
    },
    {
        title: "Laptop",
        imgURL: "images/Products/laptop.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla adipisci fugiat pariatur recusandae repudiandae fuga molestias doloremque itaque obcaecati.",
        price:100,
        qty:1,
        id: 2
    },
    {
        title: "Microphone",
        imgURL: "images/Products/mic.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla adipisci fugiat pariatur recusandae repudiandae fuga molestias doloremque itaque obcaecati.",
        price:75,
        qty:1,
        id: 3
    },
    {
        title: "Cat",
        imgURL: "images/Products/cat.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla adipisci fugiat pariatur recusandae repudiandae fuga molestias doloremque itaque obcaecati.",
        price:200,
        qty:1,
        id: 4
    },
]
let productsDom = localStorage.getItem("products");
if (productsDom === null) {
    localStorage.setItem("products" ,JSON.stringify(products))
}

