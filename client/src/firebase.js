import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "clone-64f60.firebaseapp.com",
  projectId: "clone-64f60",
  storageBucket: "clone-64f60.appspot.com",
  messagingSenderId: "827564046821",
  appId: "1:827564046821:web:74fd5ce5ea9545ac0cd70c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
