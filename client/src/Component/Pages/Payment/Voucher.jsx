import React from 'react'
import { Toolbar } from "./Payment"
import Button from '@mui/material/Button'
import { Wrapper } from './Wrapper';
import { Link } from 'react-router-dom';
function Voucher() {
    const [price, setPrice] = React.useState("399.00")
    const [disable, setDisable] = React.useState(false)
    const handleVoucher = (e) => {
        if (e.target.value === 'masai30' || e.target.value === 'MASAI30') {
            let price = Math.floor(399 * 30) / 100
            price = (price.toFixed(2))
            setPrice(399 - price)
            let rupees = (399*30)/100
            rupees = 399-rupees
            localStorage.setItem("price", rupees)
        } else
            if (e.target.value === 'masai20' || e.target.value === 'MASAI20') {
                let price = Math.floor(399 * 20) / 100
                price = (price.toFixed(2))
                setPrice(399 - price)
                let rupees = (399*20)/100
                rupees = 399-rupees
                localStorage.setItem("price", rupees)
            }

            else {
                setPrice("399.00")
            }

        setDisable(false)
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
                        <p className='method methods2'>Redeem Voucher</p>
                        <input className='voucherInput' onChange={(e) => { handleVoucher(e) }} type="text" placeholder='Enter Voucher Code' />
                        <Link className='navlinkstyle' to={{
                            pathname: "/payment/upi",
                            price: price
                        }}><Button style={{ marginTop: 30, width: "96%", }} disabled={disable} className='proceedToUpi' variant="contained">Continue</Button></Link>

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
                                <span className='peryear'>{price}/year</span>
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

export default Voucher
