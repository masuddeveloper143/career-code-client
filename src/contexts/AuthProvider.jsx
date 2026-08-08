import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { auth } from '../firebase/firebase.init'; // firebase.config থেকে auth ইম্পোর্ট করুন
import axios from 'axios';


const GoogleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {





    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);







    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };




    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };



    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    };


    //  const signInWithGoogle = () => {
    //     setLoading(true);
    //     return signInWithPopup(auth, GoogleProvider)
    // };


    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser?.email) {
                const userData = { email: currentUser.email };
                axios.post('http://localhost:3000/jwt', userData, {
                    withCredentials: true

                })



                    .then(res => {
                        console.log(res.data);

                        localStorage.setItem('token', res.data.token);
                    })

                    .catch(error => {
                        console.log(error);
                    })
            }

            console.log('user in the auth state change', currentUser)
        })

        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;