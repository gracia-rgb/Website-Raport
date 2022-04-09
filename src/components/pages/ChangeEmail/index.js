import React,{useState} from 'react'
import firebase from "../../../config/Firebase";
import SideMenu from '../../menu/SideMenu';
import { useParams, useHistory } from 'react-router-dom';
const ChangeEmail = () => {
  const {uid} = useParams()
  const [email, setEmail] = useState("");
  
  const user = firebase.auth().currentUser;
    const handleEmailReset = (e) => {
      const data ={
        email: email,
      }
      e.preventDefault()
        user.updateEmail(email).then(() => {
            alert('verifikasi done')    
     firebase.database().ref(`student/${uid}`).update(data)
        }).catch((error) => {
           alert(error)
        });
        resetForm();
    }
    const resetForm =() => {
      setEmail("");
    }
 return (
    <div>
        <SideMenu />
        <br></br>
        <input
      className="formemail"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <br></br>
    <button className="btnemail" type ="button" onClick={handleEmailReset}>Ganti Email</button>
    
   </div>
) 
 }

export default ChangeEmail;