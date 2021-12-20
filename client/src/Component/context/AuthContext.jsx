import { createContext, useState } from "react";
import Dbdata from '../../Utils/request'
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [token,setToken] = useState("");
    const [otpSend, setOtpSend] = useState(false);
    const [Primemember, setPrimeMember] = useState(false);
    const [Login, setLogin] = useState(false);
    const [showdata,setshowData] = useState("");

    const handleLogout = ()=>{
        setToken("")
        setLogin(false)
        setOtpSend(false)
    }

    const [state,setState] = useState({
        phone:"",
        hash:"",
        otp:""
      });
      // handling with user login inputs
      const handleState =(input)=>(e)=>{
    
        setState({...state,[input]:e.target.value});
      }
    
      const handleotp = ()=>{
        setOtpSend(true);
      }

      const handleToken = (newtoken)=>{
        setToken(newtoken);
        setState({ 
            phone:"",
            hash:"",
            otp:""
      })
     
        
    }
    const handleprime=async()=>{
      setPrimeMember(true)
      await Dbdata.post("/user", {
        user:localStorage.getItem("mob")||localStorage.getItem("email"),
        prime_status:true
       
      })
      
    }
    const handlemail = ()=>{
      setLogin(true);
    }
    return (
        <AuthContext.Provider value = {{token,handleToken,handleLogout,state,otpSend,handleState,handleotp,Primemember, handleprime,handlemail,showdata,setshowData,Login,setLogin}}>
            {children}
        </AuthContext.Provider>
    )

}