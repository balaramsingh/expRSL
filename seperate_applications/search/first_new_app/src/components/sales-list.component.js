import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';


import axios from 'axios';




const Sale = props => (
  <div style={{  paddingBottom : '100px'}}>
    <h6>Sale Type : {props.sale.sale_type}</h6>
    <h6>Purpose : {props.sale.purpose}</h6>
    <h6>Address : {props.sale.location}</h6>
    <p>Co-ordinates : {props.sale.latitude} , {props.sale.longitude}</p>
    <img src={props.sale.sale_image} style={{ width: '400px' }}/>
      <Link to={"/edit/"+props.sale._id}>edit</Link> | <a href="/#" onClick={() => { props.deleteSale(props.sale._id) }}>delete</a>
    </div>
)

const Sale1 = props => (
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

    this.deleteSale = this.deleteSale.bind(this);
    this.my_sales = this.my_sales.bind(this);
    this.state = {sales:[],sales1:[],cur_user:'bob'};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/sales/saleowner/'+this.state.cur_user)
    .then(response => {
      this.setState({sales:response.data})
    })
    .catch((error) => {
      console.log(error);
    })
    axios.get('http://localhost:4000/sales/saleownerNOT/'+this.state.cur_user)
    .then(response => {
      this.setState({sales1:response.data})
    })
    .catch((error) => {
      console.log(error);
    })
  }

  deleteSale(id) {
    axios.delete('http://localhost:4000/sales/'+id)
    .then(res=>console.log(res.data));
    this.setState({
      sales:this.state.sales.filter(el => el._id !== id)
    })
  }
  my_sales() {
    let offsetTop  = document.getElementById("my-sales").offsetTop;
    window.scrollTo({
        top: offsetTop-100,
        behavior: "smooth"
    });
  }
  saleList() {
    return this.state.sales.map(currentsale => {
      return <Sale sale={currentsale} deleteSale={this.deleteSale} key={currentsale._id}/>;
    })
  }

  saleList_1() {
    return this.state.sales1.map(currentsale => {
      return <Sale1 sale={currentsale} deleteSale={this.deleteSale} key={currentsale._id}/>;
    })
  }

  render() {
    return (
      <div>
        <div>
          <h5> Current USER : {this.state.cur_user}</h5>
          <h3 > SALES </h3>
          <Button variant="outline-primary" onClick={this.my_sales} >My Sales</Button>{' '}

            {this.saleList_1()}
        </div>
        <div id="my-sales" >
          
        <h3 style={{paddingBottom:'50px'}}>MY Sales</h3>
          {this.saleList()}
        </div>
      </div>

    )
  }
}
