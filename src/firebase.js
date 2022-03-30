
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDUWUud9AKRNCM5ke_La78mTF6tnCPL0gE",
  authDomain: "estacion-otaku-r.firebaseapp.com",
  projectId: "estacion-otaku-r",
  storageBucket: "estacion-otaku-r.appspot.com",
  messagingSenderId: "55515239524",
  appId: "1:55515239524:web:3a2c01589d755304367b71",
  measurementId: "G-ESMSXTN4HE"
};

// Initialize Firebase
// const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
