import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlcufdCtvYti9nwbq_7sQaSS-4pHYdkYk",
  authDomain: "autenticacion-pawpam.firebaseapp.com",
  projectId: "autenticacion-pawpam",
  storageBucket: "autenticacion-pawpam.firebasestorage.app",
  messagingSenderId: "475173604447",
  appId: "1:475173604447:web:75089ccc53ccb4ab8ddfea",
  measurementId: "G-Y15WN51RJW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


