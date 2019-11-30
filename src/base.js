import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

//firebaseApp
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyATjdj4LWwKO3BLGfsgHIPA-2sNAJYmcYk",
  authDomain: "catch-of-the-day-poonnakarn.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-poonnakarn.firebaseio.com"
});

//rebase binding
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
