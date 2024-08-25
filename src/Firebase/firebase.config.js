// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABeBRTFil3QH2T_a9OW9F1kmUiI4q6lJ4",
  authDomain: "react-dragon-news-portal-dc354.firebaseapp.com",
  projectId: "react-dragon-news-portal-dc354",
  storageBucket: "react-dragon-news-portal-dc354.appspot.com",
  messagingSenderId: "297668739909",
  appId: "1:297668739909:web:a8bf66dffb186094ef342c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);