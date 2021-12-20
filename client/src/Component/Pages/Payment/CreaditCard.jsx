import React from 'react'
import { Toolbar } from './Payment'
import Button from '@mui/material/Button'
import SelectedPlan from './SelectedPlan'
import { Wrapper } from './Wrapper';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Redirect } from 'react-router-dom';
import Dbdata from '../../../Utils/request'
function CreaditCard() {
    const [disable, setDisable] = React.useState(false)
    const handleVoucher = () => {
        setDisable(false)
    }
    const { handleprime, Primemember } = useContext(AuthContext)
    console.log(Primemember);
    if (Primemember) {
        return <Redirect to="/watch"></Redirect>
    }
    return (
        <Toolbar>
            <div className='wrapper-logo'>
                <img className='p-3' src="https://auth.discoveryplus.in/logo_premium-61813cd4f11189a69d83f7afb3699d19.png" alt="" style={{ height: "80px", width: "350px" }} />
            </div>
            <Wrapper className="mb-5">

                <div className="card m-auto mt-4 p-4" style={{ maxWidth: "750px", background: " #1A1C21", borderRadius: "15px" }}>
                    <img src="https://www.discoveryplus.in/129c5de772422db12a69e397768bd8ec.png" className="card-img-top m-auto p-3" alt="..." style={{ height: "80px", width: "250px" }} />
                    <hr style={{ fontSize: "6px", color: "rgb(117, 116, 116)" }} />

                    <div className="card-body row">
                        <div className='col-12 col-sm-8 p-2'>
                            <div className=''>
                                <form action="">
                                    <p className='text-white h5'>Checkout</p>
                                    <p className='methods2' style={{marginTop:8}}>CARD NUMBER</p>
                                    <input className='voucherInput voucherInput2' name="cardNumber" type="text" placeholder='1234 5678 9012 3456' required minLength={16} maxLength={16} />
                                    <p className='methods2'style={{marginTop:8}}>EXPIRY DATE</p>
                                    <input className='voucherInput voucherInput2' name="expiry" type="text" placeholder='MM/YY' required minLength={4} maxLength={5} />
                                    <p className='methods2'style={{marginTop:8}}>CVC/CVV</p>
                                    <input className='voucherInput voucherInput2' name="cvv" type="text" placeholder='123' required minLength={3} maxLength={3} />
                                    <p className='methods2'style={{marginTop:8}}>CARD HOLDER NAME</p>
                                    <input className='voucherInput voucherInput2' name="cardholdername" type="text" placeholder='J. Smith' required minLength={1} />
                                </form>
                                <Button className="marlef" style={{ marginTop: 18, width: "96%", marginBottom: 20 }} disabled={disable} className='proceedToUpi' variant="contained" onClick={() => {
                                    handleprime()
                                    // Dbdata.post("/user", {
                                    //     user: localStorage.getItem("email") || localStorage.getItem("email")
                                    // })
                                    // if (localStorage.getItem("email") != "") {
                                    //     Dbdata.get(`/user/${localStorage.getItem("email")}`).then(({ data }) => {
                                            
                                    //         console.log(data)
                                    //     })

                                    // }else{
                                        
                                    // }

                                }}>Continue</Button>

                            </div>
                        </div>

                        <div className="col-12 col-sm-4 p-2">
                            <SelectedPlan />
                        </div>
                    </div>
                    <div className="row pb-5">
                        <p style={{ marginTop: -5, marginLeft: 35 }}>
                            <svg id="protectsvg" width={30}

                                height={30}
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 111.81 122.88"
                                style={{ enableBackground: "new 0 0 111.81 122.88" }}
                                xmlSpace="preserve"
                            >
                                <style
                                    type="text/css"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            "\n\t.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#51B53C;}\n\t.st1{fill:#FFFFFF;}\n\t.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}\n"
                                    }}
                                />
                                <g>
                                    <path
                                        className="st0"
                                        d="M55.71,0c20.85,13.21,39.68,19.47,55.85,17.99c2.82,57.1-18.26,90.82-55.63,104.89 C19.84,109.71-1.5,77.44,0.08,17.12C19.06,18.12,37.67,14.01,55.71,0L55.71,0L55.71,0z"
                                    />
                                    <path
                                        className="st2"
                                        d="M55.73,7.05c18.45,11.7,35.13,17.23,49.43,15.92c2.5,50.54-16.17,80.39-49.24,92.85 C23.98,104.16,5.09,75.6,6.49,22.21C23.29,23.09,39.77,19.46,55.73,7.05L55.73,7.05L55.73,7.05z"
                                    />
                                    <path
                                        className="st0"
                                        d="M56.24,19.54c14.22,9.01,27.06,13.27,38.08,12.27c1.92,38.94-12.45,61.93-37.94,71.53 c-0.16-0.06-0.32-0.12-0.48-0.18c-0.16,0.06-0.32,0.12-0.48,0.18c-25.48-9.6-39.86-32.59-37.94-71.53 c11.02,1.01,23.87-3.26,38.08-12.27l0,0l0.33,0.25L56.24,19.54L56.24,19.54L56.24,19.54z"
                                    />
                                    <path
                                        className="st1"
                                        d="M35.44,58.28l7.47-0.1l0.56,0.14c1.51,0.87,2.93,1.86,4.26,2.99c0.96,0.81,1.87,1.69,2.74,2.65 c2.68-4.31,5.54-8.28,8.56-11.92c3.31-3.99,5.38-6.18,9.06-9.49l0.73-0.28h8.16l-1.65,1.82c-5.05,5.61-8.21,9.99-12.35,15.97 c-4.15,6-7.85,12.18-11.15,18.54l-1.03,1.98l-0.94-2.02c-1.74-3.73-3.82-7.15-6.3-10.21c-2.48-3.06-5.37-5.78-8.74-8.09 L35.44,58.28L35.44,58.28L35.44,58.28L35.44,58.28z"
                                    />
                                </g>
                            </svg>

                        </p>
                        <p className='methods2' style={{ marginTop: -50, marginLeft: 70 }}>your card details will be encrypted before processed through a secure server.</p>
                        <p className='methods3' style={{ marginLeft: 40 }}>By chosing to proceed, you authorise us to charge your card until you cancel. For any queries,<br /> you can reach out to us at <span style={{ color: "#1389ff" }}>hello@discovery.com</span></p>
                    </div>


                </div>
            </Wrapper>
        </Toolbar>
    )
}

export default CreaditCard