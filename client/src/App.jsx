
import './App.css';
import { Sighin } from './components/Signin/Sighin';
import { SignOther } from './components/Signin/SignOther';
import { VerifyOtp } from './components/Signin/VerifyOtp';
import {Switch, Route, Redirect} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Home } from './components/Home';

function App() {

  const {token, handleToken, handleLogout, otpSend} = useContext(AuthContext);

  const handleSignIN = ()=>{
    const newtoken = Date.now();
    handleToken(newtoken);
    
}
const handleSignOut = ()=>{

  handleLogout();
}
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/signin">
          <Sighin />
        </Route>
        <Route path="/verifyOtp">
          <VerifyOtp />
        </Route>
        <Route path="/signinOther">
          <SignOther />
        </Route>

      </Switch>

     {/* <VerifyOtp />  */}
     {/* <SignOther /> */}
   
      
    </div>
  );
}

export default App;
