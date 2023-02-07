import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB80ovBg4ViOMipNfuEp4t1fsk6bmFoJk",
  authDomain: "ecommercecoder-1ab2b.firebaseapp.com",
  projectId: "ecommercecoder-1ab2b",
  storageBucket: "ecommercecoder-1ab2b.appspot.com",
  messagingSenderId: "77441539667",
  appId: "1:77441539667:web:a2765a3c603955ec62b0a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

