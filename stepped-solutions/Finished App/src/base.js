import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB5de25xoSuB7wlAuVciokwCeTxWx4QFW4",
  authDomain: "react-catchoftheday-wesbos.firebaseapp.com",
  databaseURL: "https://react-catchoftheday-wesbos.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
