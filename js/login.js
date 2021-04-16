let username = document.getElementById("username")
let password = document.getElementById("password")
let signin = document.getElementById("sign-in")
let errorMsg = document.getElementById("error-msg")
let loggedNav = document.getElementById("logged")



signin.addEventListener("click" , checkUser)

function checkUser(e){
    event.preventDefault(e)
    if(username.value == localStorage.getItem("username") &&
    password.value == localStorage.getItem("password"))
    {
        localStorage.setItem("userValidate" , "true")
        localStorage.setItem("passValidate" , "true")

        changeNav()
    }else{
        errorMsg.innerHTML = "Wrong username or password!"
    }

}

function changeNav(){
    if(localStorage.getItem("userValidate") && localStorage.getItem("passValidate")){
        setTimeout(window.location.href = "index.html" , 2000)
    }
}
