import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PriceListComponent from './components/PriceListComponent';
import OrderComponent from './components/OrderComponent';

function App() {
  return (
    <div>
      <Router>
      
            <div className="container">
              <Switch>
                <Route Path="/" exact={true} component={PriceListComponent}></Route>
                <Route Path="/Price" component={PriceListComponent}></Route>
                <Route Path="/Order" component={OrderComponent}></Route>
              </Switch>
              
            </div>
        
      </Router>
    </div>
    
  );
}

export default App;
