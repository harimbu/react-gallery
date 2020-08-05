import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCz1PAPGNMTfBRaD3aC_2exOs0AjrhI0dU',
    authDomain: 'react-gallery-eef54.firebaseapp.com',
    databaseURL: 'https://react-gallery-eef54.firebaseio.com',
    projectId: 'react-gallery-eef54',
    storageBucket: 'react-gallery-eef54.appspot.com',
    messagingSenderId: '122622001435',
    appId: '1:122622001435:web:78b83485d325098a03d3be'
};

const fire = firebase.initializeApp(firebaseConfig);

const db = fire.firestore();
const storage = fire.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, storage, timestamp };
