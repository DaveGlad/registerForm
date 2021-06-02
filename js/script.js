//Methode 1
var input = document.querySelector('.pswrd');
var show = document.querySelector('.show');
show.addEventListener('click', active);
function active() {
    if (input.type === "password") {
        input.type = "text";
        show.style.color = "#FF5160";
        show.innerHTML = `<i class="far fa-eye-slash" aria-hidden="true"></i>`;
    } else {
        input.type = "password";
        show.innerHTML = `<i class="far fa-eye" aria-hidden="true"></i>`;
        show.style.color = "#111";
    }
}
//Methode 2
function myFunction() {
    var x = document.getElementById("password2");
    if (x.type === "password") {
        x.type = "text";
        x.innerHTML = `<i class="far fa-eye-slash" aria-hidden="true"></i>`;
    } else {
        
        x.type = "password";
    }
}
