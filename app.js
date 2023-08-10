//! Kullanıcının butona tıkladığında çalışacak olan fonksiyonu tanımlıyoruz. Bu fonksiyon, şifre uzunluğunu alacak, rastgele bir şifre oluşturacak ve oluşturulan şifreyi sayfada gösterecektir.

//  document.getElementById("generateButton"): HTML'de "generateButton" id'sine sahip bir elementi seçer (bu durumda bir buton).
// .addEventListener("click", function () { ... });: Seçilen elemente tıklama olayı eklendiğinde çalışacak işlevi tanımlar. İşlev, butona tıklandığında gerçekleştirilecek eylemleri içerir.
// const passwordLength = parseInt(...): Kullanıcının girdiği şifre uzunluğunu alır ve metin türünden sayısal bir türe (integer) dönüştürür.
// generatePassword(passwordLength): Şifre uzunluğunu alarak generatePassword fonksiyonunu çağırır ve rastgele bir şifre oluşturur.
// document.getElementById("generatedPassword").textContent = generatedPassword;: Oluşturulan şifreyi sayfada göstermek için "generatedPassword" id'sine sahip bir elementin metin içeriğini oluşturulan şifre ile günceller.

document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const passwordLength = parseInt(
      document.getElementById("passwordLength").value
    );
    const generatedPassword = generatePassword(passwordLength);
    document.getElementById("generatedPassword").textContent =
      generatedPassword;
  });
// ********************************************************************

//! ilk olarak generatePassword adlı arrow function ile şifre oluşturma işlevini tanımlıyoruz:

const generatePassword = (length) => {
  // Farklı karakter kümelerini tanımlıyoruz

  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let password = "";

  // 3 rastgele rakam üretiyoruz

  for (let i = 0; i < 3; i++) {
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }

  // 2 rastgele sembol üretiyoruz

  for (let i = 0; i < 2; i++) {
    password += symbols[Math.floor(Math.random() * symbols.length)];
  }

  // 1 rastgele küçük harf ekliyoruz
  password += lowercase[Math.floor(Math.random() * lowercase.length)];

  // 1 rastgele büyük harf ekliyoruz
  password += uppercase[Math.floor(Math.random() * uppercase.length)];

  // Geri kalan karakterleri oluşturuyoruz
  for (let i = password.length; i < length; i++) {
    const randomCategory = Math.floor(Math.random() * 3); // 0, 1, veya 2
    if (randomCategory === 0) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    } else if (randomCategory === 1) {
      password += symbols[Math.floor(Math.random() * symbols.length)];
    } else {
      password += lowercase[Math.floor(Math.random() * lowercase.length)];
    }
  }

  //!Karakterleri karıştırarak rastgelelik sağlıyoruz
  //? bu birinci yol

  //   password = password
  //     .split("")
  //     .sort(() => Math.random() - 0.5)
  //     .join("");

  //?ikinci yol

  password = shuffleString(password);

  return password;
};

const shuffleString = (str) => {
  const array = str.split(""); // Şifreyi karakter dizisine dönüştürüyoruz
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Karakterleri yer değiştiriyoruz
  }
  return array.join(""); // Karakter dizisini tekrar şifre haline dönüştürüyoruz
};

// Oluşturulan şifreyi döndürüyoruz
