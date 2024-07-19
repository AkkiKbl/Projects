// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPQTWoS2Rc7Py3_gWV14IS8EmJdrJ5NQI",
  authDomain: "eduscribe-college.firebaseapp.com",
  projectId: "eduscribe-college",
  storageBucket: "eduscribe-college.appspot.com",
  messagingSenderId: "876768472440",
  appId: "1:876768472440:web:28b6c201f88c4033346c8d",
};

const app = initializeApp(firebaseConfig);

// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

export const storage = getStorage(app, "gs://eduscribe-college.appspot.com");

export const db = getFirestore(app);
