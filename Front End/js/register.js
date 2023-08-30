const firstName = document.getElementById("txtFName");
const lastName = document.getElementById("txtLName");
const userName = document.getElementById("txtUserName");
const password = document.getElementById("txtPassword");
const email = document.getElementById("txtEmail");
const age = document.getElementById("txtAge");
const address = document.getElementById("txtAddress");
const phoneNumber = document.getElementById("txtPhone");
const gender = document.getElementsByName("gender");
const btnRegister = document.getElementById("buttonRegister");

btnRegister.addEventListener("click",()=>{
    let selectGender;
    for(i =0; i<gender.length; i++){
        if(gender[i].checked){
            selectGender=gender[i].value;
        }
    }

    let student = {
        "firstName" : firstName.value,
        "lastName" : lastName.value,
        "userName" : userName.value,
        "password" : password.value,
        "emailAddress" : email.value,
        "age" : age.value,
        "address" : address.value,
        "phoneNumber" : phoneNumber.value,
        "gender" : selectGender
    }

    fetch('http://localhost:8080/student',{
        method: 'POST',
        headers: {
            'Content-type':'application/json' 
        },
        body: JSON.stringify(student)
    })
    .then(response => response.json())
    

})