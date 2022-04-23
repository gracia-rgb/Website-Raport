import React, {useState, useEffect} from "react";
import "../../../App.css";
import SideMenu from "../../menu/SideMenu";
import firebase from "../../../config/Firebase";

import {useHistory, useParams} from 'react-router-dom';
const Daftar = () => {
  const {uid} = useParams()
  console.log('uid',{uid})
    const [linksem1, setLinkSem1] = useState('')
    const [linksem2, setLinkSem2] = useState('')
    const [linksem3, setLinkSem3] = useState('')
    const [linksem4, setLinkSem4] = useState('')
    const [linksem5, setLinkSem5] = useState('')
    const [linksem6, setLinkSem6] = useState('')
    const [selectedKegiatan, setSelectedKegiatan] = useState({})
    const [students, setStudents] = useState([]);
  useEffect(() => {
      //student
      firebase.database().ref('/student').on("value", (res) => {
        if(res.val()) {
            //ubah menjadi array
           const rawData = res.val();
            const studentArr =[];
            Object.keys(rawData).map((item) => {
              studentArr.push({
                  id: item,
                  ...rawData[item],
              });
            });
            setStudents(studentArr);
          }
      });
    },[])
    let history = useHistory();
  const handleClick = (id) => {
    console.log(id);
    history.push(`/${uid}/exx/${id}`)
  }
  const onSubmit = () =>{
    const data ={
        linksem1: linksem1,
    }
    firebase.database().ref(`student/${selectedKegiatan.id}`).update(data);
    resetform();
    alert("Link Berhasil Di Post")
}
const onSubmit2 = () =>{
    const data ={
        linksem2: linksem2,
    }
    firebase.database().ref(`student/${selectedKegiatan.id}`).update(data);
    resetform();
    alert("Link Berhasil Di Post")
}

const onSubmit3 = () =>{
    const data ={
        linksem3: linksem3,
    }
    firebase.database().ref(`student/${selectedKegiatan.id}`).update(data);
    resetform();
    alert("Link Berhasil Di Post")
}
const onSubmit4 = () =>{
    const data ={
        linksem4: linksem4,
    }
    firebase.database().ref(`student/${selectedKegiatan.id}`).update(data);
    resetform();
    alert("Link Berhasil Di Post")
}
const onSubmit5 = () =>{
    const data ={
        linksem5: linksem5,
    }
    firebase.database().ref(`student/${selectedKegiatan.id}`).update(data);
    resetform();
    alert("Link Berhasil Di Post")
}

const onSubmit6 = () =>{
    const data ={
        linksem6: linksem6,
    }
    firebase.database().ref(`student/${selectedKegiatan.id}`).update(data);
    resetform();
    alert("Link Berhasil Di Post")
}

const resetform = () =>{
    setLinkSem1('')
    setLinkSem2('')
    setLinkSem3('')
    setLinkSem4('')
    setLinkSem5('')
    setLinkSem6('')
   
}
const onUpdate = (item) =>{
    setLinkSem1(item.linksem1)
    setLinkSem2(item.linksem2)
    setLinkSem3(item.linksem3)
    setLinkSem4(item.linksem4)
    setLinkSem5(item.linksem5)
    setLinkSem6(item.linksem6)
    setSelectedKegiatan(item)
  }
  
  
  return(
          <div>
             <SideMenu
                link={`/${uid}/daftarsiswa`} title={"Daftar Siswa"}
                link2={""} title2={""}  icon2={""}
                link3={""} title3={""} icon={""}
            />

<div className="collapse" id="siswa">

     <div className='formadd'>
    <div className="mb-3">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
       <label  className="form-label">Link File Raport Semester I</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester I" value={linksem1} onChange={(e) => setLinkSem1(e.target.value)} />
       <button className="btnel btn-secondary" onClick={onSubmit} >Post Link</button>
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester II</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester II" value={linksem2} onChange={(e) => setLinkSem2(e.target.value)} />
       <button className="btnel btn-secondary" onClick={onSubmit2} >Post Link</button>
    </div>

    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester III</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester III" value={linksem3} onChange={(e) => setLinkSem3(e.target.value)} />
       <button className="btnel btn-secondary" onClick={onSubmit3} >Post Link</button>
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester IV</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester IV" value={linksem4} onChange={(e) => setLinkSem4(e.target.value)} />
       <button className="btnel btn-secondary" onClick={onSubmit4} >Post Link</button>
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester V</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester V" value={linksem5} onChange={(e) => setLinkSem5(e.target.value)} />
       <button className="btnel btn-secondary" onClick={onSubmit5} >Post Link</button>
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester VI</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester VI" value={linksem6} onChange={(e) => setLinkSem6(e.target.value)} />
       <button className="btnel btn-secondary" onClick={onSubmit6} >Post Link</button>
    </div>
    </div>
    </div>
              <div className='tablesis'>
        <table className='table table-striped'>
        <thead>
          <tr>
          <th scope="col">Nama Lengkap</th>
          <th scope="col"> Action</th>


          </tr>
        </thead>
        <tbody>
          {students.map((item) => (
              <tr key={item.id}>
                    <th scope="row">
                <td>{item.namaLengkap}</td>
                </th>
              <td>
                <div>
                <button className="btn-info buka" onClick={() => handleClick(item.id)}>Upload</button>
                <button className="update" onClick={() => onUpdate(item)} data-bs-toggle="collapse" data-bs-target="#siswa">Link</button>
             
                </div>
                 </td>
              </tr>
          ))}
          
        </tbody>
      </table>
      </div>
          </div>
      
  
  )
}

export default Daftar;
