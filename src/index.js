import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getDatabase, child, get, set, update, remove }from "firebase/database";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "alpacaimagegenerator.firebaseapp.com",
  projectId: "alpacaimagegenerator",
  storageBucket: "alpacaimagegenerator.appspot.com",
  messagingSenderId: "101809980057",
  appId: "1:101809980057:web:b5372104ab489e01b46e08"
};

// Initialize Firebase
const cong = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(cong);
export default { cong, storage }; 