import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBJRInoXXFVleQ8co4gv-0JnrHQDJGu1DU",
    authDomain: "collectiveknowledge-db6d9.firebaseapp.com",
    databaseURL: "https://collectiveknowledge-db6d9.firebaseio.com",
    projectId: "collectiveknowledge-db6d9",
    storageBucket: "collectiveknowledge-db6d9.appspot.com",
    messagingSenderId: "761934133409"
};
var fire = firebase.initializeApp(config);
export default fire;