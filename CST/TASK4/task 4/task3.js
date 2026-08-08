var name=prompt("please entre your name")
var phone =prompt("please entre your phone number")
var mobile=prompt("please entre the mobile number")
var email=prompt("please enter your email")



var nameRegex = /^[A-Za-z ]+$/;// mn el start l el end only letter no number
var phoneRegex = /^\d{8}$/;// only 8 numbers
var mobileRegex =  /^(010|011|012|015)[0-9]{8}$/;//ybd2 b 7aga mn el 2rb3aa w +8 total 11
var emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;//start w ith number letter and any thing and mut end with @gmail.com


// low sa7 hytb3 fe el cosole low 8alat invalid
if (
    nameRegex.test(name) &&
    phoneRegex.test(phone) &&
    mobileRegex.test(mobile) &&
    emailRegex.test(email)
) {
    var color = prompt("Choose a color you want:(red, green, blue)");

        console.log("%cwelcome " + name, "color:" + color);
        console.log("%cphone : " + phone, "color:" + color);
        console.log("%cmobile : " + mobile, "color:" + color);
        console.log("%cmeail: " + email, "color:" + color);}
else {
    console.log("invalid input!");
}