import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Admin, Footer, Blog, Offer, Features, Header, About } from './containers';
import { Location, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <>
    <div className="App">
      <Routes>
        <Route
          path="/admin"
          element={
            <Admin />
                          }
        />
        <Route
          path="/"
          element={(
            <>
              <div className="gradient__bg">
                <Navbar />
                <Header />
              </div>
              <Brand />
              <About />
              <Features />
              <Offer />
              <Location />
              <Blog />
              <Footer />
            </>
          )}
        />
      </Routes>
    </div>
  </>
);

export default App;
