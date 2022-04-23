import firebase from 'firebase'
import "firebase/storage"
import 'firebase/auth'
import { useEffect, useState, useContext, createContext } from 'react'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAcHktdD9ySk59u6McmdJ43mw0NFoOwZ5o",
  authDomain: "raport-824ba.firebaseapp.com",
  databaseURL: "https://raport-824ba-default-rtdb.firebaseio.com",
  projectId: "raport-824ba",
  storageBucket: "raport-824ba.appspot.com",
  messagingSenderId: "540249430446",
  appId: "1:540249430446:web:53a0dbc109557e840e903f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const AuthContext = createContext()

export const AuthContextProvider = props =>{
  const [user, setuser] = useState()
  const [error, setError] = useState()
  const auth1 = firebase.auth();
  useEffect(() =>{
    const unsubscribe = auth1.onAuthStateChanged(firebase.auth(), setuser, setError)
    return () => unsubscribe()
  },[])
  return<AuthContext.Provider value={{user, error}} {...props} />
}

export const useAuthState = () =>{
  const auth= useContext(AuthContext)
  return{...auth, isAuthenticated: auth.user !=null}
}