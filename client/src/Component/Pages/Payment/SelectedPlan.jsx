import React from 'react'

function SelectedPlan() {
    return (
        <div>
             <p className='method'>Selected Plans</p>
                    <div className='pricediv'>
                        <p className='price'>399</p>
                        <div className='rupees'>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.75 2.375H14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.75 6.33331H14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.75 10.2917L11.4792 16.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.75 10.2917H7.125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.125 10.2917C12.403 10.2917 12.403 2.375 7.125 2.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span className='peryear'>399.00/year</span>
                        </div>
                        <div className='thirdline'></div>
                        <p className='method change'>Change</p>
                    </div>
        </div>
    )
}

export default SelectedPlan
