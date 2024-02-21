// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWSmkoQkF59YRZbdZHttQpI5icApa7MNo",
    authDomain: "markets-agent.firebaseapp.com",
    projectId: "markets-agent",
    storageBucket: "markets-agent.appspot.com",
    messagingSenderId: "964789920127",
    appId: "1:964789920127:web:7b3a3b6db531a9f5cffa4a",
    measurementId: "G-4KFP50HCJ9",
    // TODO change this to be your Firebase realtime database url
    databaseUrl: "https://markets-agent-default-rtdb.europe-west1.firebasedatabase.app/"
};

// initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// initialize database
const database = getDatabase(app);