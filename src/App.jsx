
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Industry from "./pages/Industry"; 
import Slider from './components/Slider';
import Manexperiance from './components/Manexperiance';
import Bpmservice from './components/Bpmservice';
import Strategy from './components/Strategy';
import Crad from './components/Crad';
import Intelligence from './components/Intelligence';
import Customer from './components/Customer';
import Contact from './components/Contact';
import NewsSection from './components/NewsSection';
import FooterSection from './components/FooterSection';
import Career from './pages/Career';
import Blog from './pages/Blog';
import Ourservice from './pages/Ourservice';


import EximiContactUS from './pages/EximiContactUS';
import ServicePage from './pages/ServicePage';
import BlogNewsData from './pages/BlogNewsData';
import ScrollToTop from './components/ScrollToTop';
import { UseProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
// import LoginPage from './pages/LoginPage';

function App() {
  return (
    <UseProvider>
      <ThemeProvider>
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Slider />
              <Manexperiance />
              <Bpmservice />
              <Strategy />
              <Crad />
              <Intelligence />
              <Customer />
              <Contact />
              <NewsSection />
              <FooterSection />
            </>
          }
        />
        <Route path="/industry" element={<Industry />} />
        <Route path='/career' element={<Career/>} />
        <Route path='/blog' element={<Blog/>}/>
         {/* <Route path='/login' element={<LoginPage/>}/> */}
        <Route path='/blognewsdata/:id' element={<BlogNewsData/>}/>
        <Route path="/ourservice" element={<Ourservice />} />
        <Route path='/contact' element={<EximiContactUS/>}/>
        <Route path="/ourservice/:slug" element={< ServicePage/>} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </UseProvider>
  );
}

export default App;
