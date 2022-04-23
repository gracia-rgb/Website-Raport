import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from '../../components/pages/Login';
import Profile from '../../components/pages/Profile';
import Register from '../../components/pages/Register';
import Exx from '../../components/pages/Exx';
import Search from '../../components/pages/Search';
import ChangeEmail from '../../components/pages/ChangeEmail';
import CekEmail from '../../components/pages/CekEmail';
import Loginn from '../../components/pages/Loginn';
import Admin from '../../components/pages/Admin';
import Operator from '../../components/pages/Operator';
import WaliKelas from '../../components/pages/WaliKelas';
import AdminHome from '../../components/pages/AdminHome';
import OperatorHome from '../../components/pages/OperatorHome';
import WaliKelasnHome from '../../components/pages/WaliKelasHome';
import TambahUser from '../../components/pages/TambahUser';
import User from '../../components/pages/User';
import TambahSiswa from '../../components/pages/TambahSiswa';
import Daftar from '../../components/pages/Daftar';
import Upload from '../../components/pages/Upload';
import Forgot from '../../components/pages/ForgotPass';
import PrivateRoute from '../../PrivateRoute';
import { AuthContextProvider, useAuthState } from '../Firebase';
import { Redirect } from 'react-router-dom';
const Routes = () => {
  const AuthenticatedRoute = ({component: C, ...props}) =>{
    
    const {isAuthenticated} = useAuthState()
    return(
      <Route {...props}
      render={routeProps =>
      !isAuthenticated ? < C {...routeProps} /> : <Redirect to={"/"} />}
    />
      )
  }
  return (
   <Router>
          <Switch>
          <Route exact path="/">
          <Loginn />
        </Route>
        

        <Route exact path="/admin">
          <Admin/>
        </Route>
        
        <Route exact path="/operator">
          <Operator />
        </Route>

        <Route exact path="/walikelas">
          <WaliKelas />
        </Route>

        <Route exact path="/user">
          <User />
        </Route>

        <Route exact path="/forgot">
          <Forgot />
        </Route>

        <Route exact path="/:uid/adminhome">
          <AdminHome/>
        </Route>
        
        <Route exact path="/:uid/operatorhome">
          <OperatorHome/>
        </Route>

        <Route exact path="/editdatasiswa">
          <TambahSiswa/>
        </Route>
        
        
        <Route exact path="/:uid/daftarsiswa">
          <Daftar/>
        </Route>

        <Route exact path="/upload">
          <Upload/>
        </Route>

  <Route exact path="/:uid/walikelashome">
  <WaliKelasnHome/>
  </Route>


        <Route exact path="/tambahuser">
          <TambahUser/>
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

      <Route path="/:uid/exx/:id" component={Exx} />
      
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
