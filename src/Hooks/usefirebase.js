import { useEffect, useState } from "react"
import initAuthentication from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signOut } from "firebase/auth";


initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
 
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

 // Google LogIN
    const googleSignIn = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            setError('')
        })
        .catch( error => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false))
    }

 // Email Password registration
    const handleRegister = (e) => {
        e.preventDefault();
        setIsLoading(true)
        if(password.length < 6){
            setError('Password should be at least 6 characters')
            return;
        }
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            verifyEmail();
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false))
    }

 // Email password Login
    const handleLogIn = (e) => {
        e.preventDefault();
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            setError('')
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false))
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
   

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    } , [])

  // Logout
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {

        })
        .finally(() => setIsLoading(false))
        setUser({})
    }

  // Email verification
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => {

        })
    }

  // Password verification
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {

        })
        .catch(error => {
            setError(error.message)
        })
    }

    return {
        user,
        error,
        googleSignIn,
        isLoading,
        handleEmailChange,
        handlePasswordChange,
        handleRegister,
        handleLogIn,
        resetPassword,
        logOut
    }
}

export default useFirebase;