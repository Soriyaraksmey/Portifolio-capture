import { Switch, Route } from 'react-router-dom';
//import components
import AboutUs from "./pages/AboutUs";
import { Globlestyle } from './Components/GlobleStyle';
import Nav from "./Components/Nav";
import OurWork from './pages/OurWorks';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <div className="App">
      <Globlestyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutUs} />
        <Route exact path="/Ourwork" component={OurWork} />
        <Route exact path="/Contactus" component={ContactUs} />
      </Switch>
    </div>
  );


}

export default App;
