import { useState } from "react"
import { Card } from "../common/Card"
import { Wrapper } from "../common/Wrapper"
import { ValidateMobile } from "../common/ValidMobile"
import { Button } from "../common/Button"
import "./verifyOtp.css"
export const VerifyOtp = ()=>{
    const [otp,setOtp] = useState({
        otp:"",
    });
    const handleOtp = (e)=>{
        const {name,value} = e.target;
        setOtp({...otp,
        [name]:value
        })
    }

    const handleSubmit = (e)=>{ //submit button
        e.preventDefault();
        console.log(otp.otp)
    }
    return (
        <div className="otp-page">
            <Wrapper>
                <Card>
                    <h2 className="signin-page-cont-title">Sign In Now</h2>
                    <p className="sign-page-container__description">An OTP has been sent to +91 8577963932.</p>
                    <form>
                        <div className="input-box-cont">
                            
                            <input type="tel" id="otp" className="mobile-input-box" placeholder="OTP" name="otp" maxLength="6" onChange={(e)=>handleOtp(e)} value={otp.otp}></input>
                            <ValidateMobile isError={(otp.otp.length>0 && otp.otp.length<6)?"true":"false"}><span>The OTP is incorrect</span></ValidateMobile>
                        </div>
                        <div className="resendotp-link">Resend OTP</div>
                        <div className="sub-btn-otp">
                            <Button onClick={(e)=>handleSubmit(e)} disabled={otp.otp.length<6?true:false} theme={otp.otp.length===6?"ligth":"dark"} >Submit</Button>
                        </div>
                    </form>
                </Card>
            </Wrapper>
        </div>
    )
}