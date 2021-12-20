import { Card } from "../common/Card"
import { Wrapper } from "../common/Wrapper"
import './sighin.css'
import { useState } from "react";
import { Button } from "../common/Button";
import { ValidateMobile } from "../common/ValidMobile";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from 'axios'
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Mockdata from '../../Utils/request'
export const Sighin = () => {

    const { state, handleState, handleotp, otpSend,handlemail } = useContext(AuthContext);
    var random;
    const handleChange = (e) => {    // handle thie input box
        const { name, value } = e.target;
        handleState({ name, value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var number = Math.floor(Math.random()* 100000)
        alert(number)
        localStorage.setItem("mob", state.phone)
        state.phone=""
        localStorage.setItem("otp", number)
        // const hash = number.hash;
        // handleHash(hash);
        handleotp()

    }
    return !otpSend ? <div className="sighin-page">
        <Wrapper>
            <Card>
                <h2 className="signin-page-cont-title">Sign In Now</h2>
                <p className="sign-page-container__description">Save your preferences &amp; discover great recommendations</p>
                <form>
                    <div className="input-box-cont">

                        <input type="tel" id="mobileNumber" className="mobile-input-box" placeholder="Mobile Number" name="phone" maxLength="10" onChange={handleState('phone')} value={state.phone}></input>
                        <ValidateMobile isError={(state.phone.length > 0 && state.phone.length < 10) ? "true" : "false"}><span>Please enter a valid 10 digit mobile number</span></ValidateMobile>
                    </div>
                    <div>
                        <Button onClick={(e) => {
                           
                            handleSubmit(e)}} disabled={state.phone.length < 10 ? true : false} theme={state.phone.length === 10 ? "ligth" : "dark"} >Get OTP</Button>
                    </div>
                </form>
                <p className="signin-page-container__or">or</p>
                <Link className="signin-page-container__link" to="/signinOther">View other sign in options</Link>
                <p className="signin-page-container__terms-and-conditions">
                    <span>By signing in, you agree to our <a href="#">Privacy Policy</a> &amp; <a href="#">Terms of Use</a>
                    </span>
                </p>
            </Card>

        </Wrapper>
    </div> : <Redirect to="/verifyOtp" />
}