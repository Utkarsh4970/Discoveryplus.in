import { Card } from "../common/Card"
import { Wrapper } from "../common/Wrapper"
import "./signinOther.css"
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router";
import Dbdata from "../../Utils/request"
import GoogleLogin from "react-google-login";
const SignInButton = styled.button`
    width:100%
    heigth:48px;
    border:none;
    border-radius:5px;
    font-size: 16px;
    font-weight: 300;
    padding:10px 0;
    &:hover{
        opacity:0.8;
    }
    & > div{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:10px;
        & > p{
            margin:0;
            & > a{

                color:black;
                text-decoration:none;
            }
        }
        & > span > img{
            width:18px;
        }
    }
  
`

export const SignOther = () => {
    const {handleprime, handlemail, otpSend } = useContext(AuthContext);
    const responseGoogle = (response) => {
        // console.log( response.tokenObj.access_token);
        alert(`Welcome ${response.profileObj.name}`)
        localStorage.setItem("email",response.profileObj.email)
        handlemail()
   

    };
    if (localStorage.getItem("email")!="") {
        return <Redirect to="/swatch"></Redirect>
    }
    return (
        <div className="signOther-page">
            <Wrapper>
                <Card >
                    <h2 className="signin-page-cont-title">Sign In Now</h2>
                    <p className="sign-page-container__description">Save your preferences &amp; discover great recommendations</p>
                    <div className="other-Sign-btns">
                        <SignInButton >
                            <div >
                                <GoogleLogin
                                    clientId="196704662244-8pd53bjj7rvboqhdjjslk8fnta5d1u9j.apps.googleusercontent.com"
                                    buttonText="Sign up with google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={"single_host_origin"}
                                    redirectUri="https://discoveryplusclone-vishal-patil.vercel.app/signinOther"
                                />

                            </div>
                        </SignInButton>
                        <SignInButton style={{ background: "#4065B4", color: "#f8f8f9" }}>
                            <div>
                                <span><img src="/pubilc/SigninIcon/facebook-alt.svg" /></span>
                                <p>Sign with Facebook</p>

                            </div>
                        </SignInButton>
                        <SignInButton>
                            <div>
                                <span><img src="https://auth.discoveryplus.in/icon-apple-logo-b803bf4b5c76a8f4039e7901ea8c5ec7.svg" /></span>
                                <p>Sign with Apple</p>
                            </div>
                        </SignInButton>
                    </div>
                    <p className="signin-page-container__or">or</p>
                    <Link className="signin-page-container__link" to="/signin">Sign In with your mobile number</Link>
                    <p className="signin-page-container__terms-and-conditions">
                        <span>By signing in, you agree to our <a href="#">Privacy Policy</a> &amp; <a href="#">Terms of Use</a>
                        </span>
                    </p>
                </Card>
            </Wrapper>
        </div>
    )
}