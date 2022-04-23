import React, {useState} from "react";
import "../../../App.css";
import firebase from "../../../config/Firebase";
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const handleClick = () => {
      history.push("/register")
    }
    const resetForm =() => {
      setEmail("");
      setPassword("");
    };
    const handleSubmit = () => {
      const data = {
        email: email,
        password: password,
      };
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => history.push("/"))
       
      .catch((error) =>{
          alert(error)
         
          });
      resetForm();
    }
  
return (

    <div className="body">
     
      <div className="login-container">
      
        <form className="row">
        <h1>Masuk</h1>
        
        <input
      className="form"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
      
        
        <input
      className="form"
      placeholder="Masukan password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      />
    <button className="btn" type ="button" onClick={handleSubmit}>Login</button>
    
    <p className="atau1">Atau</p>
    
    <button className="buat" type="button" onClick={handleClick}>Buat Akun</button>
    </form>
    </div>
    </div>

  


);
};

export default Login;
