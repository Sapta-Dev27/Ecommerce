import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDlQH5R9Od73bQjjgr1ta3VyDxuGf08hk",
  authDomain: "shoponline-884be.firebaseapp.com",
  projectId: "shoponline-884be",
  storageBucket: "shoponline-884be.firebasestorage.app",
  messagingSenderId: "671135716970",
  appId: "1:671135716970:web:6f6a2493fe0b59025d9c13",
  measurementId: "G-JC3GSX2LNZ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();

export default auth;