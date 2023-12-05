import React, { useState } from 'react'
import Validate from './Validate';
import axios from 'axios';

const Register = (props) => {

    const inputValues = [{
        name: "name",
        id: '0',
        label: "Full Name",
        type: "text",
        placeholder: "Enter full name"
    }, {
        id: '1',
        name: "email",
        label: "Email",
        type: "text",
        placeholder: "Enter email"
    }, {
        id: '2',
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter password"
    }, {
        id: '3',
        name: "confirmpassword",
        label: "Confirm Password",
        type: "password",
        placeholder: "Enter confirm password"
    }]

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    const [errors, setErrors] = useState({});
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(Validate(values))
        // posting data in the backend
        try {
            if (Object.keys(errors).length === 0) {
                const response = await axios.post('/api/register', {
                    name: values.name,
                    email: values.email,
                    password: values.password
                });

                if (response.status === 200) {
                    // Registration successful
                    alert('Registration successful!');
                    setValues({
                        name: '',
                        email: '',
                        password: '',
                        confirmpassword: ''
                    });
                } else {
                    throw new Error('Registration failed.');
                }
            }
        } catch (error) {
            // Registration failed
            console.log(error);
            // Handle the error or display an error message
        }
    }
    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    return (

        <>
            <div className='login-container'>
                <div className='login-form'>
                    <form className='login-content' onSubmit={handleSubmit}>
                        <div className="login-page">
                            <div>
                                <h3 className='text-center login-title'> Register</h3>
                            </div>

                            {
                                inputValues.map((element) => {
                                    return (
                                        <>
                                            <label className='py-2'>{element.label}</label>
                                            <input value={values[element.name]} onChange={handleInput} name={element.name} type={element.type} placeholder={element.placeholder} />
                                            {errors && <small style={{ color: "red" }}>{errors[element.name]}</small>}
                                        </>

                                    )
                                })
                            }

                            <button type="submit" className="login-button">Register</button>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button onClick={() => props.formSwitch('login')} className='text-center text-dark mb-3 btn'>
                                Already have an account? <span style={{ color: " #7a55ff" }} className='mx-1'>Log in here</span>.
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}

export default Register
