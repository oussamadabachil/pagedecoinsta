document.addEventListener("DOMContentLoaded",()=>{
const  mail_expr =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

let mail_value = document.querySelector("#Mymail");
let password_value = document.querySelector("#Mypwd");

let verif_change_text = document.querySelector(".verif_text")

let submmit_btn = document.querySelector(".sub_connect")


submmit_btn.addEventListener("click",(e)=>{
    e.preventDefault();


    if((password_value.value.length>0)&&(mail_value.value.match(mail_expr))){
        location.href = "./login_page.html";
        verif_change_text.classList.remove("verif_text_show")
        localStorage.setItem('adressemail', mail_value.value);

    }else
        {       


            verif_change_text.classList.add("verif_text_show")
            verif_change_text.innerText= "Votre adresse mail et votre mot de passe sont incorrects "

        }

})


})