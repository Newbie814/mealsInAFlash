/* eslint-disable prettier/prettier */
import firebase from 'firebase';

const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
