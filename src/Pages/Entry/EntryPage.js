import React, {useState} from 'react'

import {Jumbotron} from 'react-bootstrap';
import {LoginForm} from '../../Components/Login/loginComponent';
import {ResetPassword} from '../../Components/ResetPassword/passwordReset'

import './entrypage.css';


export const Entry = () => {
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [formLoad, setFormLoad]=useState("login");

    const handleOnchange=e=>{
        const{name, value}=e.target;
        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                    setPassword(value);
                    break;
            default:
                break;
            
        }
    };
const handleOnSubmit=e=>{
    e.preventDefault()
    //do some more validations if you have time
    if(!email || !password){
       return alert("Please fill email and password");
    }
    //call api to submit the form in future
};
const handleOnResetSubmit=e=>{
    e.preventDefault()
    //do some more validations if you have time
    if(!email){
       return alert("Please fill the email");
    }
    //call api to submit the form in future
};
const formSwitcher=formType=>{
    setFormLoad(formType);
};

    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                {formLoad==='login' && (
                <LoginForm handleOnchange={handleOnchange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                email={email}
                pass={password}
                />
                )}
                {formLoad==='reset' && (
                <ResetPassword handleOnchange={handleOnchange}
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
                email={email}
                />
                ) }
            </Jumbotron>
        </div>
    )
}
