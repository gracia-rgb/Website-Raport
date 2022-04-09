import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from '../../components/pages/Login';
import Dashboard from '../../components/pages/Dashboard';
import Profile from '../../components/pages/Profile';
import Register from '../../components/pages/Register';
import Exx from '../../components/pages/Exx';
import Search from '../../components/pages/Search';
import ChangeEmail from '../../components/pages/ChangeEmail';
import CekEmail from '../../components/pages/CekEmail';
const Routes = () => {
  return (
   <Router>
          <Switch>
          <Route exact path="/">
            <Dashboard/>
        </Route>

         <Route path="/login">
             <Login />
        </Route>       
       
       <Route path="/profile" >
           <Profile />
       </Route>

       <Route path="/register" >
           <Register />
       </Route>

       <Route path="/exx/:id" component={Exx} />
      
       <Route path="/search" component={Search} >
           <Search />
       </Route>


       <Route path="/:uid/changeemail" component={ChangeEmail} >
        
       </Route>
       
       <Route path="/cekemail" >
           <CekEmail />
       </Route>
       
      </Switch>
  
   </Router>
    );
};


export default Routes;
