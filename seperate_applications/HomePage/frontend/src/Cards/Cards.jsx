import React ,{Component} from 'react'
import Card from './CardUI';
import './Card-style.css';
import rent from '../assets/rent.png';
import sale from '../assets/sale.png';
import lease from '../assets/lease.png';
class Cards extends Component{
    render(){
      return(
          <div className="container-fluid d-flex justify-content-center">
          <div className="row">
              <div className="col-md-4">
                <Card imgsrc={rent} title="Rent" text="Explore houses for rent here.Choose your desired place ,price etc,Easy to use.Hope you  would have a  great deal!"/>
                
              </div>
              <div className="col-md-4">
              <Card imgsrc={sale} title="Sale" text="Sell your property for best price,Our app makes communication between customers Easy .Hope you  would have a  great deal!"/>
              </div>

              <div className="col-md-4">
              <Card imgsrc={lease} title="Lease" text="lease your property for best price,Our app makes communication between customers Easy .Hope you  would have a  great deal!!"/>
              </div>
          </div>
          </div>
      )
    }
}
export default Cards