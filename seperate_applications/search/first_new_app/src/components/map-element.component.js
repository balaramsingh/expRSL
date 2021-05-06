import React , { Component } from 'react';
import Map from "mapmyindia-react";

import axios from 'axios';

export default class SalesList extends Component {
  constructor(props){
    super(props);

    this.state = {sales:[]};
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

}
  render() {
    return (
      <div>
       <h3>MAP</h3>
        <Map
          center = {[19.5314, 73.845]}
          // markers={[
          //   {
          //     position: [18.5314, 73.945],
          //     draggable: true,
          //     title: "Marker title",
          //     onClick: e => {
          //       console.log("clicked ");
          //     },
          //     onDragend: e => {
          //       console.log("dragged");
          //     }
          //   }
          // ]}
        />
      </div>

    )
  }
}
