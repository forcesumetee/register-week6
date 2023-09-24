window.onload = loginLoad;

function loginLoad() {

}

function checkLogin() {
  var username = document.forms["myLogin"]["username"].value;
  var password = document.forms["myLogin"]["password"].value;

  // ตรวจสอบว่า username และ password ตรงกับที่ลงทะเบียนไว้หรือไม่
  // คุณสามารถเปลี่ยนเงื่อนไขตรวจสอบได้ตามการเก็บข้อมูลของคุณ

  if (username === "username_ที่ลงทะเบียนไว้" && password === "password_ที่ลงทะเบียนไว้") {
    window.location.href = "dashboard.html"; 
    return false;
  } else {
    alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    return false;
  }
}
