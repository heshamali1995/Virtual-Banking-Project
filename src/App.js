import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Index from './components/Index/Index';
import SignIn from './components/SignIn/SignIn';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Index />}/>
          <Route path="/signin" element={<SignIn />}/>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App;