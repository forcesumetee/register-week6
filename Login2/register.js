
var registeredUsername = "";
var registeredPassword = "";


function validatePassword() {
    var password = document.forms["myForm"]["password"].value;
    var confirmPassword = document.forms["myForm"]["retype-password"].value;

    if (password !== confirmPassword) {
        alert("รหัสผ่านไม่ตรงกัน");
        return false;
    }

    return true;
}


function validateForm() {
    var firstName = document.forms["myForm"]["first-name"].value;
    var lastName = document.forms["myForm"]["last-name"].value;
    var gender = document.forms["myForm"]["gender"].value;
    var birthday = document.forms["myForm"]["birthday"].value;
    var email = document.forms["myForm"]["email"].value;
    var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;
    var confirmPassword = document.forms["myForm"]["retype-password"].value;
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Gender: " + gender);
    console.log("Birthday: " + birthday);
    console.log("Email: " + email);
    console.log("Username: " + username);
    console.log("Password: " + password);

    if (!validatePassword()) {
        return false;
    }

   
    registeredUsername = username;
    registeredPassword = password;


    return true;
}
