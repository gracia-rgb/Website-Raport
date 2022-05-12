import React, {useState, useEffect} from "react";
import "../../../App.css";
import SideMenu from "../../menu/SideMenu";
import firebase from "../../../config/Firebase";

import {useHistory, useParams} from 'react-router-dom';
const Daftar = () => {
  const {uid, angkatan} = useParams()
  const [search, setSearch] = useState('')
  console.log('uid',{uid})
    const [linkkelas1semganjil, setLinkKelas1semganjil] = useState('')
    const [linkkelas1semgenap, setLinkKelas1semgenap] = useState('')
    const [linkkelas2semganjil, setLinkKelas2semganjil] = useState('')
    const [linkkelas2semgenap, setLinkKelas2semgenap] = useState('')
    const [linkkelas3semganjil, setLinkKelas3semganjil] = useState('')
    const [linkkelas3semgenap, setLinkKelas3semgenap] = useState('')
    const [selectedKegiatan, setSelectedKegiatan] = useState({})
    const [students, setStudents] = useState([]);
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
    let history = useHistory();
  const handleClick = (id) => {
    console.log(angkatan);
    history.push(`/${uid}/exx/${id}/${angkatan}`)
  }
  const onSubmit = () =>{
    const data ={
        linkkelas1semsterganjil: linkkelas1semganjil,
    }
    firebase.database().ref(`/${angkatan}/${selectedKegiatan.id}`).update(data);
    resetform();
    alert("Link Berhasil Di Post")
}
const onSubmit2 = () =>{
    const data ={
      linkkelas1semstergenap: linkkelas1semgenap,
    }
    firebase.database().ref(`/${angkatan}/${selectedKegiatan.id}`).update(data);
    resetform();
    alert("Link Berhasil Di Post")
}

const onSubmit3 = () =>{
    const data ={
      linkkelas2semsterganjil: linkkelas2semganjil,
    }
    firebase.database().ref(`/${angkatan}/${selectedKegiatan.id}`).update(data);
    resetform();
    alert("Link Berhasil Di Post")
}
const onSubmit4 = () =>{
    const data ={
      linkkelas2semstergenap: linkkelas2semgenap,
    }
    firebase.database().ref(`/${angkatan}/${selectedKegiatan.id}`).update(data);
    resetform();
    alert("Link Berhasil Di Post")
}
const onSubmit5 = () =>{
    const data ={
      linkkelas3semsterganjil: linkkelas3semganjil,
    }
    firebase.database().ref(`/${angkatan}/${selectedKegiatan.id}`).update(data);
    resetform();
    alert("Link Berhasil Di Post")
}

const onSubmit6 = () =>{
    const data ={
      linkkelas3semstergenap: linkkelas3semgenap,
    }
    firebase.database().ref(`/${angkatan}/${selectedKegiatan.id}`).update(data);
    resetform();
    alert("Link Berhasil Di Post")
}

const resetform = () =>{
    setLinkKelas1semganjil('')
    setLinkKelas1semgenap('')
    setLinkKelas2semganjil('')
    setLinkKelas2semgenap('')
    setLinkKelas3semganjil('')
    setLinkKelas3semgenap('')
   
}
const onUpdate = (item) =>{
  setLinkKelas1semganjil(item.linkkelas1semganjil)
  setLinkKelas1semgenap(item.linkkelas1semgenap)
  setLinkKelas2semganjil(item.linkkelas2semganjil)
  setLinkKelas2semgenap(item.linkkelas2semgenap)
  setLinkKelas3semganjil(item.linkkelas3semganjil)
  setLinkKelas3semgenap(item.linkkelas3semgenap)
    setSelectedKegiatan(item)
  }
  const handle = (id) => {
    console.log(angkatan);
    history.push(`/${uid}/viewnilai/${id}/${angkatan}`)
  }
  
  const handle2 = (id) => {
    console.log(angkatan);
    history.push(`/${uid}/viewnilai2/${id}/${angkatan}`)
  }
  const handle3 = (id) => {
    console.log(angkatan);
    history.push(`/${uid}/viewnilai3/${id}/${angkatan}`)
  }
  const handle4 = (id) => {
    console.log(angkatan);
    history.push(`/${uid}/viewnilai4/${id}/${angkatan}`)
  }
  const handle5 = (id) => {
    console.log(angkatan);
    history.push(`/${uid}/viewnilai5/${id}/${angkatan}`)
  }
  const handle6 = (id) => {
    console.log(angkatan);
    history.push(`/${uid}/viewnilai6/${id}/${angkatan}`)
  }
  return(
          <div>
             <SideMenu
                link={`/${uid}/daftarsiswa`} title={"Daftar Siswa"}
                link2={""} title2={""}  
                link3={""} title3={""} icon={""}
            />
            <div className="searching">
   <form  className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) =>setSearch(e.target.value)}
                  />
                </form>
                </div>
