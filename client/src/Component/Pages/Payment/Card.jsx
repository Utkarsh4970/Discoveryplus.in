//import "./card.css"

import styled  from "styled-components"

const CardWrapper = styled.div`
    & > .cardpage-background{
        background-image: linear-gradient(to bottom, rgba(40,44,51,0), rgba(40,44,51,0) 44%, #292c34);
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: -1;
    }
    & > .sighin-logo {
        & >img{
            width: 190px;
            margin-left: 42px;
            margin-top: 28px;
            margin-bottom: 35px;
        }
    }
    & > .sighin-content{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        & > .content-template{
            width: 650px;
            margin: auto;
            padding: 5px 15px 10px 15px;
            background:transparent;
            height: 600px;
            & > .login-container{
                color: white;
                margin: 0 80.5px;
                text-align: center;
                height: auto;
                background-color: #1a1c21;
                padding: 55px 100px;
                border-radius: 8px;
            }
        }
    }
    
    
`
export const Card = ({children})=>{
    return (
        <CardWrapper>
            <div className="cardpage-background"></div>
            
            <div className="sighin-logo"> 
                <img src="https://auth.discoveryplus.in/logo_premium-61813cd4f11189a69d83f7afb3699d19.png" alt="logo " />
            </div>
          
            <div className="sighin-content">
                <div className="content-template">
                    <div className="login-container">
                       {children}
                    </div> 
                </div>
            </div>
        
        </CardWrapper>
    )
    }