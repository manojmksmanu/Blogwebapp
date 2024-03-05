
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBNbMj_iIkQCF3I9cpeCpCz3iq8EkiZRlU",
  authDomain: "react-blogs-app-d8554.firebaseapp.com",
  projectId: "react-blogs-app-d8554",
  storageBucket: "react-blogs-app-d8554.appspot.com",
  messagingSenderId: "132969845642",
  appId: "1:132969845642:web:52fba86e320fdaf87aae73"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };