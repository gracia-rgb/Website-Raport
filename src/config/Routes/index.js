import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Profile from '../../components/pages/Profile';
import Register from '../../components/pages/Register';
import Exx from '../../components/pages/Exx';
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
import Forgot from '../../components/pages/ForgotPass';
import ViewNilai from '../../components/pages/ViewNilai';
import OpAngkatan from '../../components/pages/OpAngkatan';
import ViewNilai2 from '../../components/pages/ViewNilai2';
import ViewNilai3 from '../../components/pages/ViewNilai3';
import ViewNilai4 from '../../components/pages/ViewNilai4';
import ViewNilai5 from '../../components/pages/ViewNilai5';
import ViewNilai6 from '../../components/pages/ViewNilai6';
const Routes = () => {
  
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

        <Route exact path="/OpAngkatan">
          <OpAngkatan/>
        </Route>
        <Route exact path="/editdatasiswa/:angkatan">
          <TambahSiswa/>
        </Route>
        
        
        <Route exact path="/:uid/daftarsiswa/:angkatan">
          <Daftar/>
        </Route>

    

       <Route exact path="/:uid/walikelashome/:angkatan">
       <WaliKelasnHome/>
       </Route>
         <Route exact path="/:uid/viewnilai/:id/:angkatan">
        <ViewNilai/>
       </Route>
       
       <Route exact path="/:uid/viewnilai2/:id/:angkatan">
        <ViewNilai2/>
       </Route>

       <Route exact path="/:uid/viewnilai3/:id/:angkatan">
        <ViewNilai3/>
       </Route>

       <Route exact path="/:uid/viewnilai4/:id/:angkatan">
        <ViewNilai4/>
       </Route>
       
       <Route exact path="/:uid/viewnilai5/:id/:angkatan">
        <ViewNilai5/>
       </Route>
       
       <Route exact path="/:uid/viewnilai6/:id/:angkatan">
        <ViewNilai6/>
       </Route>
        <Route exact path="/tambahuser">
          <TambahUser/>
        </Route>

      
       
       <Route path="/profile" >
           <Profile />
       </Route>

       <Route path="/register" >
           <Register />
       </Route>

      <Route path="/:uid/exx/:id/:angkatan" component={Exx} />

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
