import { Switch, Route, useLocation } from 'react-router-dom';
//import components
import AboutUs from "./pages/AboutUs";
import { Globlestyle } from './Components/GlobleStyle';
import Nav from "./Components/Nav";
import OurWork from './pages/OurWorks';
import ContactUs from './pages/ContactUs';
import MovieDetails from './pages/MovieDetails';
//Animation
import { AnimatePresence } from 'framer-motion';
//style
import "./stylecss.css";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Globlestyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs} />
          <Route exact path="/work" component={OurWork} />
          <Route path="/work/:id" component={MovieDetails} />
          <Route exact path="/Contactus" component={ContactUs} />
        </Switch>
      </AnimatePresence>
    </div>
  );


}

export default App;
