import React from 'react';
import Axios from 'axios';
import { useState,useEffect } from 'react';
import './search.css'
import Col from 'react-bootstrap/Col'
import {Container,Row} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import '../bootstrap.min.css'
import Button from 'react-bootstrap/Button'
function  Search(){
  const[searchitem,setsearchitem]=useState([]);
  const[list,setList]=useState([]);
  const[sale,setsale]=useState("");
  const[rent,setrent]=useState("");
  const[lease,setlease]=useState("");
  const[house,sethouse]=useState("");
  const[land,setland]=useState("");
  const[apart,setapart]=useState("");
  const[price,setprice]=useState(0);
  const search=()=>{
  Axios.post("http://localhost:4000/search",{user:searchitem,option1:rent,option2:sale,option3:lease
  ,option4:house,option5:land,option6:apart,option7:price})
        .then(res => {
          setList(res.data);
          console.log(price)
        })
      }
    return (
      <div >
        <div style={{paddingLeft:"800px",paddingBottom:"100px"}}>
          <input type="text" className="inputclass" style={{height:"41px",paddingRight:"30px"}} onChange={(event)=>{setsearchitem(event.target.value)}}/>
          <Button variant="outline-primary" placeholder="Search..." onClick ={search} >Search</Button>{' '}
        </div>
      
        <div className="Container">
                <h5 style={{color:'purple'}}>Purpose</h5>
                <label class="container"/>Sale
                <input type="checkbox" onChange={(event)=>{setsale("sale")}} />
                <span class="checkmark"></span>

                <label class="container"/>Rent
                <input type="checkbox" onChange={(event)=>{setrent("rent")}}/>
                <span class="checkmark"></span>

                <label class="container"/>Lease
                <input type="checkbox" onChange={(event)=>{setlease("lease")}}/>
                <span class="checkmark"></span>

                <h5 style={{paddingTop:"20px",color:'purple'}}>Sale Type</h5>
                <label class="container"/>House
                <input type="checkbox" onChange={(event)=>{sethouse("house")}} />
                <span class="checkmark"></span>

                <label class="container"/>Land
                <input type="checkbox" onChange={(event)=>{setland("land")}}/>
                <span class="checkmark"></span>

               <label class="container"/>Apartment
                <input type="checkbox" onChange={(event)=>{setapart("apartment")}}/>
                <span class="checkmark"></span>

                <label class="container" style={{color:"purple"}}/>Price :
                <input type="range" id="vol" name="vol" min="100000" max="100000000" id ="demo" onChange={(event)=>{setprice(event.target.value)}}/>
                <p>Value:{price} RS</p>
                
            </div>
            <h6></h6>{
            list.map((val,key)=>{
              return(
                <div style={{paddingLeft:"200px"}}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={val.sale_image}  />
                <Card.Body>
                  <Card.Title>{val.ownername}</Card.Title>
                  <Card.Text>
                   <h6>Sale Type : {val.sale_type}</h6>
                   <h6>Purpose : {val.purpose}</h6>
                   <h6>Address : {val.location}</h6>
                    <p>Co-ordinates : {val.latitude} , {val.longitude}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
              
              )
            })
  }
  </div>
    )
}
export default Search;