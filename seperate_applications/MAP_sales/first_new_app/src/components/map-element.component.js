import React , { Component } from 'react';
import Map  from "mapmyindia-react";
import Marker  from "mapmyindia-react";

import axios from 'axios';

const Sale = props => (
  <div style={{  paddingBottom : '100px'}}>
    <h6>Ownername : {props.sale.ownername}</h6>
    <h6>Sale Type : {props.sale.sale_type}</h6>
    <h6>Purpose : {props.sale.purpose}</h6>
    <h6>Address : {props.sale.location}</h6>
    <p>Co-ordinates : {props.sale.latitude} , {props.sale.longitude}</p>
    <img src={props.sale.sale_image} style={{ width: '400px' }}/>

    </div>
)

export default class SalesList extends Component {
  constructor(props){
    super(props);
    this.state = {complete_list:[],temp_list:{},sales:[],exp:[
      {
        id:"libe",
        position:[18.5314, 73.845]
      },
      {
        id:"libkew",
        position:[12,25]
      }
    ]};

  }

componentDidMount() {
  const script = document.createElement("script");

  script.src = "https://apis.mapmyindia.com/advancedmaps/v1/4x8e3vbv8ney3fdo3oz918hdiu9a3ha7/map_load?v=1.3";
  script.async = true;

  document.body.appendChild(script);

  axios.get('http://localhost:4000/sales/')
  .then(response => {
    this.setState({sales:response.data})
  })
  .catch((error) => {
    console.log(error);
  })
  this.state.complete_list = this.state.sales;
}
saleList() {
  return this.state.sales.map(currentsale => {
    return <Sale sale={currentsale} deleteSale={this.deleteSale} key={currentsale._id}/>;
  })
}
valueList() {

  return this.state.sales.map(current => {
    this.state.temp_list["position"] = [];
    this.state.temp_list.position.push(Number(current.latitude));
    this.state.temp_list.position.push(Number(current.longitude));
    this.state.complete_list.push(this.state.temp_list);
    this.state.temp_list = {};
  })
}
  render() {
    return (
      <div>
       <h3>MAP</h3>
        {this.valueList()}
        {console.log(this.state.complete_list)}


        <Map
        center={ [18.5314, 73.845]}
        zoom = {12}
        markers = {this.state.complete_list}
        // markers={[
        //   {
        //     position: [18.5314, 75.745],
        //     onClick: e => {
        //       console.log("clicked ");
        //     }
        //   },
        //   {
        //     position: [18.5314, 75.945],
        //     onClick: e => {
        //       console.log("clicked ");
        //     }
        //   },
        //   {
        //     position: [18.5314, 75.845],
        //     onClick: e => {
        //       console.log("clicked ");
        //     }
        //   }
        //
        // ]}
      />

      </div>

    )
  }
}
