
import './App.css';
import { Sighin } from './components/Signin/Sighin';
import { SignOther } from './components/Signin/SignOther';
import { VerifyOtp } from './components/Signin/VerifyOtp';
function App() {

  return (
    <div className="App">
      {/* <Sighin />
     <VerifyOtp /> */}
     <SignOther />
    </div>
  );
}

export default App;
