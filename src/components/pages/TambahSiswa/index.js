import React, {useEffect, useState} from 'react';
import SideMenu from '../../menu/SideMenu';
import firebase from "../../../config/Firebase";
import { useParams } from 'react-router-dom';

const TambahSiswa = () => {
    const [namaLengkap, setnamaLengkap] = useState('')
    const [nomorIn, setNomorIn] = useState('')
    const [tglLahir, setTanggalLhr] = useState('')
    const [ayah, setAyah] = useState('')
    const [ibu, setIbu] = useState('')
    const [selectedKegiatan, setSelectedKegiatan] = useState({})
    const [students, setStudents] = useState([]);
    const {angkatan,id} = useParams()
    console.log(angkatan)
    useEffect(() => {
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
    },[])
  
    const onSubmit = () =>{
        const data ={
            namaLengkap:namaLengkap,
            nomorInduk: nomorIn,
            tanggalLahir: tglLahir,
            ayah: ayah,
            ibu: ibu,
        }
        firebase.database().ref(`/${angkatan}/${selectedKegiatan.id}`).update(data);
        resetform();
    }
    const resetform = () =>{
        setnamaLengkap('')
        setNomorIn('')
        setTanggalLhr('')
        setAyah('')
        setIbu('')
    }
    const onUpdate = (item) =>{
        setnamaLengkap(item.namaLengkap)
        setNomorIn(item.nomorInduk)
        setTanggalLhr(item.tanggalLahir)
        setAyah(item.ayah)
        setIbu(item.ibu)
        setSelectedKegiatan(item)
      }
     
    return (
    <div>
               <SideMenu
                link={`editdatasiswa/${angkatan}`} title={"Edit Data Siswa"}
                link2={""} title2={""} 
                link3={"/"} title3={""} 
            />
            <h1 className='edittitle'>Edit Data Siswa</h1>
            
    <div className="collapse" id="siswa">
     <div className='formadd'>
    <div className="mb-3">
       <label  className="form-label">Nama Lengkap</label>
       <input type="text" className="form-control" placeholder="Nama Lengkap" value={namaLengkap} onChange={(e) => setnamaLengkap(e.target.value)} />
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Nomor Induk/NISN</label>
       <input type="text" className="form-control" placeholder="Nomor Induk/NISN" value={nomorIn} onChange={(e) => setNomorIn(e.target.value)} />
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Tanggal Lahir</label>
       <input type="text" className="form-control" placeholder="Tanggal Lahir" value={tglLahir} onChange={(e) => setTanggalLhr(e.target.value)}/>
    </div>

    <div className="mb-3">
       <label  className="form-label">Nama Ayah</label>
       <input type="text" className="form-control" placeholder="Nama Ayah" value={ayah} onChange={(e) => setAyah(e.target.value)} />
    </div>
 
    <div className="mb-3">
       <label  className="form-label">Nama Ibu</label>
       <input type="text" className="form-control" placeholder="Nama Ibu" value={ibu} onChange={(e) => setIbu(e.target.value)} />
    </div>
    
    <button className="btned btn-secondary" onClick={onSubmit} >Edit Data</button>
    </div>
    </div>

    <div className='tablesis'>
        <table className='table table-striped'>
        <thead>
          <tr>
          <th scope="col">Nama Lengkap</th>
          <th scope="col" >Action</th>

          </tr>
        </thead>
        <tbody>
          {students.map((item) => (
              <tr key={item.id} >
                    <th scope="row">
                      
                <td >{item.namaLengkap}</td>
                </th>
              <td>
                <button className="update" onClick={() => onUpdate(item)} data-bs-toggle="collapse" data-bs-target="#siswa" >Edit Data</button>
             
                
                 </td>
              </tr>
          ))}
          
        </tbody>
      </table>
      </div>
    </div>
    )

}

export default TambahSiswa;

