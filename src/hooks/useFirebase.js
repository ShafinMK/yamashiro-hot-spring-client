
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import initializeAuth from "../firebase/firebase.initializeAuth";


initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInwithGoogle = () => {
        // signInWithPopup(auth, googleProvider)
        //     .then((result) => {
        //         const user = result.user;
        //         setUser(user);
        //         console.log(user);
        //     })
        //     .catch((error) => {

        //         const errorMessage = error.message;
        //         setError(errorMessage);


        //     })
        //     .finally(() =>{setLoading(false)});
           return signInWithPopup(auth, googleProvider);

    };

    const emailVerification=()=>{
       return sendEmailVerification(auth.currentUser);
        // .then(() => {
        //     // Email verification sent!
        //     // ...

        // });
    };
    const signUpwithEmailandPass = (email, password) => {
        console.log(email, password);
        return createUserWithEmailAndPassword(auth, email, password);
            // .then((result) => {
            //     // Signed in 
            //     setUser(result.user);    
            // })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     console.log(errorMessage);
            //     // ..
            // })
            // .finally(() =>{setLoading(false)})
    }
    // signing in with email  and password 
    const signInWithEmailandPass = (email, password) => {
        // signInWithEmailAndPassword(auth, email, password)
        //     .then((result) => {
        //         setUser(result.user);

        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         setError(errorMessage);
        //     })
        //     .finally(() =>{setLoading(false)});
            return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);

                // console.log(user);
            }
            else {
                console.log('user logged out');

            }
            setLoading(false);
        })
    }, []);


    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('signed out');
            setUser({});
            navigate('/home');

        }).catch((error) => {
            setError(error.message)
        })
        .finally(() =>{setLoading(false)})
    }

    return { user, error, loading,setError, signInwithGoogle, signUpwithEmailandPass, logOut, signInWithEmailandPass, emailVerification };

}

export default useFirebase;

