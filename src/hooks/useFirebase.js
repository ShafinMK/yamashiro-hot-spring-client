
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../firebase/firebase.initializeAuth";


initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInwithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);

            }).catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage);


            });

    };
    const signUpwithEmailandPass = (email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // Email verification sent!
                        // ...
                    });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    }
    // signing in with email  and password 
    const signInWithEmailandPass = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);
                console.log(user);
            }
            else {
                console.log('user logged out');
            }
        })
    }, []);


    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('signed out');
            setUser({});
        }).catch((error) => {
            setError(error.message)
        });
    }

    return { user, error, signInwithGoogle, signUpwithEmailandPass, logOut, signInWithEmailandPass };

}

export default useFirebase;

