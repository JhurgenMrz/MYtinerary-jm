import React,{ useState} from 'react'
import {Nav} from '../components/Nav'
import '../styles/Register.css'
import {gravatar} from '../utils/gravatar'
import {countries} from '../utils/countries.js'

const Register = ()=>{

    const [Account, setAccount] = useState({
        user_name: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        country: '',
        accept_terms: false
    })

    const handleCheckbox = e => {
        setAccount({
            ...Account,
            accept_terms: !Account.accept_terms
        })
    }

    const handleChange = (e) => {
        setAccount({
            ...Account,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(Account)
    }

    return <>
        <Nav isRegister session={false} />
        <div className="Register">
            <h2>Create Acount</h2>
            <div className="Register__container">

                <form className="Register__form" onSubmit={handleSubmit}>
                    <div className="Register__img">
                        <p>Add Photo with Gravatar</p>
                        <img src={gravatar(Account.email)} />
                    </div>
                    
                    <input 
                        type="text"
                        name="user_name"
                        placeholder="User Name"
                        required
                        onChange={handleChange}
                        />
                    
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={handleChange}

                        />
                    
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={handleChange}

                        />
                    
                    <input 
                        type="text"
                        name="first_name" 
                        placeholder="First Name"
                        required  
                        onChange={handleChange}

                    />
                    
                    <input 
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        required
                        onChange={handleChange}

                    />
                    
                    <select placeholder="Select Country" name="country" required onChange={handleChange}
                        >
                        <option disabled >Select Country</option>
                        
                        {
                           countries.map((el,index)=> <option value={el.name} key={el.code}>{el.name}</option>)
                        }
                        
                    </select>
                    
                    <div className="Register__form__terms" >
                        <input type="checkbox"
                            name="accept_terms"
                            required
                            onClick={handleCheckbox}
                            defaultChecked={Account.accept_terms}
                        /> 
                        <p>I agree to MYtinerary's <a href="#">Terms and Conditions</a> </p>
                    </div>

                    <button className="Register__form__button" type="submit" >Accept</button>
                </form>
            </div>
        </div>
    </>
}

export default Register