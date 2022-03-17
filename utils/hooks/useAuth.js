import React, { useState, useEffect, useContext, createContext } from "react";
import { login, signUp } from "../helpers/auth/index"
import { adminlogin, adminsignUp } from "../helpers/admin-auth/index"
// Add your Firebase credentials


const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(false)
    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const signin = (email, password) => {
        const data = {
            email: email,
            password: password
        }
        return login(data)
            .then((response) => {
                setUser(response.data.data);
                console.log(response.data.data)
                localStorage.setItem("user", JSON.stringify(response.data.data))
                return response.data.data;
            });
    };
    const signup = (email, password) => {
        const data = {
            email: email,
            password: password
        }

        return signUp(data)
            .then((response) => {
                setUser(response.data);
                localStorage.setItem("user", response.data.data)
                return response.data;
            });
    };
    const signout = () => {
        setUser(false);
        localStorage.setItem("admin", false)
        localStorage.setItem("user", "")
    };
    const adminsignin = (email, password) => {
        const data = {
            email: email,
            password: password
        }
        return adminlogin(data)
            .then((response) => {
                setUser(response.data.data);
                setAdmin(true)
                localStorage.setItem("admin", true)
                localStorage.setItem("user", JSON.stringify(response.data.data))
                console.log(response.data)
                return response.data.data;
            });
    };
    const adminsignup = (email, password) => {
        const data = {
            email: email,
            password: password
        }

        return adminsignUp(data)
            .then((response) => {
                setUser(response.data);
                localStorage.setItem("user", response.data)
                localStorage.setItem("admin", true)
                setAdmin(true)
                return response.data;
            });
    };

    // const sendPasswordResetEmail = (email) => {
    //     return firebase
    //         .auth()
    //         .sendPasswordResetEmail(email)
    //         .then(() => {
    //             return true;
    //         });
    // };
    // const confirmPasswordReset = (code, password) => {
    //     return firebase
    //         .auth()
    //         .confirmPasswordReset(code, password)
    //         .then(() => {
    //             return true;
    //         });
    // };
    // // Subscribe to user on mount
    // // Because this sets state in the callback it will cause any ...
    // // ... component that utilizes this hook to re-render with the ...
    // // ... latest auth object.
    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(localStorage.getItem('user'))
            if (localStorage.getItem("admin")) {
                setUser(localStorage.getItem("admin"))
            }
        }
    }, []);
    // Return the user object and auth methods
    return {
        user,
        admin,
        signin,
        signup,
        signout,
        adminsignin,
        adminsignup
        // sendPasswordResetEmail,
        // confirmPasswordReset,
    };
}