import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
import {toastSuccessNotify} from "./toastNotify"

  



const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};



const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
export const createUser = async (email, password,navigate) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        // displayName: displayName,
      });
      navigate("/");
      toastSuccessNotify("registration succesfull")
    } catch (err) {
      alert(err.message);
    }
  };

  export const signIn = async (email, password, navigate) => {
    try {
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      toastSuccessNotify("log in succesfull")
    } catch (err) {
      alert(err.message);
    }
  };
  
  export const logOut = () => {
    signOut(auth);
    toastSuccessNotify("log out succesfull");
  };
  
  export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
        // ...
      } else {
        setCurrentUser(false);
      }
    });
  };
  
  export const signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        toastSuccessNotify("log in succesfull");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        
      });
  };






export default firebase;
