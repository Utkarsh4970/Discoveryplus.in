import React from 'react'
// import SelectedPlan from './SelectedPlan'
import Button from '@mui/material/Button'
import { Wrapper } from './Wrapper'
import GooglePay from './GooglePay'
import {Toolbar} from './Payment'
function UPIPayment(props) {
    let price = JSON.parse(localStorage.getItem("price"))
    // alert(price)
    // const [price,setPrice] = React.useState("399.00")
   
    // if(props.location.price !== undefined){
    //     setPrice(props.location.price)
    // }
    // else{
    //     setPrice("399.00")
    // }
    // console.log(props.location.price)
    return (
        <Toolbar >
             <div className='wrapper-logo'>
                <img src="	https://auth.discoveryplus.in/logo_premium-61813cd4f11189a69d83f7afb3699d19.png" alt="" />
            </div>
            <Wrapper>
            <div className='ccard card2'>
                <div className='logo' style={{textAlign:"center"}}>
                    <img  src="https://www.discoveryplus.in/129c5de772422db12a69e397768bd8ec.png" alt="" />
                </div>
                <div className='line'></div>
                <div className='item21'>
                    <p className='method red'>WARNING</p>
                    <ul className='ul'>
                        <li>UPI payments have lower success rate than card; pay via creadit / debit card for a better experience</li>
                    </ul>
                    <ul className='ul'>
                        <li>UPI payments can take ~15 minutes to be confirmed</li>
                    </ul>
                    <ul className='ul'>
                        <li>If your subscription does not start immediately, quit and relaunch the app after 15 minutes</li>
                    </ul>
                    <ul className='ul'>
                        <li>If your UPI payment fails, your money will be refunded within 10 working days</li>
                    </ul>
                </div>
                <p className='checkoutText'>Checkout</p>
                <Button style = {{marginLeft:70}} className='proceedToUpi' variant="contained"><GooglePay/></Button>
                
                <div style= {{marginLeft:500,marginTop:"-100px"}}>
                <p className='method'>Selected Plans</p>
                    <div className='pricediv pricediv2'>
                        <p className='price'>399</p>
                        <div className='rupees'>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.75 2.375H14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.75 6.33331H14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.75 10.2917L11.4792 16.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.75 10.2917H7.125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.125 10.2917C12.403 10.2917 12.403 2.375 7.125 2.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='peryear'>{price}/year</span>
                        </div>
                        <div className='thirdline'></div>
                        <p className='method change change2'>Change</p>
                    </div> 
                </div>
            </div>
            </Wrapper>
           
        </Toolbar>
    )
}

export default UPIPayment
