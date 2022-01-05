document.addEventListener("DOMContentLoaded",()=>{
let user_data = "a";
let password_data = "a";


let password_value = document.querySelector("#Mymail");
let mail_value = document.querySelector("#Mypwd");

let verif_change_text = document.querySelector(".verif_text")

let submmit_btn = document.querySelector(".sub_connect")


submmit_btn.addEventListener("click",(e)=>{
    alert(password_value.value)
    alert(mail_value.value)
    e.preventDefault();


    if((password_data==password_value.value)&&(user_data==mail_value.value)){
        confirm("good")
        location.href = "../login_page.html"; 
            
    }else
        {       
            confirm("not good")


            verif_change_text.classList.toggle("verif_text_show")
            verif_change_text.innerText= "Votre adresse mail et votre mot de passe sont incorrects "

        }

})


})