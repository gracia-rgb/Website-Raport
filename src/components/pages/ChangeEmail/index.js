import React,{useState} from 'react'
import firebase from "../../../config/Firebase";
import SideMenu from '../../menu/SideMenu';
import { useParams} from 'react-router-dom';
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
            alert('Email Berhasil Di Ubah')    
     firebase.database().ref(`/walikelas/${uid}`).update(data)
        }).catch((error) => {
           alert(error)
        });
        resetForm();
    }
    const resetForm =() => {
      setEmail("");
    }

    const handleEmailResetOp = (e) => {
      const data ={
        email: email,
      }
      e.preventDefault()
        user.updateEmail(email).then(() => {
            alert('Email Berhasil Di Ubah')    
     firebase.database().ref(`/operator/${uid}`).update(data)
        }).catch((error) => {
           alert(error)
        });
        resetForm();
    }

    const handleEmailResetSt = (e) => {
      const data ={
        email: email,
      }
      e.preventDefault()
        user.updateEmail(email).then(() => {
            alert('Email Berhasil Di Ubah')    
     firebase.database().ref(`/student/${uid}`).update(data)
        }).catch((error) => {
           alert(error)
        });
        resetForm();
    }
   
 return (
    <div>
        <SideMenu 
           link={"/tambahuser"} title={"Tambah User"}
           link2={"/cekemail"} title2={"Ganti Email"}  
           link3={"/user"} title3={"User"} icon={""}/>
        <br></br>
     
    <br></br>
    <h1>Ganti Email</h1>
    <button className="btnform btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#walikelas" >
    Wali Kelas
  </button>

<div className="collapse" id="walikelas">
  <div className='boxform'>
  <input
      className="regs"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
<br></br>
<button className="buatbtn" type ="button" onClick={handleEmailReset}>Ganti Email</button>
  </div>
</div>

<button className="btnform btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#operator" >
    Operator
  </button>

<div className="collapse" id="operator">
  <div className='boxform'>
  <input
      className="regs"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
<br></br>
<button className="buatbtn" type ="button" onClick={handleEmailResetOp}>Ganti Email</button>
  </div>
</div>
   
<button className="btnform btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#student" >
    Siswa
  </button>

<div className="collapse" id="student">
  <div className='boxform'>
  <input
      className="regs"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
<br></br>
<button className="buatbtn" type ="button" onClick={handleEmailResetSt}>Ganti Email</button>
  </div>
</div>
   
    
   </div>
) 
 }

export default ChangeEmail;