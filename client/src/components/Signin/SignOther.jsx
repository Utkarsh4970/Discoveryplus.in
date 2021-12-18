import { Card } from "../common/Card"
import { Wrapper } from "../common/Wrapper"
import "./signinOther.css"
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from 'axios'
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

export const SignOther = ()=>{
    return (
        <div className="signOther-page">
            <Wrapper>
                <Card >
                    <h2 className="signin-page-cont-title">Sign In Now</h2>
                    <p className="sign-page-container__description">Save your preferences &amp; discover great recommendations</p>
                    <div className="other-Sign-btns">
                        <SignInButton >
                            <div >
                                <span><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDciIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNOS44MjcgMjRjMC0xLjUyNC4yNTMtMi45ODYuNzA1LTQuMzU2bC03LjkwOS02LjA0QTIzLjQ1NiAyMy40NTYgMCAwMC4yMTMgMjRjMCAzLjczNy44NjggNy4yNiAyLjQwNyAxMC4zODhsNy45MDUtNi4wNUExMy44ODUgMTMuODg1IDAgMDE5LjgyNyAyNCIgZmlsbD0iI0ZCQkMwNSIvPjxwYXRoIGQ9Ik0yMy43MTQgMTAuMTMzYzMuMzExIDAgNi4zMDIgMS4xNzQgOC42NTIgMy4wOTRMMzkuMjAyIDYuNEMzNS4wMzYgMi43NzMgMjkuNjk1LjUzMyAyMy43MTQuNTMzYTIzLjQzIDIzLjQzIDAgMDAtMjEuMDkgMTMuMDcxbDcuOTA4IDYuMDRhMTMuODQ5IDEzLjg0OSAwIDAxMTMuMTgyLTkuNTEiIGZpbGw9IiNFQTQzMzUiLz48cGF0aCBkPSJNMjMuNzE0IDM3Ljg2N2ExMy44NDkgMTMuODQ5IDAgMDEtMTMuMTgyLTkuNTFsLTcuOTA5IDYuMDM4YTIzLjQzIDIzLjQzIDAgMDAyMS4wOSAxMy4wNzJjNS43MzIgMCAxMS4yMDUtMi4wMzYgMTUuMzEyLTUuODQ5bC03LjUwNy01LjgwNGMtMi4xMTggMS4zMzUtNC43ODYgMi4wNTMtNy44MDQgMi4wNTMiIGZpbGw9IiMzNEE4NTMiLz48cGF0aCBkPSJNNDYuMTQ1IDI0YzAtMS4zODctLjIxMy0yLjg4LS41MzQtNC4yNjdIMjMuNzE0VjI4LjhoMTIuNjA0Yy0uNjMgMy4wOTEtMi4zNDYgNS40NjgtNC44IDcuMDE0bDcuNTA3IDUuODA0YzQuMzE0LTQuMDA0IDcuMTItOS45NjkgNy4xMi0xNy42MTgiIGZpbGw9IiM0Mjg1RjQiLz48L2c+PC9zdmc+" /></span>
                                <p>
                                    <a href="http://localhost:3001/auth/google/callback" target="_blank">
                                    Sign with Google
                                
                                    </a>
                                </p>
                            </div>
                        </SignInButton>
                        <SignInButton style={{background: "#4065B4", color:"#f8f8f9"}}>
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