<div className="collapse" id="siswa">

     <div className='formadd'>
    <div className="mb-3">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
       <label  className="form-label">Link File Raport Semester I</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester I" value={linkkelas1semganjil} onChange={(e) => setLinkKelas1semganjil(e.target.value)} />
       <button className="btnel btn-secondary" onClick={onSubmit} >Post Link</button>
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester II</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester II" value={linkkelas1semgenap} onChange={(e) => setLinkKelas1semgenap(e.target.value)} />
       <button className="btnel btn-secondary" onClick={onSubmit2} >Post Link</button>
    </div>

    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester III</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester III" value={linkkelas2semganjil} onChange={(e) => setLinkKelas2semganjil(e.target.value)} />
       <button className="btnel btn-secondary" onClick={onSubmit3} >Post Link</button>
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester IV</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester IV" value={linkkelas2semgenap} onChange={(e) => setLinkKelas2semgenap(e.target.value)} />
       <button className="btnel btn-secondary" onClick={onSubmit4} >Post Link</button>
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester V</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester V" value={linkkelas3semganjil} onChange={(e) => setLinkKelas3semganjil(e.target.value)} />
       <button className="btnel btn-secondary" onClick={onSubmit5} >Post Link</button>
    </div>
    
    <div className="mb-3">
       <label  className="form-label">Link File Raport Semester VI</label>
       <input type="text" className="form-control" placeholder="Link File Raport Semester VI" value={linkkelas3semgenap} onChange={(e) => setLinkKelas3semgenap(e.target.value)} />
       <button className="btnel btn-secondary" onClick={onSubmit6} >Post Link</button>
    </div>
    </div>
    </div>
           

          {search.length === 0 ? (
          students ? (
            <div className='tablesis'>
            <table className='table table-striped'>
              <thead>
                <tr>
                <th>Nama Lengkap</th>
                <div  className="actionlabel">
                  <th> Action</th>
                </div>
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
                  <button className="btn-success update" onClick={() => onUpdate(item)} data-bs-toggle="collapse" data-bs-target="#siswa">Link</button>
               
                  <button type="button" class="btn-secondary sec" onClick={() => handle(item.id)}>1 Ganjil</button>
                  <button type="button" class="btn-secondary sec" onClick={() => handle2(item.id)}>1 Genap</button>
                 
                  <button type="button" class="btn-secondary sec" onClick={() => handle3(item.id)}>2 Ganjil</button> 
                  <button type="button" class="btn-secondary sec" onClick={() => handle4(item.id)}>2 Genap</button>
                  
                  <button type="button" class="btn-secondary sec" onClick={() => handle5(item.id)}>3 Ganjil</button>
                  <button type="button" class="btn-secondary sec" onClick={() => handle6(item.id)}>3 Genap</button>
                  </div>
                   </td>
                </tr>
            ))}
            
          </tbody>
          </table>
          </div>
          ) : (
            <div>
              <h1>Tidak ada </h1>
            </div>
          )
        ) : (
          <div>
            {students
              .filter((item) =>
                item.namaLengkap.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <div className='tablesis'>
                  <table className='table table-striped'>
                  <thead>
                <tr>
                <th>Nama Lengkap</th>
                <th className="actionlabel"> Action</th>
                 </tr>
                </thead>
                <tbody>
                    <tr key={item.id}>
                      <td>{item.namaLengkap}</td>
                    <td>
                    
                      <button className="btn-info buka" onClick={() => handleClick(item.id)}>Upload</button>
                      <button className="update" onClick={() => onUpdate(item)} data-bs-toggle="collapse" data-bs-target="#siswa">Link</button>
                   
                      <button className="btn-info buka" onClick={() => handle(item.id)}>test</button>
                  
                       </td>
                    </tr>
               
                
              </tbody>
              </table>
              </div>
              ))}
          </div>
        )}
         
          </div>
      
  
  )
}

export default Daftar;
