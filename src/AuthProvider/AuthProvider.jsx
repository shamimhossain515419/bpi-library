
"use client"
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../../firebase/firebase.config";

export const GlobalContext = createContext(null);
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const createUser = async (email, password) => {
        setLoading(true)
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateUserProfile(auth.currentUser, { displayName: name, photoURL: photo });
    };

    const userCullaction = async (email) => {
        const result = await GetSingleUser(email);
        const data = result?.data;
        console.log(
            data
        );
        setUserinfo(data)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);


    }

    const logOutUser = async () => {
        setLoading(true)
        return await signOut(auth);
    }

    const googleSignIn = async () => {
        const data = await signInWithPopup(auth, googleProvider);
        return data;
    }
    //

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);

            }
            console.log('current User: ', currentUser)

        })
        return () => {
            return unsubscribe();
        };



    }, [])




    const stateInfo = {
        user, loading,
        logOutUser,
        googleSignIn,
        loginUser,
        userCullaction,
        createUser

    }

    return (
        <GlobalContext.Provider value={stateInfo}>
            {children}
        </GlobalContext.Provider>
    );
};

export default AuthProvider;