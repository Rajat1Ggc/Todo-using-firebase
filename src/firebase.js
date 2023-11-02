// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDym3sXWuk74FqRFPOefHkwCTMfNU7u5Sk',
  authDomain: 'todo-react-fb-2b178.firebaseapp.com',
  projectId: 'todo-react-fb-2b178',
  storageBucket: 'todo-react-fb-2b178.appspot.com',
  messagingSenderId: '749357208188',
  appId: '1:749357208188:web:581baeff02a99bd85aaff9',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
