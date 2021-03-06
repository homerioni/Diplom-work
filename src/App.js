import React from "react";
import './App.css';
import './fonts/stylesheet.css';
import styled from 'styled-components';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import OurWork from "./components/Pages/OurWork";
import Contacts from "./components/Pages/Contacts";
import Reviews from "./components/Pages/Reviews";

const Page = styled.div`
  padding-bottom: 100px;

  @media (max-width: 991px){
    padding-bottom: 58px;
  }
`

const App = () => {
  return (
      <BrowserRouter>
          <Page>
              <Header />
              <Switch>
                  <Route exact path={'/'} component={Home} />
                  <Route exact path={'/services'} component={Services} />
                  <Route exact path={'/our-work'} component={OurWork} />
                  <Route exact path={'/reviews'} component={Reviews} />
                  <Route exact path={'/contacts'} component={Contacts} />
              </Switch>
              <Footer />
          </Page>
      </BrowserRouter>
  );
}

export default App;
