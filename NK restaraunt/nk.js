let hamburger=document.querySelector("#hamburger");
let navbar=document.querySelector('.navbar');


hamburger.onclick=()=>{
    hamburger.classList.toggle('fa-times');
    navbar.classList.toggle('active');
   
}
window.onscroll=()=>{
    hamburger.classList.remove('fa-times');
    navbar.classList.remove('active');
}

   
   let form=document.getElementById("form");
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validate();
})

function validate() {
    let uname = document.getElementById("name").value.trim();
    let num = document.getElementById("number").value.trim();
    let addr = document.getElementById("area").value.trim();

    const regex = /^[a-zA-Z ]{5,12}$/;
    const regex1 = /^[6-9]{1}[0-9]{9}$/;

    if (uname.length === 0 && num.length === 0 && addr.length === 0) {
        alert("No field can be empty");
        return false;
    }

    if (uname.length > 0 && num.length === 0 && addr.length === 0) {
        alert("Number and address can't be empty");
        return false;
    }

    if (uname.length === 0 && num.length > 0 && addr.length === 0) {
        alert("Name and address can't be empty");
        return false;
    }

    if (uname.length > 0 && num.length === 0 && addr.length > 0) {
        alert("Number can't be empty");
        return false;
    }

    if (uname.length === 0 && num.length === 0 && addr.length > 0) {
        alert("Name and number can't be empty");
        return false;
    }

    if (uname.length === 0 && num.length > 0 && addr.length > 0) {
        alert("Name can't be empty");
        return false;
    }

    if (uname.length > 0 && num.length > 0 && addr.length === 0) {
        alert("Address can't be empty");
        return false;
    }

    //addittional checks
    if (!regex.test(uname)) {
    alert("Name should be 5 to 12 characters long and only contain letters and spaces");
    return false;
}
if (!regex1.test(num)) {
    alert("Number should be exactly 10 digits starting with 6-9");
    return false;
}
        alert("Thank You for Ordering our Food, Order details will be sent to your number");
        return true; // Form can be submitted
}

