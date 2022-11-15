// 1. Import hook
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config";
import { useNavigate } from "react-router-dom";

// 2. Create Context / Store
export const AuthContext = createContext();

// 3. Create provider
export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  //   console.log("auth", auth);
  const redirectTo = useNavigate();

  const register = (email, password) => {
    console.log("email :>> ", email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user :>> ", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error :>> ", error);
        // ..
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("user :>> ", user);
        setUser(userCredential.user);
        redirectTo("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", error);
      });
  };
  const logout = () => {
    console.log("loggin out");
  };

  const checkIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("user is logged in ");
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser(null);
        console.log("user is NOT logged in ");
      }
    });
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
