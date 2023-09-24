// ฟังก์ชันตรวจสอบการเข้าสู่ระบบ
function validateLogin() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    console.log("Username: " + username);
    console.log("Password: " + password);

    // เปรียบเทียบ Username และ Password ที่กรอกในหน้า Login
    // กับ Username และ Password ที่ถูกต้องที่ถูกเก็บไว้ในตัวแปร global ในหน้า Register

    if (username !== registeredUsername || password !== registeredPassword) {
        alert("Username หรือ Password ไม่ถูกต้อง");
        return false;
    }

    // หาก Username และ Password ถูกต้อง คุณสามารถเขียนโค้ดเพิ่มเติม
    // เช่น ไปยังหน้าสำเร็จหรือทำงานเพิ่มเติมตามที่คุณต้องการ

    return true;
}
