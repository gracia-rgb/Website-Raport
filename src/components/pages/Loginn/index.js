import React, {useState} from "react";
import "../../../App.css";
import {useHistory} from 'react-router-dom';
const Loginn = () => {
  const [id, setId] = useState("")
    let history = useHistory();
  
    const submit = () => {
      if (id == 1290) {
        history.push("/operator")
      }else if (id == 1930) {
        history.push("/walikelas")
      }else if (id == 1890) {
        history.push("/admin")
      }else {
        alert("ID yang anda masukan tidak terdaftar")
      }
    }
  return(
  <>
      <div className="sebagai">
      <h1>Masukan ID </h1>
      </div>
    <div  className="container">
    <div  className="row g-2">
       <input className="form-control" type="password"  placeholder="ID Sesuai Jenis Pengguna" value={id}  onChange={(e) => setId(e.target.value)}/>
       <br></br>
        <button  className="p-3" onClick={submit}>Submit</button>

        </div>
  </div>
  </>
  )
}

export default Loginn;
