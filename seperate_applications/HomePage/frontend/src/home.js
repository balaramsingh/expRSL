import React from 'react'
import CarosalPage from './components/CarouselPage.jsx'
import FooterPage from './components/FooterPage.js'
import Header from './components/Header.js'
import TextCards from './TextCard/TextCards.jsx';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from './Cards/Cards.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function HomePage() {
  return (
    <Router>
    <main className="screen" >
     <Header/>
   <CarosalPage/>
   <h1 className="text-center" style={{paddingTop:"80px",color:"#AA00FF"}}>Welcome to expRSL,Explore rent, lease ,sales</h1>
  <Card/>
    <h3 className="text-center" style={{paddingTop:"80px",color:"#AA00FF"}}>
    Explore houses for rent here.Choose your desired place ,price etc,Easy to use.
  Sell your property for best price,Our app makes communication between customers Easy .
  lease your property for best price,Our app makes communication between customers Easy .Hope you  would have a  great deal!
    </h3>
   <TextCards/>
   <FooterPage/>

    </main>
    </Router>

  );
}

export default HomePage;
