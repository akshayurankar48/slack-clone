import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAFojunDV2ZEiI-ib5t3-278nXqsaCSe2o",
  authDomain: "slack-clone-yt-abbf8.firebaseapp.com",
  projectId: "slack-clone-yt-abbf8",
  storageBucket: "slack-clone-yt-abbf8.appspot.com",
  messagingSenderId: "241479700434",
  appId: "1:241479700434:web:965646ce74dcee7318420b",
  measurementId: "G-WVRYMXQTSS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
