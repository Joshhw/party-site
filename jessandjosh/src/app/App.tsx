import React from 'react';
import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import style from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
const ContentWrapper = style.div`
  position: relative;
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <ContentWrapper>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ContentWrapper>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
