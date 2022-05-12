import React,{useEffect, useState} from 'react'
import SideMenu from '../../menu/SideMenu';

import firebase from "../../../config/Firebase";
const User = () =>{
    const [students, setStudents] = useState([]);
    const [walikelas, setWaliKelas] = useState([]);
    const [operator, setOperator] = useState([]);
    const [angkatan, setAngkatan] = useState('');
    useEffect(() => {
        
        
        //walikelas
        firebase.database().ref('/walikelas').on("value", (res) => {
            if(res.val()) {
                //ubah menjadi array
               const rawData = res.val();
                const walikelasArr =[];
                Object.keys(rawData).map((item) => {
                  walikelasArr.push({
                      id: item,
                      ...rawData[item],
                  });
                });
                setWaliKelas(walikelasArr);
              }
          });

          //operator
          firebase.database().ref('/operator').on("value", (res) => {
            if(res.val()) {
                //ubah menjadi array
               const rawData = res.val();
                const operatorArr =[];
                Object.keys(rawData).map((item) => {
                  operatorArr.push({
                      id: item,
                      ...rawData[item],
                  });
                });
                setOperator(operatorArr);
              }
          });


      }, []);

      const onDeleteSt = (item) => {
        firebase.database().ref(`/${angkatan}/${item.id}`).remove()
        alert('Siswa berhasil dihapus')
      }
      const handle = () => {
        //student
        firebase.database().ref(`/${angkatan}/`).on("value", (res) => {
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
        setAngkatan('')
      }
    return (
        <div >
            <SideMenu
                link={"/tambahuser"} title={"Tambah User"}
                link2={"/cekemail"} title2={"Ganti Email"}  
                link3={"/user"} title3={"User"} icon={""}
            />
            <div className='boxform'>
            <br></br>

            <h1 className='userview'>User Wali Kelas</h1>
          
            <button className="viewbtn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#walikelas" >
    View
  </button>

        <div className="collapse" id="walikelas">
            <div>
        <table className='table table-striped'>
        <thead>
          <tr>
          <th scope="col">Nama Lengkap</th>
          <th scope="col"> Action</th>


          </tr>
        </thead>
        <tbody>
          {walikelas.map((item) => (
              <tr key={item.id}>
                    <th scope="row">
                <td>{item.namaLengkap}</td>
                </th>
              <td>
                <div>
                <button className="hapus" onClick={() => onDeleteSt(item)}>Hapus</button>
             
                </div>
                 </td>
              </tr>
          ))}
          
        </tbody>
      </table>
      </div>
      </div>
            <h1 className='userview'>User Operator</h1>
         
            <button className="viewbtn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#operator" >View</button>

<div className="collapse" id="operator">
            <div>
        <table className='table table-striped'>
        <thead>
          <tr>
          <th scope="col">Nama Lengkap</th>
          <th scope="col"> Action</th>


          </tr>
        </thead>
        <tbody>
          {operator.map((item) => (
              <tr key={item.id}>
                    <th scope="row">
                <td>{item.namaLengkap}</td>
                </th>
              <td>
                <div>
                <button className="hapus" onClick={() => onDeleteSt(item)}>Hapus</button>
             
                </div>
                 </td>
              </tr>
          ))}
          
        </tbody>
      </table>
      </div>
      </div>
            <h1 className='userview'>User Siswa</h1>
            <button className="viewbtn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#siswa" >
   View
 </button>

<div className="collapse" id="siswa">
<label  className="form-label">Masukan Angkatan Untuk Melihat Daftar Akun Siswa</label>
        <input 
          placeholder="Angkatan"  value={angkatan} onChange={(e) => setAngkatan(e.target.value)}/>
           <button className='userb' onClick={handle}>Cari</button>
            <div>
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
                <button className="hapus" onClick={() => onDeleteSt(item)}>Hapus</button>
             
                </div>
                 </td>
              </tr>
          ))}
          
        </tbody>
      </table>
      </div>
      </div>
            </div>
        </div>
    )

}

export default User;