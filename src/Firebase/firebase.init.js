// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVuAXTeZAxC5Bmw1Sk43cVzpv40N7K1Os",
  authDomain: "homeland-properties-b6744.firebaseapp.com",
  projectId: "homeland-properties-b6744",
  storageBucket: "homeland-properties-b6744.appspot.com",
  messagingSenderId: "842617609791",
  appId: "1:842617609791:web:d253126355a19b4730628a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
