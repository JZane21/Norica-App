import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZq76UZIrjhA1z6OGZuwxqyTOxW3jbk1Y",
  authDomain: "dpica-app.firebaseapp.com",
  projectId: "dpica-app",
  storageBucket: "dpica-app.appspot.com",
  messagingSenderId: "441096894984",
  appId: "1:441096894984:web:bbff5320090380cb8f6fbd",
  measurementId: "G-PL32BPCTG9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const passwordReset = async (email:string) => {
  await sendPasswordResetEmail(auth,email).then(() => {
    alert(`Se envió al email: ${email} los pasos para recuperar su contraseña`);
  }).catch((err) => {
    alert("Usuario inexistente");
    console.error(err);
  });
};
