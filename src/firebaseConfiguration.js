// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgc5o2uxOCyBVir3vHf70aeVARvVLdk70",
  authDomain: "nostagain.firebaseapp.com",
  projectId: "nostagain",
  storageBucket: "nostagain.appspot.com",
  messagingSenderId: "6583486269",
  appId: "1:6583486269:web:df811fabeda26e8940e754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;