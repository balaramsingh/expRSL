import React from "react";
import {Card,Button } from "react-bootstrap";
import "./Navbar.css"
const FooterPage = () => {
  return (
     
    <Card className="text-center NavbarColour" style={{ marginTop:'200px'}}>
    <Card.Header style={{color:"white"}}>Exprsl</Card.Header>
    <Card.Body>
      <Card.Title style={{color:"white"}}>Built with REACT,JS,HTML,CSS</Card.Title>
      <Card.Text style={{color:"white"}}>
      Our idea is to develop an application , where users could explore nearby houses, plots , furnished rooms , rentals and lease . Our Application would be a medium between , the owners who are ready to sell or rent people who are in search of a property/home.
      </Card.Text>
      <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
    </Card.Body>
    <Card.Footer style={{color:"black"}}>copy rights Exprsl</Card.Footer>
    
  </Card>
  );
}

export default FooterPage;

