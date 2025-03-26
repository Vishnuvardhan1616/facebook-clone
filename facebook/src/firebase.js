import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (replace this with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyCWUxEmcujXBJviHhmnjwdll9_pXieT0ho",
  authDomain: "facebook-17bfc.firebaseapp.com",
  projectId: "facebook-17bfc",
  storageBucket: "facebook-17bfc.appspot.com", // ✅ Fixed this line
  messagingSenderId: "89858013684",
  appId: "1:89858013684:web:1d489b6f56ceac252a61a1",
  measurementId: "G-PDC3KYFRBW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
