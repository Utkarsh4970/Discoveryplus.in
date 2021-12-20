
import { Card } from "../common/Card"
import { Wrapper } from "../common/Wrapper"
import { ValidateMobile } from "../common/ValidMobile"
import { Button } from "../common/Button"
import "./verifyOtp.css"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext";
import axios from "axios"
import { Redirect } from "react-router"
export const VerifyOtp = () => {
    const { handleToken, handleState,handlemail, handleHash, otpSend, state, token,Login,setLogin } = useContext(AuthContext);

    const handleSubmit = (e) => { //submit button
        e.preventDefault();
        submitOtp();

    }

    const resend = () => {

        // axios.post("https://calm-chamber-32471.herokuapp.com/sendOTP", {
        //     phone: `+91${state.phone}`,

        // }).then((res) => {
        //     // console.log(res.data);

        //     const hash = res.data.hash;
        //     handleHash(hash);

        //     alert("OTP has been sent again!")

        // })
        var number = Math.floor(Math.random() * 1000000)
        alert("OTP has been sent again!")
        alert(number);
        localStorage.setItem("otp", number)
    }

    const submitOtp = () => {
        if (localStorage.getItem("otp") == state.otp) {
            handlemail()
            alert("Login Success");
            return <Redirect to="/swatch"></Redirect>
        } else {
            alert("Please Provide Valide Otp");
        }

    }
//    if(otpSend){
//        return <Redirect to="/swatch"></Redirect>
//    }
    return (
        !Login  ? <div className="otp-page">
            <Wrapper>
                <Card>
                    <h2 className="signin-page-cont-title">Sign In Now</h2>
                    <p className="sign-page-container__description">An OTP has been sent to +91 {state.phone}</p>
                    <form>
                        <div className="input-box-cont">

                            <input type="tel" id="otp" className="mobile-input-box" placeholder="OTP" name="otp" maxLength="6" onChange={handleState('otp')} value={state.otp}></input>
                            <ValidateMobile isError={(state.otp.length > 0 && state.otp.length < 5 || state.otp.length < 5) ? "true" : "false"}><span>The OTP is incorrect</span></ValidateMobile>
                        </div>
                        <div className="resendotp-link" onClick={resend}>Resend OTP</div>
                        <div className="sub-btn-otp">
                            <Button onClick={(e) =>{ 
                                handleSubmit(e)
                               state.otp=""
                                }} disabled={state.otp.length >6 && state.otp.length < 5 ? true : false} theme={state.otp.length === 6 ||state.otp.length === 5 ? "ligth" : "dark"} >Submit</Button>
                        </div>
                    </form>
                </Card>
            </Wrapper>
        </div> : <Redirect to="/" />
    )
}