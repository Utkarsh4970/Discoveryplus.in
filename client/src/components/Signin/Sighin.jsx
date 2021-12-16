import { Card } from "../common/Card"
import { Wrapper } from "../common/Wrapper"
import './sighin.css'
import { useState } from "react";
import { Button } from "../common/Button";
import { ValidateMobile } from "../common/ValidMobile";

export const Sighin = ()=>{

    const [user,setUser] = useState({
        mobileNumber:""
    });
   
    const handleChange = (e)=>{    // handle thie input box
        const {name,value} = e.target;
        setUser({...user,
        [name]:value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(user.mobileNumber)
    }
    return <div className="sighin-page">
            <Wrapper>
                <Card>
                    <h2 className="signin-page-cont-title">Sign In Now</h2>
                    <p className="sign-page-container__description">Save your preferences &amp; discover great recommendations</p>
                    <form>
                        <div className="input-box-cont">
                            
                            <input type="tel" id="mobileNumber" className="mobile-input-box" placeholder="Mobile Number" name="mobileNumber" maxLength="10" onChange={(e)=>handleChange(e)} value={user.mobileNumber}></input>
                            <ValidateMobile isError={(user.mobileNumber.length>0 && user.mobileNumber.length<10)?"true":"false"}><span>Please enter a valid 10 digit mobile number</span></ValidateMobile>
                        </div>
                        <div>
                            <Button onClick={(e)=>handleSubmit(e)} disabled={user.mobileNumber.length<10?true:false} theme={user.mobileNumber.length===10?"ligth":"dark"} >Get OTP</Button>
                        </div>
                    </form>
                    <p className="signin-page-container__or">or</p>
                    <a className="signin-page-container__link" href="#">View other sign in options</a>
                    <p className="signin-page-container__terms-and-conditions">
                        <span>By signing in, you agree to our <a href="#">Privacy Policy</a> &amp; <a href="#">Terms of Use</a>
                        </span>
                    </p>
                </Card>

            </Wrapper>
        </div>
}