import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyA9AH-sQiugX5i4o0BPcV7irXIzTzyBQwc',
    authDomain: 'lasthomework-cs313.firebaseapp.com',
    databaseURL: 'https://lasthomework-cs313.firebaseio.com',
    projectId: 'lasthomework-cs313',
    storageBucket: 'lasthomework-cs313.appspot.com',
    messagingSenderId: '436555485098',
    appId: '1:436555485098:web:783873e2228e590248e5d3',
    measurementId: 'G-VW0RDHD2VR',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
