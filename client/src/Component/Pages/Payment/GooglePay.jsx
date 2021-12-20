import React from 'react'
import GooglePayButton from '@google-pay/button-react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
function GooglePay() {
  const { handleprime, Primemember } = useContext(AuthContext)
  if (Primemember) {
    return <Redirect to="/watch"></Redirect>
  }

 

  // console.log(Primemember);
  return (
    <div>
      <GooglePayButton className='googlePayButton'
        buttonColor='white'
        buttonSizeMode="fill"
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '100.00',
            currencyCode: 'USD',
            countryCode: 'US',
          },
        }}
        onLoadPaymentData={paymentRequest => {
          // console.log('load payment data', paymentRequest.paymentMethodData.tokenizationData.token);
          if (paymentRequest.paymentMethodData.tokenizationData.token.length > 0) {
            // console.log(localStorage.getItem("email") || localStorage.getItem("mob"));
           
            handleprime()
           

          }
        }}
        
      />
    </div>
  )
}

export default GooglePay
