import React, {useState, useEffect} from "react";
import "../../../App.css";
import SideMenu from "../../menu/SideMenu";
import firebase from "../../../config/Firebase";

import {useHistory} from 'react-router-dom';
const Upload = () => {
    
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
    history.push(`/exx/${id}`)
  }
  const onSubmit = () =>{
    const data ={
        linksem1: linksem1,
        linksem2: linksem2,
        linksem3: linksem3,
        linksem4: linksem4,
        linksem5: linksem5,
        linksem6: linksem6,
    }
    firebase.database().ref(`student/${selectedKegiatan.id}`).update(data);
    resetform();
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
                link={"/daftarsiswa"} title={"Daftar Siswa"}
                link2={"/upload"} title2={"Upload Link"}  icon2={""}
                link3={"/user"} title3={""} icon={""}
            />
            
    <div className="collapse" id="siswa">
     <div className='formadd'>
    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester I</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester 1" value={linksem1} onChange={(e) => setLinkSem1(e.target.value)} />
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester II</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester 1" value={linksem2} onChange={(e) => setLinkSem2(e.target.value)} />
    </div>

    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester III</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester 1" value={linksem3} onChange={(e) => setLinkSem3(e.target.value)} />
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester IV</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester 1" value={linksem4} onChange={(e) => setLinkSem4(e.target.value)} />
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester V</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester 1" value={linksem5} onChange={(e) => setLinkSem5(e.target.value)} />
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester VI</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester 1" value={linksem6} onChange={(e) => setLinkSem6(e.target.value)} />
    </div>
    
    
    <button className="btned btn-secondary" onClick={onSubmit} >Edit Data</button>
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

export default Upload;
