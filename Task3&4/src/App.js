import React,{Component} from 'react';
import Home from './Home/Home';
import './App.css';
import Profile from './Profile/Profile';
import SidePanel from './SidePanel/SidePanel';
import Login from './Login/Login';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './Header/Header';
import Railway from './Railway/Railway';
import Register from './Login/Register/Register'
import Signin from './Login/Signin/Signin';
import Office from './Office/Office';
import Course from './Course/Course';
import Examcell from './Examcell/Examcell';

class App extends Component  {
 
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
    }
  
    render() {
      return (
        <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/profile" component={Profile} />
            <Route path='/course' component={Course}/>
            <Route path="/examcell" component={Examcell} />
            <Route path="/office" component={Office} /> 
            <Route path="/railway" component={Railway} />
            <Route path="/logout" component={Login} />
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />




            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>

      );
    }
  }

 

export default App;
