import React ,{Component} from 'react'
import TextCard from './TextcardUI.jsx';
import './TextCard.css'
class TextCards extends Component{
    render(){
      return(
          <div className="container-fluid d-flex justify-content-center">
          <div className="row">
              <div className="col-md-4">
                <TextCard  title="Quote1" text="Explore houses for rent here.Choose your desired place ,price etc,Easy to use.Hope you  would have a  great deal!"/>
                
              </div>
              <div className="col-md-4">
              <TextCard title="Quote2" text="Sell your property for best price,Our app makes communication between customers Easy .Hope you  would have a  great deal!"/>
              </div>

              <div className="col-md-4">
              <TextCard title="Quote3" text="lease your property for best price,Our app makes communication between customers Easy .Hope you  would have a  great deal!!"/>
              </div>
          </div>
          </div>
      )
    }
}
export default TextCards