import React, {useState} from "react";
import firebase from "../../../config/Firebase";
import {useHistory} from 'react-router-dom';
const Forgot = () => {
    const [email, setEmail] = useState('');
    let history = useHistory();
    const handle = () => {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(res => {
            alert("Silahkan Periksa Email Anda")
            history.push(`/`)
      
        })
        .catch(error => {
            alert(error)
        
        });
    };
    return(
     <div>
    <div className="forgt">
    <p className="rst">Reset Password</p>
    <br></br>
    <p className="seml">Silahkan Masukan Email</p>
      <input
      className="form"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    </div>
    <button className="frgtbtn" type ="button" onClick={handle}>Kirim Reset Password</button>
        </div>
    )
}

export default Forgot;