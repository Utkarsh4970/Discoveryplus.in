import React from 'react'
import {Toolbar} from "./Payment"
import SelectedPlan from './SelectedPlan'
import { NavLink, Redirect } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from "react";

import { Wrapper } from './Wrapper';
const styles = {
    body:{
        backgroundColor:"black",
        width:"100%",
        height:"700px"
    },
   
}

function PaymentMethod() {
    const { handlemail, otpSend,showdata,setshowData } = useContext(AuthContext);
    localStorage.setItem("price",399)
    if(!otpSend){
        return <Redirect to="/signin"></Redirect>
    }
   
    return (
        
        <Toolbar>
            <div className='wrapper-logo'>
                <img className='p-3' src="https://auth.discoveryplus.in/logo_premium-61813cd4f11189a69d83f7afb3699d19.png" alt="" style={{ height: "80px", width: "350px" }}/>
            </div>
            <Wrapper>
            <div className="card m-auto mt-4 p-4" style={{ maxWidth: "750px", background: " #1A1C21", borderRadius: "15px"}}>
                    <img src="https://www.discoveryplus.in/129c5de772422db12a69e397768bd8ec.png" className="card-img-top m-auto p-3" alt="..." style={{height:"80px",width:"250px"}}/>
                    <div className='line'></div>
                   
                    <div className="card-body row">
                     <div className='col-12 col-sm-8 p-2'>
                     <div className='item2 ms-0' style={{maxWidth:"100%"}}>
                    <p className='method'>Payments methods</p>
                    <div className='secondline'></div>
                    <NavLink className="navlinkstyle" style={{textDecoration:"none"}} to='/payment/card'>
                    <p className='method'>Creadit/Debit card
                        <span>
                            <img className='masterCard' src="https://logowik.com/content/uploads/images/t_787_mastercard.jpg" alt="" />
                            <img className='masterCard' src="https://vtlogo.com/wp-content/uploads/2020/10/rupay-vector-logo-small.png" alt="" />
                            <img className='masterCard' src="https://resources.mynewsdesk.com/image/upload/shduosj8nxkwtcbozfuv.jpg" alt="" />
                            <svg className='arrow float-end' width="9" height="14" viewBox="0 0 9 14" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.612451 11.85L5.46245 6.99998L0.612451 2.14998C0.124951 1.66248 0.124951 0.874976 0.612451 0.387476C1.09995 -0.100024 1.88745 -0.100024 2.37495 0.387476L8.11245 6.12498C8.59995 6.61248 8.59995 7.39998 8.11245 7.88748L2.37495 13.625C1.88745 14.1125 1.09995 14.1125 0.612451 13.625C0.137451 13.1375 0.124951 12.3375 0.612451 11.85Z" fill="white"/>
                            </svg>
                        </span>
                    </p>
                    </NavLink>
                    <div className='secondline'></div>
                    <NavLink className="navlinkstyle" style={{textDecoration:"none"}} to='payment/upi'>
                    <p className='method'>UPI 
                        <span>
                            <img className='masterCard pt-3' src="https://logodix.com/logo/1763558.jpg" alt="" />
                            <svg className='arrow arrow2 float-end' width="9" height="14" viewBox="0 0 9 14" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.612451 11.85L5.46245 6.99998L0.612451 2.14998C0.124951 1.66248 0.124951 0.874976 0.612451 0.387476C1.09995 -0.100024 1.88745 -0.100024 2.37495 0.387476L8.11245 6.12498C8.59995 6.61248 8.59995 7.39998 8.11245 7.88748L2.37495 13.625C1.88745 14.1125 1.09995 14.1125 0.612451 13.625C0.137451 13.1375 0.124951 12.3375 0.612451 11.85Z" fill="white"/>
                            </svg>
                        </span>
                    </p>
                    </NavLink>
                    <div className='secondline'></div>
                    <NavLink className="navlinkstyle" style={{textDecoration:"none"}} to='/payment/voucher'>
                    <p className='method'>Enter Code
                        <span>
                        <svg className='arrow arrow3 float-end' width="9" height="14" viewBox="0 0 9 14" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.612451 11.85L5.46245 6.99998L0.612451 2.14998C0.124951 1.66248 0.124951 0.874976 0.612451 0.387476C1.09995 -0.100024 1.88745 -0.100024 2.37495 0.387476L8.11245 6.12498C8.59995 6.61248 8.59995 7.39998 8.11245 7.88748L2.37495 13.625C1.88745 14.1125 1.09995 14.1125 0.612451 13.625C0.137451 13.1375 0.124951 12.3375 0.612451 11.85Z" fill="white"/>
                            </svg>
                        </span>
                    </p>
                    </NavLink>
                    <div className='secondline'></div>

                </div>
                    </div>

                    <div className="col-12 col-sm-4 p-2">
                        <p className='method'>Selected Plans</p>
                        <div className='pricediv'style={{maxWidth:"100%"}}>
                            <p className='price'>399</p>
                            <div className='rupees'>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.75 2.375H14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.75 6.33331H14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.75 10.2917L11.4792 16.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.75 10.2917H7.125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.125 10.2917C12.403 10.2917 12.403 2.375 7.125 2.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className='peryear'>399.00/year</span>
                            </div>
                            <div className='thirdline'></div>
                            <p className='method change'>Change</p>
                        </div>
                    </div> 
                    </div>
                   
                </div>
            </Wrapper>
        </Toolbar>
    )
}

export {PaymentMethod}