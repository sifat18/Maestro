import React, { useEffect } from 'react';
// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

// react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Health from './Components/HealthTips/Health';
import Details from './Components/Details/Details';

function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="App">
      {/* router container */}
      <BrowserRouter>
        {/* nav links */}
        <Header></Header>
        {/* setting routes */}
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/service/:id'>
            <Details></Details>
          </Route>
          <Route path='/service'>
            <Services></Services>
          </Route>
          <Route path='/health'>
            <Health></Health>
          </Route>

          <Route path='*'>
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
