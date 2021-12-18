import React from 'react'
import {Toolbar} from "./Payment"
import SelectedPlan from './SelectedPlan'
import { NavLink } from "react-router-dom";
import {useHistory} from 'react-router-dom';

import { Wrapper } from './Wrapper';
const styles = {
    body:{
        backgroundColor:"black",
        width:"100%",
        height:"700px"
    },
   
}
function PaymentMethod() {
    localStorage.clear("price")
    const history = useHistory()
    return (
        
        <Toolbar>
            <div className='wrapper-logo'>
                <img src="	https://auth.discoveryplus.in/logo_premium-61813cd4f11189a69d83f7afb3699d19.png" alt="" />
            </div>
            <Wrapper>
            <div className='ccard'>
                <div className='logo' style={{textAlign:"center"}}>
                    <img  src="https://www.discoveryplus.in/129c5de772422db12a69e397768bd8ec.png" alt="" />
                </div>
                <div className='line'></div>
                <div className='item2'>
                    <p className='method'>Payments methods</p>
                    <div className='secondline'></div>
                    <NavLink className="navlinkstyle" to='/payment/card'>
                    <p className='method'>Creadit/Debit card
                        <span>
                            <img className='masterCard' src="https://logowik.com/content/uploads/images/t_787_mastercard.jpg" alt="" />
                            <img className='masterCard' src="https://vtlogo.com/wp-content/uploads/2020/10/rupay-vector-logo-small.png" alt="" />
                            <img className='masterCard' src="https://resources.mynewsdesk.com/image/upload/shduosj8nxkwtcbozfuv.jpg" alt="" />
                            <svg className='arrow' width="9" height="14" viewBox="0 0 9 14" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.612451 11.85L5.46245 6.99998L0.612451 2.14998C0.124951 1.66248 0.124951 0.874976 0.612451 0.387476C1.09995 -0.100024 1.88745 -0.100024 2.37495 0.387476L8.11245 6.12498C8.59995 6.61248 8.59995 7.39998 8.11245 7.88748L2.37495 13.625C1.88745 14.1125 1.09995 14.1125 0.612451 13.625C0.137451 13.1375 0.124951 12.3375 0.612451 11.85Z" fill="white"/>
                            </svg>
                        </span>
                    </p>
                    </NavLink>
                    <div className='secondline'></div>
                    <NavLink className="navlinkstyle" to='payment/upi'>
                    <p className='method'>UPI 
                        <span>
                            <img className='masterCard' src="https://logodix.com/logo/1763558.jpg" alt="" />
                            <svg className='arrow arrow2' width="9" height="14" viewBox="0 0 9 14" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.612451 11.85L5.46245 6.99998L0.612451 2.14998C0.124951 1.66248 0.124951 0.874976 0.612451 0.387476C1.09995 -0.100024 1.88745 -0.100024 2.37495 0.387476L8.11245 6.12498C8.59995 6.61248 8.59995 7.39998 8.11245 7.88748L2.37495 13.625C1.88745 14.1125 1.09995 14.1125 0.612451 13.625C0.137451 13.1375 0.124951 12.3375 0.612451 11.85Z" fill="white"/>
                            </svg>
                        </span>
                    </p>
                    </NavLink>
                    <div className='secondline'></div>
                    <NavLink className="navlinkstyle" to='/payment/voucher'>
                    <p className='method'>Enter Code
                        <span>
                        <svg className='arrow arrow3' width="9" height="14" viewBox="0 0 9 14" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.612451 11.85L5.46245 6.99998L0.612451 2.14998C0.124951 1.66248 0.124951 0.874976 0.612451 0.387476C1.09995 -0.100024 1.88745 -0.100024 2.37495 0.387476L8.11245 6.12498C8.59995 6.61248 8.59995 7.39998 8.11245 7.88748L2.37495 13.625C1.88745 14.1125 1.09995 14.1125 0.612451 13.625C0.137451 13.1375 0.124951 12.3375 0.612451 11.85Z" fill="white"/>
                            </svg>
                        </span>
                    </p>
                    </NavLink>
                    <div className='secondline'></div>

                </div>
                <div className="item3 methodp2">
                   <SelectedPlan/>
                </div>
            </div>
            </Wrapper>
        </Toolbar>
    )
}

export {PaymentMethod}
