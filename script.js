const firstname = document.getElementsByName("first name")[0];
const lastname = document.getElementsByName("last name")[0];
const DOB = document.getElementsByName("dob")[0];
const phone = document.getElementsByName("phone")[0];
const password = document.getElementsByName("password")[0];
const email = document.getElementsByName("email")[0];

const gender = document.getElementsByName("gender")
const checkbox = document.getElementsByName("checkbox")
const submit = document.getElementById("submit")

 submit.addEventListener("click",function(e){
    e.preventDefault();

const genderArray =Array.from(gender)
const genderchecked= genderArray.map((item) =>{
    if( item.checked)
    return item.value
})
const checkboxArray =Array.from(checkbox)
const checkboxchecked= checkboxArray.map((item) =>{
    if( item.checked)
    return item.value
})
const obj = {
    "firstname" :firstname.value,
    "lastname" :lastname.value,
    "DOB" :DOB.value,
    "phone" :phone.value,
    "password" :password.value,
    "email" :email.value,
    "gender" :genderchecked,
    "checkbox" :checkboxchecked,


}
console.log(obj);
 });