import React, { useState } from 'react'
import axios from 'axios';
import './Login.css'
//The login page to login in the website not working we can just add email and password and submit but we are not storing our data anywhere as of now

const Login = (props) => {
    const [email, setemail] = useState(''); // a state variable to store the email and set the email to the input value using useState
    const [pass, setpass] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the data that the user inputs from loosing while refreshing the page 
        setError('');
        // Perform validation
        if (!email || !pass) {
            setError('Please enter both email and password.');
            return;
        }

        // fetch method
        // try {
        //     const response = await fetch('/api/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ email, password }),
        //     });

        //     if (!response.ok) {
        //         throw new Error('Invalid email or password.');
        //     }

        //axios fetch


        // try {
        //     // write async as const handleSubmit = async (e) =>
        //     const response = await axios.post('/api/login', {
        //       email,
        //       password,
        //     });

        //     if (response.status === 200) {
        //       // Authentication successful
        //       alert('Login successful!');
        //       setEmail('');
        //       setPassword('');
        //     } else {
        //       throw new Error('Invalid email or password.');
        //     }
        //   } catch (error) {
        //     // Authentication failed
        //     setError(error.message);
        //   }


        if (email === 'user@example.com' && pass === 'password') {
            // Authentication successful
            alert('Login successful!');
            setemail('');
            setpass('');
        } else {
            // Authentication failed
            setError('Invalid email or password.');
        }
        // setemail(''); //setting email empty after submission (clearing the input form)
        // setpass('');
    }

    return (
        <>
            <div className='login-container'>
                <div className='login-form'>
                    <form className='login-content' onSubmit={handleSubmit}>
                        <div className="login-page">
                            <div className='text-center'>
                                <h3 className='login-title'> Login</h3>
                            </div>
                            <label htmlFor="exampleInputEmail1" className='py-2'>Email address</label>
                            <input value={email} onChange={(e) => { setemail(e.target.value) }} type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <label htmlFor="exampleInputPassword1" className="py-2">Password</label>
                            <input value={pass} onChange={(e) => { setpass(e.target.value) }} type="password" id="exampleInputPassword1" placeholder="Password" />
                            {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}

                            <button type="submit" className='login-button'>Log In</button>

                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className='text-center text-dark mb-3 btn' onClick={() => props.formSwitch('register')}>
                                Don't have an account? <span style={{ color: " #7a55ff" }} className='mx-1'>Register here</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
