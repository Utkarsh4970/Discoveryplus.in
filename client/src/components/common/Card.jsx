import "./card.css"
export const Card = ({children})=>{
    return (
        <div>
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
        
        </div>
    )
    }