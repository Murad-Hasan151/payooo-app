document.getElementById("login-btn").addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = 17111122220 ;
    const pinNumber = 9999 ;

    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href = "./home.html";
    }
    else{
        alert("Invalid Number or Pin");
    }
})
