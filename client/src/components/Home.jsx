import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
export const Home = ()=>{
    const {token, handleLogout, otpSend} = useContext(AuthContext);
    const handleClick = ()=>{
        handleLogout()
    }
    return (<div>
            {
                !otpSend?<Link to="/signin" ><button>Sign In</button></Link>: <button onClick={handleClick}>SignOut</button>

            }
            <h1>Home page</h1>
    </div>
    )
}