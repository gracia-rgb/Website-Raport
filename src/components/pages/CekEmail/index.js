import React,{useState} from 'react'
import firebase from "../../../config/Firebase";
import {useHistory} from 'react-router-dom';
import SideMenu from '../../menu/SideMenu';

const CekEmail = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let history = useHistory();
    


    const handleSubmit = (id) => {
     console.log('inin', id)
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) =>{
        console.log(res)
        const uid = res.user.uid;
        alert('Akun Terdaftar')
        history.push(`/${uid}/changeemail`)
      })
      .catch((error) =>{
          alert(error)
      history.push("/cekemail")
          });
          resetForm();
    }
    const resetForm =() => {
      setEmail("");
      setPassword("");
    }
 return (
    <div>
        <SideMenu 
           link={"/tambahuser"} title={"Tambah User"}
           link2={"/cekemail"} title2={"Ganti Email"}  
           link3={"/user"} title3={"User"} icon={""}/>
        <input
      className="formemail"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
      <br></br>
        
        <input
      className="formemail"
      placeholder="Masukkan password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      />
      <br></br>
    <button className="btnemail" type ="button" onClick={handleSubmit}>Cek Email</button>
    
   </div>
) 
 }

export default CekEmail;