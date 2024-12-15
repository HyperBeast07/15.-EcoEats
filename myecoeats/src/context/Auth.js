/*

*/

import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

// this hook "useContext" is creating a box to store some data (to be shared to other components)
// this will hold state (like auth data and functions like)
export const AuthContext = createContext();

// "children" refers to the component u are trying to use this box, for example <Header>, <Shop>
// this is a context provider component, which will wrap any part of the app that needs access to the auth context
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true);

        onAuthStateChanged(auth, (user) => {

            // user object by this "onAuthStateChanged" will have 2 possibilities
            // logged in --> user object --> set the "user" state to the user object
            setUser(user)
            setLoading(false)
        })
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading
    }

    // AuthContext.Provider --> this context provider makes the auth state and the functions available to any component
    // wrapped by <AuthProvider>
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}

export default AuthProvider;