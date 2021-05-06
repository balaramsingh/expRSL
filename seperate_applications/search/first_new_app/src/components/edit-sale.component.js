import React , { Component } from 'react';
import axios from 'axios';

export default class EditSale extends Component {
  constructor(props) {
    super(props);

    this.onChangeOwnername = this.onChangeOwnername.bind(this);
    this.onChangeSaletype = this.onChangeSaletype.bind(this);
    this.onChangePurpose = this.onChangePurpose.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



    this.state = {
      ownername: '',
      sale_type: '',
      purpose: '',
      price: 0,
      location: '',
      sale_types: [],
      purpose_types: []
    }
  }

  componentDidMount() {
    this.setState({
      sale_types: ['house','land','apartment'],
      purpose_types: ['sale','rent','lease'],
    });

    axios.get('http://localhost:4000/sales/'+this.props.match.params.id)
    .then(response =>{
      this.setState({
        ownername : response.data.ownername,
        sale_type : response.data.sale_type,
        purpose : response.data.purpose,
        price : response.data.price,
        location : response.data.location
      })
    })
    .catch(function(error){
      console.log(error);
    })

  }

  onChangeOwnername(e) {
    this.setState({
      ownername: e.target.value
    });
  }

  onChangeSaletype(e) {
    this.setState({
      sale_type: e.target.value
    });
  }

  onChangePurpose(e) {
    this.setState({
      purpose: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const Sale ={
      ownername: this.state.ownername,
      sale_type: this.state.sale_type,
      purpose: this.state.purpose,
      price: this.state.price,
      location: this.state.location,
    }

    console.log(Sale);

    axios.post('http://localhost:4000/sales/update/'+this.props.match.params.id,Sale)
    .then(res=> console.log(res.data));


    window.location = '/';
  }


  render() {
    return (
      <div>
        <h3>Edit Sale</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>OwnerName : </label>
          <input type="text" required className="form-control" value={this.state.ownername} onChange={this.onChangeOwnername}/>
        </div>

        <div className="form-group">
          <label>Sale Type : </label>
          <select ref="userInput" required className="form-control" value={this.state.sale_type} onChange={this.onChangeSaletype}>
          {
            this.state.sale_types.map(function(sale) {
              return <option
              key={sale}
              value={sale}>{sale}
              </option>;
            })
          }
          </select>
        </div>

        <div className="form-group">
          <label>Purpose Type : </label>
          <select ref="userInput" required className="form-control" value={this.state.purpose} onChange={this.onChangePurpose}>
          {
            this.state.purpose_types.map(function(sale) {
              return <option
              key={sale}
              value={sale}>{sale}
              </option>;
            })
          }
          </select>
        </div>


        <div className="form-group">
          <label>Price (In Rupees) : </label>
          <input type="text" required className="form-control" value={this.state.price} onChange={this.onChangePrice}/>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Sale" className="btn btn-primary" />
        </div>


        </form>
        </div>

    )
  }
}
