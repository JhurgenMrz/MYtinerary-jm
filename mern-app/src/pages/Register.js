import React from 'react'
import {Nav} from '../components/Nav'
import '../styles/Register.css'

const Register = ()=>{
    return <>
        <Nav isRegister session={false} />
        <div className="Register">
            <h2>Create Acount</h2>
            <div className="Register__container">

                <div className="Register__img">
                    <p>Add Photo</p>
                    <img src="" />
                </div>
                <form className="Register__form">
                    
                    <input 
                        type="text"
                        name="user_name"
                        placeholder="User Name"
                        />
                    
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        />
                    
                    <input 
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        />
                    
                    <input 
                        type="text"
                        name="user_first_name" 
                        placeholder="First Name"    
                    />
                    
                    <input 
                        type="text"
                        name="user_last_name"
                        placeholder="Last Name"
                    />
                    
                    <select placeholder="Select Country" name="country">
                        <option value="">Select Country</option>
                        <option value="argentina">Argentina</option>
                        <option value="brazil">Brazil</option>
                        <option value="chile">Chile</option>
                        <option value="uruguay">Uruguay</option>
                    </select>
                    
                    <div className="Register__form__terms">
                        <input type="checkbox" /> <p>I agree to MYtinerary's <a href="#">Terms and Conditions</a> </p>
                    </div>

                    <button className="Register__form__button" type="button">Ok</button>
                </form>
            </div>
        </div>
    </>
}

export default Register