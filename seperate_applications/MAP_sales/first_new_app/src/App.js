import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import SalesList from "./components/sales-list.component"
import EditSale from "./components/edit-sale.component"
import CreateSale from "./components/create-sale.component"
import MapElement from "./components/map-element.component"

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <br />
      <Route path="/" exact component={SalesList} />
      <Route path="/edit/:id" exact component={EditSale} />
      <Route path="/create" exact component={CreateSale} />
      <Route path="/map" exact component={MapElement} />
    </div>
    </Router>
  );
}

export default App;
