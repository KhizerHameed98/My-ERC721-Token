import './App.css';
import React, {Component} from 'react';
import Home from "./pages/Home";
import Detail from './pages/detail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './test';
import Navbar from './components/Navbar'


class App extends Component {

  render(){
    return(
  <>
  {/* <Nav /> */}
  {/* <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/detail' component ={Detail} />
          </Switch>
      
  </Router> */}
<Router>
<Navbar />

  <Switch>
<Route path='/' exact component={Test} />
<Route path='/detail' component ={Detail} />

</Switch>
</Router>
  

    </>
    )
  }
}

export default App;
