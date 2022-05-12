import React, {useState} from "react";
import firebase from "../../../config/Firebase";
import {useHistory, Link} from 'react-router-dom';
import "../../../App.css";

const WaliKelas = () => {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [angkatan, setAngkatan] = useState("");
    let history = useHistory();
    const resetForm =() => {
      setEmail("");
      setPassword("");
    };
    const handleSubmit = () => {
     
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => 
      {
          const uid = res.user.uid;
          console.log(email);
            history.push(`/${email}/walikelashome/${angkatan}`)
        })
      .catch((error) =>{
          alert(error)
         
          });
      resetForm();
    }
    
  return(
  <>
      <div>
          <div className="sebagai1">
          <h1>Login</h1>
          </div>
      <div className="formm" >
   <div  className="mb-3">
    <label className="form-label">Email</label>
    <input 
      placeholder="Email" className="form-control"   onChange={(e) => setEmail(e.target.value)} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input 
      placeholder="Password" type="password"  className="form-control"  onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Angkatan</label>
    <input 
      placeholder="Angkatan Kelas Yang Di Pegang" className="form-control" value={angkatan} onChange={(e) => setAngkatan(e.target.value)}/>
  </div>
  <button type="button"  className="btnadmin" onClick={handleSubmit} >Login</button>
  <div><p className="forgot"><Link className="link" to={"/forgot"}>Forgot Password</Link></p>
  </div>
</div>
      </div>
  </>
  )
}

export default WaliKelas;
