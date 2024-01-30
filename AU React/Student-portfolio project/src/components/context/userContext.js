import { createContext, useContext } from "react";
import { app } from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, set, ref } from 'firebase/database'

export const userContext = createContext(null);
const auth = getAuth(app);
const database = getDatabase(app);
export const useFirebase = () => useContext(userContext);
export const ContextProvider = (props) => {

    const signUpwithEmailaAndPassword = (email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
    }


    const putData = (key, data) => set(ref(database, key), data);

    return <userContext.Provider value={{ signUpwithEmailaAndPassword, putData }}>
        {props.children}
    </userContext.Provider>
}