let username = document.getElementById("username")
let password = document.getElementById("password")
let email = document.getElementById("email")
let signup = document.getElementById("sign-up")
let errorMsg = document.getElementById("error-msg")


signup.addEventListener("click" , checkForms)

function register(){
    localStorage.setItem("username" , username.value)
    localStorage.setItem("password" , password.value)
    localStorage.setItem("email" , email.value)
    window.location.href = "login.html"
}

function checkForms(e){
    event.preventDefault(e)
    if (username.value == "" || password.value == "" || email.value ==""){
        errorMsg.innerHTML = "Please fill the form!"
    }else{
        if(password.value.length < 6){
            errorMsg.innerHTML = "password must be at least 6 digits!"
        }
        else{
            register()
        }
    }
}