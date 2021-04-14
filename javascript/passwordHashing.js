var encrypted = CryptoJS.AES.encrypt("ทดสอบข้อความ", "Secret");
var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret");



let hash1 = CryptoJS.MD5("Message");

let encryptPassword = (password) => {
	let encryption = "";
  let passCrypt = CryptoJS.MD5(password).toString();
  let salt = CryptoJS.lib.WordArray.random(128/8).toString();
  let fullEncrypt = CryptoJS.MD5(passCrypt + salt).toString();
  
  return [fullEncrypt, salt];

}

let checkPassword = (password, salt, actualPassword) => {
		let ePass = CryptoJS.MD5(password).toString();
    let idea = CryptoJS.MD5(ePass + salt).toString();
    
    return idea === actualPassword;
}

let myPassword = "cookies";
let myPasswordEncrypted = encryptPassword(myPassword);
let results = checkPassword(myPassword, myPasswordEncrypted[0], myPasswordEncrypted[1]);


document.getElementById('demo1').innerHTML = "password: " + myPassword;
document.getElementById('demo2').innerHTML = "encrypted:" + myPasswordEncrypted[0];
document.getElementById('demo2').innerHTML = typeof myPasswordEncrypted[0];
document.getElementById('demo2').innerHTML = "same:" + results;
