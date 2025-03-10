// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  // signOut,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw0xg3NVs6qoS6RYr64er6Em9MG-DTy7c",
  authDomain: "flushy-website.firebaseapp.com",
  databaseURL: "https://flushy-website-default-rtdb.firebaseio.com",
  projectId: "flushy-website",
  storageBucket: "flushy-website.appspot.com",
  messagingSenderId: "604068868575",
  appId: "1:604068868575:web:f9f66bce716a8a6970d46a",
  measurementId: "G-BQ3XH5KJBK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Initializing our database
const auth = getAuth(); // Initiaizing auth
// ================================ Logging in with an EXISTING user/pw ================================

login.addEventListener("click", (e) => {
  console.log("Button clicked");
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      // Updating the database with the data last logged in
      const dt = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: dt,
      });

      alert("User logged in!");
      window.location.href = "../../index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("e_msg").innerHTML = error.message
    });
});


