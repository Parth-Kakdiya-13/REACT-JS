import React, { Fragment, useState } from 'react';
import { useFirebase } from './context/userContext'
import Card from './Card'
import classes from './login.module.css';


export const Login = (props) => {

    const firebase = useFirebase();
    // console.log(firebase);

    const [formIsValid, setFormIsValid] = useState(false);

    const [enteredEmail, setEnteredEMail] = useState('');
    const [emailIsValid, setEmailIsVAlid] = useState();
    const [enteredPass, setEnteredPass] = useState('');
    const [passwardIsValid, setpasswardIsValid] = useState();


    const emailChangeHandler = (event) => {
        setEnteredEMail(event.target.value);

        setFormIsValid(
            event.target.value.includes("@") && enteredPass.trim().length > 3
        );
    }

    const passwardChangeHandler = (event) => {
        setEnteredPass(event.target.value);

        setFormIsValid(
            event.target.value.trim().length > 3 && enteredEmail.includes("@")
        );
    }

    const validateEmailHandler = () => {
        setEmailIsVAlid(enteredEmail.includes('@'));
    }

    const validatePasswardHandler = () => {
        setpasswardIsValid(enteredPass.trim().length > 3)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // props.onLogin(enteredEmail, enteredPass);
        firebase.signUpwithEmailaAndPassword(enteredEmail, enteredPass);
        firebase.putData("user/", { enteredEmail, enteredPass })
    }





    return (
        <Fragment>
            <div className={`h-screen mt-10 ${classes.body}`}>
                <span className='fixed top-10 -right-16 animate-spin max-md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 2048 2048"><path fill="gray" d="M1783 988v18q0 9 1 18v18q0 9-1 18l259 161l-159 383l-297-68q-24 26-50 50l68 297l-383 159l-161-259h-18q-9 0-18 1h-18q-9 0-18-1l-161 259l-383-159l68-297q-26-24-50-50l-297 68L6 1221l259-161v-18q0-9-1-18v-18q0-9 1-18L6 827l159-383l297 68q24-26 50-50l-68-297L827 6l161 259h18q9 0 18-1h18q9 0 18 1L1221 6l383 159l-68 297q26 24 50 50l297-68l159 383zm-117 130q2-24 4-47t2-48q0-23-2-47t-4-47l236-147l-86-208l-271 63q-31-38-63-70t-71-64l63-271l-208-86l-148 236q-23-2-47-4t-47-2q-24 0-47 2t-48 4L782 146l-208 86l63 271q-38 31-70 63t-64 71l-271-63l-86 208l236 148q-2 24-4 47t-2 48q0 23 2 47t4 47l-236 147l86 208l271-63q31 38 63 70t71 64l-63 271l208 86l148-236q23 2 47 4t47 2q24 0 47-2t48-4l147 236l208-86l-63-271q38-31 70-63t64-71l271 63l86-208zm-642-470q78 0 146 29t120 81t80 119t30 147q0 78-29 146t-81 120t-119 80t-147 30q-78 0-146-29t-120-81t-80-119t-30-147q0-78 29-146t81-120t119-80t147-30m0 640q55 0 103-20t84-57t56-84t21-103q0-55-20-103t-57-84t-84-56t-103-21q-55 0-103 20t-84 57t-56 84t-21 103q0 55 20 103t57 84t84 56t103 21" /></svg>
                </span>
                <div className='max-w-2xl mx-auto'>
                    <Card>
                        <form className='flex justify-center items-center flex-col' onSubmit={submitHandler}>
                            <div className={`w-auto -bg-slate-200 p-14  rounded-2xl max-[280px]:p-8 max-[370px]:p-10 max-[470px]:p-10 `}>
                                <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
                                    <label htmlFor="email" className="block text-2xl text-black max-[300px]:text-xl">E-mail</label>
                                    <input className="border-2 mt-2 w-96 p-1 max-md:w-80 max-[470px]:w-52 max-[280px]:w-32 max-[280px]:p-0" type="email"
                                        id="email" onChange={emailChangeHandler} onBlur={validateEmailHandler} />
                                </div>
                                <div className={` ${classes.control} ${passwardIsValid === false ? classes.invalid : ''}`}>
                                    <label htmlFor="passward" className="block text-2xl text-black mt-5 max-[300px]:text-xl">Passward</label>
                                    <input className="block border-2 mt-2 w-96 p-1 max-md:w-80 max-[470px]:w-52 max-[280px]:w-32 max-[280px]:p-0" id="passward"
                                        type="password" onChange={passwardChangeHandler} onBlur={validatePasswardHandler} />
                                </div>
                                <a href="/" className="mt-2 hover:text-gray-100 block max-[300px]:font-small ">Forgot Passward</a>
                                <button type="submit"
                                    className={`block shadow-sm mx-auto mt-10 bg-gray-500 text-white px-20 py-3 rounded-3xl max-[280px]:px-10 max-[280px]:mt-2 max-[375px]:mt-5 max-[400px]:px-8 max-[400px]:py-3 ${classes.btn}`}
                                    disabled={!formIsValid}>Login</button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </Fragment>
    )

}
