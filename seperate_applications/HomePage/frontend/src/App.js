import React from 'react'
import NavbarPage from './components/Navbar.js'
import SearchBar from './components/SearchBar.js'
import CarosalPage from './components/CarouselPage.jsx'
import FooterPage from './components/FooterPage.js'
import Header from './components/Header.js'
import TextCards from './TextCard/TextCards.jsx';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from './Cards/Cards.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from './home'
function App() {
  return (
    <Router>
    <main className="screen" >
   
    <HomePage/>
    </main>
    </Router>

  );
}

export default App;
