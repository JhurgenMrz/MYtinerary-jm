import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import "../styles/Register.css";
import { MessageError } from '../components/MessageError'
import { countries } from "../utils/countries.js";
import { register } from "../actions/authActions";
import { returnErrors, clearErrors } from "../actions/errorActions";

const Register = props => {
  // const [useError, setError] = useState(props.error.message)
  const [Account, setAccount] = useState({
    user_name: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    country: "",
    accept_terms: false,
    profilePic: ""
  });

  const handleCheckbox = e => {
    setAccount({
      ...Account,
      accept_terms: !Account.accept_terms
    });
  };

  const handleChange = e => {
    setAccount({
      ...Account,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(Account);

    //Attempt to register
    props.register(Account);
  };

  useEffect(() => {
    props.clearErrors()

    return () => {
      props.clearErrors()
    }
  }, [])

  return (
    <>
      <Nav isRegister session={false} />
      <div className="Register">
        <h2>Create Acount</h2>

        <div className="Register__container">
          <form className="Register__form" onSubmit={handleSubmit}>
            <div className="Register__img">
              {!Account.profilePic ? (
                <p>No Profile Photo</p>
              ) : (
                  <img src={Account.profilePic} />
                )}
            </div>

            {
              (Object.keys(props.error.message).length !== 0) ? <MessageError message={props.error.message} /> : null
            }

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
              // required
              onChange={handleChange}
            />

            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              // required
              onChange={handleChange}
            />

            <input
              type="text"
              name="profilePic"
              placeholder="Url Image Picture"
              required
              onChange={handleChange}
            />

            <select
              placeholder="Select Country"
              name="country"
              // required
              onChange={handleChange}
            >
              <option disabled>Select Country</option>

              {countries.map((el, index) => (
                <option value={el.name} key={el.code}>
                  {el.name}
                </option>
              ))}
            </select>

            <div className="Register__form__terms">
              <input
                type="checkbox"
                name="accept_terms"
                // required
                onClick={handleCheckbox}
                defaultChecked={Account.accept_terms}
              />
              <p>
                I agree to MYtinerary's <a href="#">Terms and Conditions</a>{" "}
              </p>
            </div>

            <button className="Register__form__button" type="submit">
              Accept
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = reducer => {
  return {
    user: reducer.user,
    error: reducer.error
  }
}

export default connect(mapDispatchToProps, { register, returnErrors, clearErrors })(Register);
