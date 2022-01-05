document.addEventListener("DOMContentLoaded",()=>{
    let usermail = localStorage.getItem('adressemail');
    let user_mail_shown_a = document.querySelector(".info_compte_texte")
    let user_mail_shown_b = document.querySelector(".welcome_text")


    user_mail_shown_a.textContent=("Voici votre compte "+usermail)
    user_mail_shown_b.textContent=("Bonjour "+usermail)

})