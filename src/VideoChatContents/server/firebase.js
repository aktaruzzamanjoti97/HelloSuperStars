import firebase from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyD3xegugXiXeX1W2MTdDorwq-wM4fR25cA", // Add API Key
//   databaseURL:"https://meetcloneapp-default-rtdb.asia-southeast1.firebasedatabase.app/" // Add databaseURL
// };

var firebaseConfig = {
  apiKey: "AIzaSyBO1__jCxGrPE8RrfP8i1JTkwRNvkcS4E0", // Add API Key
  databaseURL:
    "https://hellosup-62016-default-rtdb.asia-southeast1.firebasedatabase.app/", // Add databaseURL
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

//export const userName = prompt("What's your name?");
export const userName = 'user';
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  //window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
