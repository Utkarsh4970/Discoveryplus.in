
import './App.css';
import Carosule from './Component/Pages/Home/Carosule';
import Navbar from './Component/Pages/Navbar/Navbar';
import Slider from './Component/Pages/Home/Slider';
import Showlove from './Component/Pages/Home/Showlove';
import Showloveall from './Component/Pages/Home/Showloveall';
import Newly from './Component/Pages/Home/Newly'
import { Switch, Route } from 'react-router-dom';
import Watch from './Component/Pages/Watch/Watch';
import Free from './Component/Pages/Home/Free';
import Best from './Component/Pages/Home/Best';
import Hindi from './Component/Pages/Home/Hindi'
import Tamil from './Component/Pages/Home/Tamil'
import Famous from './Component/Pages/Home/Famous';
import Sliderwatch from './Component/Pages/Watch/Sliderwatch';
import { Footer } from './Component/Pages/Footer/Footer';
//
import UPIPayment from './Component/Pages/Payment/UPIPayment';
import Voucher from './Component/Pages/Payment/Voucher';
import CreaditCard from './Component/Pages/Payment/CreaditCard';
import { PaymentMethod } from './Component/Pages/Payment/PaymentMethod';

function App() {
  return (
    <div className="App fluid-container pb-0">

      <Switch>
        <Route path="/" exact>
          <Navbar></Navbar>
          <Carosule />
          <Slider></Slider>
          <Showlove />
          <Newly />
          <Free />
          <Best />
          <Hindi />
          <Tamil />
          <Famous />
          <Footer />
        </Route>
        <Route path="/showall" >
          <Navbar></Navbar>
          <Showloveall />
          <Footer />
        </Route>
        <Route path="/watch" >
          <Navbar></Navbar>
          <Watch />
          <Footer />
        </Route>
        <Route path="/swatch" >
          <Navbar></Navbar>
          <Sliderwatch />
          <Footer />
        </Route>
        <Route exact path="/payment" >
          <PaymentMethod />
        </Route>
        <Route path='/payment/upi' >
        <UPIPayment />
        </Route>
        <Route path='/payment/voucher' >
          <Voucher/>
        </Route>
        <Route path='/payment/card' >
          <CreaditCard/>
        </Route>
      </Switch>

    </div >
  );
}

export default App;
