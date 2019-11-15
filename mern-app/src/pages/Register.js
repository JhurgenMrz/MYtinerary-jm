import React from 'react'
import '../styles/Register.css'

const Register = ()=>{
    return <div className="Register">
        <h2>Create Acount</h2>
        <div className="Register__container">

            <div className="Register__img">
                <p>Add Photo</p>
                <img alt="User" />
            </div>
            <form className="Register__form">
                <label>User Name</label>
                <input 
                    type="text"
                    name="user_name"
                    />
                <label>Password</label>
                <input 
                    type="password"
                    name="password"
                    />
                <label>Email</label>
                <input 
                    type="email"
                    name="user_email"
                    />
                <label>First Name</label>
                <input 
                    type="text"
                    name="user_first_name" />
                <label>Last Name</label>
                <input 
                    type="text"
                    name="user_last_name"
                    />
                <label>Country</label>
                <select name="country">
                    <option value="argentina">Argentina</option>
                    <option value="brazil">Brazil</option>
                    <option value="chile">Chile</option>
                    <option value="uruguay">Uruguay</option>
                </select>
                
                <input type="checkbox" /> <p>I agree to MYtinerary's <a href="#">Terms and Conditions</a> </p>

                <button className="Register__form__button" type="button">Ok</button>
            </form>
        </div>
    </div>
}

export default Register