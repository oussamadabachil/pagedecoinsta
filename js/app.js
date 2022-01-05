document.addEventListener("DOMContentLoaded",()=>{
let user_data = "a";
let password_data = "a";


let password_value = document.querySelector("#Mymail");
let mail_value = document.querySelector("#Mypwd");

let verif_change_text = document.querySelector(".verif_text")

let submmit_btn = document.querySelector(".subconnect")


submmit_btn.addEventListener("click",()=>{
    alert(password_value.value)
    alert(mail_value.value)
    confirm("hey")


    if((password_data==password_value.value)&&(user_data==mail_value.value)){
        window.open("./login_page.html")        }else
        {       


            verif_change_text.classList.toggle("verif_text_change")
            verif_change_text.innerText= "Votre adresse mail et votre mot de passe sont incorrects "

        }

})


})