import React, {useState} from "react";
import "../../../App.css";
import {useHistory} from 'react-router-dom';
const Loginn = () => {
    let history = useHistory();
    const handleAdmin = () => {
      history.push("/admin")
    }
    const handleOperator= () => {
      history.push("/operator")
    }
    const handleWalikelas = () => {
      history.push("/walikelas")
    }
    const handleClick = () => {
      history.push("/register")
    }
  return(
  <>
      <div className="sebagai">
      <h1 >Login Sebagai</h1>
      </div>
    <div  className="container">
    <div  className="row g-2">
      
        <button  className="p-3" onClick={handleAdmin}>Admin</button>
        <button  className="p-3" onClick={handleOperator}>Operator</button>
        <button  className="p-3" onClick={handleWalikelas}>Wali Kelas</button>

        <p  className="p">Atau</p>
        <button type="button" class="btn1 btn-info btn-lg"  onClick={handleClick}>Buat Akun</button>
        </div>
  </div>
  </>
  )
}

export default Loginn;
