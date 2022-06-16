import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Accessibility from './components/Accessibility';
import Home from './components/Home';
import React from 'react';
import ServiceFooter from './components/ServiceFooter';
import ServiceHeader from './components/ServiceHeader';

function App() {

  return (
    <>
    <BrowserRouter>
        <ServiceHeader />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/frontend/accessibility-statement" element={<Accessibility />} />
                </Routes>
            </div>
        <ServiceFooter />
    </BrowserRouter>
    </>
  )
}

export default App
