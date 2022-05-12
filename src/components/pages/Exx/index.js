import {useState} from 'react'
import * as XLSX from 'xlsx'
import firebase from '../../../config/Firebase';
import { useParams} from 'react-router-dom';
import SideMenu from '../../menu/SideMenu';

function Exx() {
  const {id} = useParams();
  const {uid, angkatan} = useParams();
  console.log(id)
 
  // on change states
  const [excelFile, setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);  
 
  // submit
  const [excelData, setExcelData]=useState(null);
  // it will contain array of objects

  // handle File
  const handleFile = (e)=>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
      // console.log(selectedFile.type);
      if(selectedFile){
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
        } 
      }
      
    }
    else{
      console.log('plz select your file');
    }
  }


  
  const today = new Date(), date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  console.log(date);

  // submit function
  const sem1 =(e) =>{
   e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      const datanilai = {
        TanggalUpload: date,
        data: data,
        Uploadby: uid,
        ket: 'Mata Pelajaran',
        ketn: 'Nilai',
        kelas: 'Kelas 1 Semester Ganjil',
      }
      setExcelData(data);
      
      
    firebase.database().ref(`/${angkatan}/${id}/kelas1semganjil`).set(datanilai)
    firebase.database().ref(`/${angkatan}/${id}/nilaiupdate`).update(datanilai)
    alert('Nilai berhasil diupload')
    }
    else{
      setExcelData(null);
    }
  }
  const sem2 =(e) =>{
    e.preventDefault();
     if(excelFile!==null){
       const workbook = XLSX.read(excelFile,{type:'buffer'});
       const worksheetName = workbook.SheetNames[0];
       const worksheet=workbook.Sheets[worksheetName];
       const data = XLSX.utils.sheet_to_json(worksheet);
       const datanilai = {
           TanggalUpload: date,
           data: data,
           Uploadby: uid,
           ket: 'Mata Pelajaran',
           ketn: 'Nilai',
           kelas: 'Kelas 1 Semester Genap',
       }
       setExcelData(data);
     firebase.database().ref(`/${angkatan}/${id}/kelas1semgenap`).set(datanilai)
     firebase.database().ref(`/${angkatan}/${id}/nilaiupdate`).update(datanilai)
     alert('Nilai berhasil diupload')
     }
     else{
       setExcelData(null);
     }
   }

   const sem3 =(e) =>{
    e.preventDefault();
     if(excelFile!==null){
       const workbook = XLSX.read(excelFile,{type:'buffer'});
       const worksheetName = workbook.SheetNames[0];
       const worksheet=workbook.Sheets[worksheetName];
       const data = XLSX.utils.sheet_to_json(worksheet);
       const datanilai = {
        TanggalUpload: date,
        data: data,
        Uploadby: uid,
        ket: 'Mata Pelajaran',
        ketn: 'Nilai',
        kelas: 'Kelas 2 Semester Ganjil',
       }
       setExcelData(data);
      
       
     firebase.database().ref(`/${angkatan}/${id}/kelas2semganjil`).set(datanilai)     
     firebase.database().ref(`/${angkatan}/${id}/nilaiupdate`).update(datanilai)
     alert('Nilai berhasil diupload')
     }
     else{
       setExcelData(null);
     }
   }

   const sem4 =(e) =>{
    e.preventDefault();
     if(excelFile!==null){
       const workbook = XLSX.read(excelFile,{type:'buffer'});
       const worksheetName = workbook.SheetNames[0];
       const worksheet=workbook.Sheets[worksheetName];
       const data = XLSX.utils.sheet_to_json(worksheet);
       const datanilai = {
        TanggalUpload: date,
        data: data,
        Uploadby: uid,
        ket: 'Mata Pelajaran',
        ketn: 'Nilai',
        kelas: 'Kelas 2 Semester Genap',
      }
       setExcelData(data);
     
       
     firebase.database().ref(`/${angkatan}/${id}/kelas2semgenap`).set(datanilai)
     firebase.database().ref(`/${angkatan}/${id}/nilaiupdate`).update(datanilai)
     alert('Nilai berhasil diupload')
     }
     else{
       setExcelData(null);
     }
   }

   const sem5 =(e) =>{
    e.preventDefault();
     if(excelFile!==null){
       const workbook = XLSX.read(excelFile,{type:'buffer'});
       const worksheetName = workbook.SheetNames[0];
       const worksheet=workbook.Sheets[worksheetName];
       const data = XLSX.utils.sheet_to_json(worksheet);
       const datanilai = {
        TanggalUpload: date,
        data: data,
        Uploadby: uid,
        ket: 'Mata Pelajaran',
        ketn: 'Nilai',
        kelas: 'Kelas 3 Semester Ganjil',
      }
       setExcelData(data);
     firebase.database().ref(`/${angkatan}/${id}/kelas3semganjil`).set(datanilai)
     firebase.database().ref(`/${angkatan}/${id}/nilaiupdate`).update(datanilai)
     alert('Nilai berhasil diupload')
     }
     else{
       setExcelData(null);
     }
   }

   const sem6 =(e) =>{
    e.preventDefault();
     if(excelFile!==null){
       const workbook = XLSX.read(excelFile,{type:'buffer'});
       const worksheetName = workbook.SheetNames[0];
       const worksheet=workbook.Sheets[worksheetName];
       const data = XLSX.utils.sheet_to_json(worksheet);
       const datanilai = {
        TanggalUpload: date,
        data: data,
        Uploadby: uid,
        ket: 'Mata Pelajaran',
        ketn: 'Nilai',
        kelas: 'Kelas 3 Semester Genap',
      }
       setExcelData(data);
     
       
     firebase.database().ref(`/${angkatan}/${id}/kelas3semgenap`).set(datanilai)
     firebase.database().ref(`/${angkatan}/${id}/nilaiupdate`).update(datanilai)
     alert('Nilai berhasil diupload')
     }
     else{
       setExcelData(null);
     }
   }
   const list = () =>{
    return (
     <div className='row'>
   <form onSubmit={sem1}>
       <p className='pseml'>Upload Nilai</p>
          <p className='psem1'>Kelas 1 Semester Ganjil</p>
          <input type='file' id='file-input'
           onChange={handleFile} required></input> 
           <label for="file-input" >&nbsp;Pilih File</label> 
           <span>
             <strong></strong>
             <span id="file-name"></span>
             </span>                        
         <button type='submit' className='uploadbutt'>Upload Nilai</button>
         
         </form>
   </div>
    )
  }

  const list2 = () =>{
    return (
     <div className='row2'>
   <form onSubmit={sem2}>
     
          <p className='psem2'>Kelas 1 Semester Genap</p>
          <input type='file' id='file-input' 
           onChange={handleFile} ></input> 
           <label for="file-input" >&nbsp;Pilih File</label> 
           <span>
             <span id="file-name"></span>
             </span>                  
         <button type='submit' className='uploadbutt'>Upload Nilai</button>
         </form>
  
   </div>
    )
  }

  const list3 = () =>{
    return (
     <div className='row3'>
   <form onSubmit={sem3}>
         <p className='psem3'>Kelas 2 Semester Ganjil</p>
         <input type='file' id='file-input'
           onChange={handleFile} ></input> 
           <label for="file-input" >&nbsp;Pilih File</label> 
           <span>
             <strong></strong>
             <span id="file-name"></span>
             </span>                         
         <button type='submit' className='uploadbutt'>Upload Nilai</button>
         </form>
  
   </div>
    )
  }

  const list4 = () =>{
    return (
     <div className='row4'>
    <form onSubmit={sem4}>
      
    <p className='psem4'>Kelas 2 Semester Genap</p>
    <input type='file' id='file-input'
           onChange={handleFile} ></input> 
           <label for="file-input" >&nbsp;Pilih File</label> 
           <span>
             <strong></strong>
             <span id="file-name"></span>
             </span>            
                        
         <button type='submit' className='uploadbutt'>Upload Nilai</button>
         </form>
  
   </div>
    )
  }
  const list5 = () =>{
    return (
     <div className='row5'>
   <form onSubmit={sem5}>
     
   <p className='psem5'>Kelas 3 Semester Ganjil</p>
     <div className='col'> 
     <input type='file' id='file-input'
           onChange={handleFile}></input> 
           <label for="file-input" >&nbsp;Pilih File</label> 
           <span>
             <strong></strong>
             <span id="file-name"></span>
             </span>                       
         <button type='submit' className='uploadbutt'>Upload Nilai</button>
         </div>
          
         </form>
  
   </div>
    )
  }

  const list6 = () =>{
    return (
     <div className='row6'>
   <form onSubmit={sem6}>
     
   <p className='psem6'>Kelas 3 Semester Genap</p>
           <input type='file' id='file-input'
           onChange={handleFile}></input> 
           <label for="file-input" >&nbsp;Pilih File</label> 
           <span>
             <strong></strong>
             <span id="file-name"></span>
             </span>                
         <button type='submit' className='uploadbutt'>Upload Nilai</button>
         </form>
  
   </div>
    )
  }
  return (
   <div> 
     <SideMenu
   link={`/${uid}/daftarsiswa/${angkatan}`} title={"Daftar Siswa"}
   link2={""} title2={""}  
   link3={""} title3={""} icon={""}
/>
     <div className='divs'>
  {list()}
  {list2()}
  {list3()}
  {list4()}
  {list5()}
  {list6()}
  <p className='linktem'>Template Nilai <a href="https://docs.google.com/spreadsheets/d/1UqenOR4odKNk8YlWjnGJNnsk_vgp8GHB/edit?usp=sharing&ouid=114619245391787850244&rtpof=true&sd=true">Buka</a></p>
     </div>
    
    </div>
  );
}

export default Exx;