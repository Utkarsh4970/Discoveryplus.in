
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
function App() {
  return (
    <div className="App fluid-container pb-0">
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <Carosule />
          <Slider></Slider>
          <Showlove />
          <Newly />
          <Free/>
          <Best/>
          <Hindi/>
          <Tamil/>
          <Famous/>
        </Route>
        <Route path="/showall" >
          <Showloveall />
        </Route>
        <Route path="/watch" >
          <Watch />
        </Route>
        <Route path="/swatch" >
          <Sliderwatch />
        </Route>
      </Switch>
      <Footer/>
    </div >
  );
}

export default App;
