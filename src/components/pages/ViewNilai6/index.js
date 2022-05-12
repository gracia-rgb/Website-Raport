import React, {useEffect, useState} from "react";
import SideMenu from "../../menu/SideMenu";
import { useParams} from 'react-router-dom';

import firebase from "../../../config/Firebase";
const ViewNilai6 = () => {
   const {uid,angkatan,id} = useParams()
   
   const [selectedKegiatan, setSelectedKegiatan] = useState({})
   const [students, setStudents] = useState([]);
   const [nilai, setNilai] = useState('')
   useEffect(() => {
    //student
    firebase.database().ref(`/${angkatan}/${id}/kelas1semgenap/data`).on("value", (res) => {
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
          console.log(students)
        }
    });
  },[])
  const onSubmit = () =>{
    const data ={
        Nilai : nilai,
    }
    firebase.database().ref(`/${angkatan}/${id}/kelas3semgenap/data/${selectedKegiatan.id}`).update(data);
    resetform();
}
const resetform = () =>{
    setNilai('')
}
const onUpdate = (item) =>{
    setNilai(item.Nilai)
    setSelectedKegiatan(item)
  }

return (
    <div>
         <SideMenu
                link={`/${uid}/daftarsiswa/${angkatan}`} title={"Daftar Siswa"}
                link2={""} title2={""}  
                link3={""} title3={""} 
            />
              <h1 className='edittitle'>Edit Nilai Siswa</h1>

<div className="collapse" id="siswa">
 <div className='formadd'>
<div className="mb-3">
   <label  className="form-label">Masukan Nilai</label>
   <input type="text" className="form-control" placeholder="Nilai" value={nilai} onChange={(e) => setNilai(e.target.value)} />
</div>
<button className="btned btn-secondary" onClick={onSubmit} >Edit Nilai</button>
</div>
</div>
            <div className='tablesis'>
              <table className='table table-striped'>
        <thead>
          <tr>
          <th>MataPelajaran</th>
          <th>Nilai</th>
          <div className="atc">
            <th>Action</th>
          </div>
          

          </tr>
        </thead>
        <tbody>
          {students.map((item) => (
              <tr key={item.id}>
                <td>{item.MataPelajaran}</td>
                <td>{item.Nilai}</td>
              <td>
                <div>
                <button className="update" onClick={() => onUpdate(item)} data-bs-toggle="collapse" data-bs-target="#siswa" >Edit Nilai</button>
             
                
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

export default ViewNilai6;

