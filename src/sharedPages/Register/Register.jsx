import React, { useEffect, useState } from 'react';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import Header from '../Header/Header';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth'
import app from '../../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
const auth = getAuth(app)
const Register = () => {
    const [showInput, setShwoInput] = useState(true)
    const [signUpValue, setSignUPValue] =  useState({
        email: '',
        password:''
    })
    const navigate = useNavigate()
    const handleRegister = async(event) =>{
        event.preventDefault()
        try{
            const {email, password} = signUpValue
            console.log(email, password)
            await createUserWithEmailAndPassword(auth, email, password)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() =>{
        onAuthStateChanged(auth, (user) =>{
            if(user){
                navigate('/')
            }
        })
    } ,[])
    return (
        <div className='register-container'>
            <BackgroundImage></BackgroundImage>
            <div className="register-sub-container">
                <Header></Header>
                <div className="register-content">
                    <div>
                        <h1>Unlimited Movies, TV showes, and more.</h1>
                        <h2>Watch anywhere. Cancel anytime</h2>
                        <p className='text'>Ready to watch? Enter your email to create or restart your membership.</p>
                        <form>
                            <div className={`${!showInput ? 'hidden' : 'form-container'}`}>
                                <input 
                                name='email'
                                type="email" 
                                placeholder='email address' 
                                value={signUpValue.email} 
                                onChange={(e) => setSignUPValue({
                                    ...signUpValue,
                                    [e.target.name]: e.target.value
                                })}
                                />
                                {
                                    !showInput ?
                                    <input 
                                    name='password' 
                                    type="password" 
                                    placeholder='enter password' 
                                    value={signUpValue.password}
                                    onChange={(e) => setSignUPValue({
                                        ...signUpValue,
                                        [e.target.name]: e.target.value
                                    })}
                                    />
                                    :
                                    <button onClick={() => setShwoInput(false)}>Get Started</button>
                                }
                            </div>
                            <button onClick={handleRegister} style={{marginTop: '10px'}}>sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;