
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
authDomain: "interview-ai-b1b29.firebaseapp.com",
  projectId: "interview-ai-b1b29",
  storageBucket: "interview-ai-b1b29.firebasestorage.app",
  messagingSenderId: "508461746247",
  appId: "1:508461746247:web:cc377302768029f6f60962"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}