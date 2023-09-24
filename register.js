window.onload = pageLoad;

function pageLoad() {

}

function validateForm() {
  var firstname = document.forms["myForm"]["firstname"].value;
  var lastname = document.forms["myForm"]["lastname"].value;
  var gender = document.forms["myForm"]["gender"].value;
  var bday = document.forms["myForm"]["bday"].value;
  var email = document.forms["myForm"]["email"].value;
  var username = document.forms["myForm"]["username"].value;
  var password = document.forms["myForm"]["password"].value;
  var retypePassword = document.forms["myForm"]["retypepassword"].value;

  if (firstname === "" || lastname === "" || gender === "" || bday === "" || email === "" || username === "" || password === "" || retypePassword === "") {
    document.getElementById("errormsg").innerHTML = "กรุณากรอกข้อมูลให้ครบทุกช่อง";
    return false;
  }

  if (password !== retypePassword) {
    document.getElementById("errormsg").innerHTML = "รหัสผ่านไม่ตรงกัน";
    return false;
  }

  return true;
}
