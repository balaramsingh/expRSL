import React , { Component } from 'react';
import axios from 'axios';


export default class CreateSale extends Component {
  constructor(props) {
    super(props);

    this.onChangeOwnername = this.onChangeOwnername.bind(this);
    this.onChangeSaletype = this.onChangeSaletype.bind(this);
    this.onChangePurpose = this.onChangePurpose.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeLatitude = this.onChangeLatitude.bind(this);
    this.onChangeLongitude = this.onChangeLongitude.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



    this.state = {
      ownername: '',
      sale_type: '',
      purpose: '',
      price: 0,
      location: '',
      latitude: '',
      longitude: '',
      sale_image: '',
      sale_types: [],
      address: '',
      purpose_types: []
    }
  }

  componentDidMount() {
    this.setState({
      sale_types: ['house','land','apartment'],
      purpose_types: ['sale','rent','lease'],
      sale_type : 'house',
      purpose : 'sale',
    });


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

  onChangeLatitude(e) {
    this.setState({
      latitude: e.target.value
    })
  }
  onChangeLongitude(e) {
    this.setState({
      longitude: e.target.value
    })
  }
  onFileChange(e) {
        this.setState({ sale_image: e.target.files[0] })
    }



  onSubmit(e) {
    e.preventDefault();
    this.componentDidMount();

    const Sale ={
      ownername: this.state.ownername,
      sale_type: this.state.sale_type,
      purpose: this.state.purpose,
      price: this.state.price,
      location: this.state.location,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      sale_image: this.sale_image,
    }

    console.log(Sale);
    const formData = new FormData()
    formData.append('ownername',this.state.ownername)
    formData.append('sale_type',this.state.sale_type)
    formData.append('purpose',this.state.purpose)
    formData.append('price',this.state.price)
    formData.append('location',this.state.location)
    formData.append('latitude',this.state.latitude)
    formData.append('longitude',this.state.longitude)
    formData.append('sale_image', this.state.sale_image)
    axios.post('http://localhost:4000/sales/add',formData)
    .then(res=> console.log(res.data));

    window.location = '/';
  }






  render() {
    return (
      <div>
        <h3>Create new Sale</h3>
        <form onSubmit={this.onSubmit} encType="multipart/form-data">
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
          <label>Location : </label>
          <input type="text" required className="form-control" value={this.state.location} onChange={this.onChangeLocation}/>
        </div>

        <div className="form-group">
          <label>Image : </label>
          <input type="file" required className="form-control" onChange={this.onFileChange}/>
        </div>

        <div className="form-group">
          <input type="submit" value="CreateSale" className="btn btn-primary" />
        </div>
        </form>
        </div>


    )
  }
}
