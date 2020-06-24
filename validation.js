const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const name = document.getElementById('name').value;

function validateForm(){

    var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    
    if(!email.match(pattern)){
        alert("Enter a valid email");
        return false;
     }
   
     if(password.length < 8){
         alert("Password must be greater than 8 characters");
         return false;
     }
   
}

