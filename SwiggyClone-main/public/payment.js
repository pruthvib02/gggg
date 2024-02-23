function hi()
{
    alert("Hi")
}
function payment(){
    console.log("hi")
var options = {
    "key": "rzp_test_s95g3UKovO2ZXe", // Enter the Key ID generated from the Dashboard
    "amount": 350*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Swiggy",
    "description": "Test Transaction",
    "image": "image/newlogo.png",
    //"order_id": "order_Juq2tzkn1kVVrY", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        saveDB(response)
    },
    "prefill": {
        "name": "Kanasvi Patil",
        "email":"kanasvi@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#ff7800"
    }
};
console.log(options)
var propay = new Razorpay(options);
    propay.open();
}

function saveDB(response) {
    console.log(response)
    var payRef = firebase.database().ref('payment');

    payRef.child('123456789').set({
    payment_id : response.razorpay_payment_id
    }) 
}