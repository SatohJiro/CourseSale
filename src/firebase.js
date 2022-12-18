// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBObugzX6wS2OEt0Q10TOCZkMDCAWjtcrg",
  authDomain: "tmdt-c2417.firebaseapp.com",
  projectId: "tmdt-c2417",
  storageBucket: "tmdt-c2417.appspot.com",
  messagingSenderId: "850340064511",
  appId: "1:850340064511:web:18781a02f032db8d00f0ca",
  measurementId: "G-13Q8DFSZNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);