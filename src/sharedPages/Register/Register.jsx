import React from 'react';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import Header from '../Header/Header';

const Register = () => {
    return (
        <div className='register-container'>
            <BackgroundImage></BackgroundImage>
            <div className="register-sub-container">
                <Header></Header>
                <div className="register-content">
                    <h1>Unlimited Movies, TV showes, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime</h2>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <form>
                        <div>
                            <input type="email" placeholder='email address' />
                            <input type="password" placeholder='enter password' />
                            <button>Get Started</button>
                        </div>
                        <button>sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;