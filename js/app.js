document.addEventListener("DOMContentLoaded",()=>{
let user_data = "a";
let password_data = "a";


let password_value = document.querySelector("#Mymail");
let mail_value = document.querySelector("#Mypwd");

let verif_change_text = document.querySelector(".verif_text")

let submmit_btn = document.querySelector(".sub_connect")


submmit_btn.addEventListener("click",(e)=>{
    e.preventDefault();


    if((password_data==password_value.value)&&(user_data==mail_value.value)){
        location.href = "../login_page.html"; 
        verif_change_text.classList.remove("verif_text_show")
 
    }else
        {       


            verif_change_text.classList.add("verif_text_show")
            verif_change_text.innerText= "Votre adresse mail et votre mot de passe sont incorrects "

        }

})


})