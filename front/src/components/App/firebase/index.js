import firebase from 'firebase/app';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyC5LXRhTDpzCBNjAbKVX9FTXQI1uQdGTkI',
  authDomain: 'adopte-ton-choupi.firebaseapp.com',
  projectId: 'adopte-ton-choupi',
  storageBucket: 'adopte-ton-choupi.appspot.com',
  messagingSenderId: '671305623709',
  appId: '1:671305623709:web:9bc280c179818409804c74',
};

firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
