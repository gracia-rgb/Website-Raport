import React, { useState } from "react";
import firebase from "../../../config/Firebase"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Register = () => {
  const [namaLengkap, setnamaLengkap] = useState("");
  const [waliKelas, setwaliKelas] = useState("");
  const [nomorTelepon, setnomorTelepon] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const onSubmit = () => {
     const data = {
       namaLengkap : namaLengkap,
       waliKelas: waliKelas,
       nomorTelepon: nomorTelepon,
       email: email,
     }
     firebase.auth().createUserWithEmailAndPassword(email, password)
     .then((userCredential) => {
       //simpan ke realtime database
       const userId = userCredential.user.uid;
       firebase.database().ref('users/' + userId).set(data);
      setnamaLengkap('')
      setEmail('')
     setPassword('')
       // redirect ke halaman dashboard
     history.push("/")
     alert('Akun berhasil dibuat')
     })
     .catch((error) => {
       console.log(error)
   //tampilkan pesan error
     });
   
     };


  return (
    //JSX
    <div>
    
      <h1 className="">Buat Akun</h1>
  
      <input
        className="regs"
        placeholder="Nama Lengkap"
        value={namaLengkap}
        onChange={(e) => setnamaLengkap(e.target.value)}
      />
      
      <input
        className="regs"
        placeholder="Wali Kelas"
        
        value={waliKelas}
        onChange={(e) => setwaliKelas(e.target.value)}
      />
    
      <input
        className="regs"
        placeholder="Nomor Telepon"
        value={nomorTelepon}
        onChange={(e) => setnomorTelepon(e.target.value)}
      />
    
      <input
        className="regs"
        placeholder="Email"
        type="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    
      <input
        className="regs"
        placeholder="Kata Sandi"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button className ="regsbutton" onClick={onSubmit} >Register</button>
     
    </div>
  );
};

export default Register;
