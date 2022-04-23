import {useState} from 'react'
import * as XLSX from 'xlsx'
import firebase from '../../../config/Firebase';
import { useParams} from 'react-router-dom';
import SideMenu from '../../menu/SideMenu';

function Exx() {
  const {id} = useParams();
  const {uid} = useParams();
  
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
      }
      setExcelData(data);
      
      
    firebase.database().ref(`student/${id}/sem1`).set(datanilai)
    alert('Nilai Semester I berhasil diupload')
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
       }
       setExcelData(data);
     firebase.database().ref(`student/${id}/sem2`).set(datanilai)
     alert('Nilai Semester II berhasil diupload')
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
       }
       setExcelData(data);
      
       
     firebase.database().ref(`student/${id}/sem3`).set(datanilai)
     alert('Nilai Semester III berhasil diupload')
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
      }
       setExcelData(data);
     
       
     firebase.database().ref(`student/${id}/sem4`).set(datanilai)
     alert('Nilai Semester IV berhasil diupload')
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
      }
       setExcelData(data);
     firebase.database().ref(`student/${id}/sem5`).set(datanilai)
     alert('Nilai Semester V berhasil diupload')
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
      }
       setExcelData(data);
     
       
     firebase.database().ref(`student/${id}/sem6`).set(datanilai)
     alert('Nilai Semester VI berhasil diupload')
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
          <p className='psem1'>Semester I</p>
           <input type='file' className="upl"
           onChange={handleFile} required></input>                  
         <button type='submit' className='uploadbutt'>Upload Nilai Semester I</button>
         
         </form>
   </div>
    )
  }

  const list2 = () =>{
    return (
     <div className='row2'>
   <form onSubmit={sem2}>
     
          <p className='psem2'>Semester II</p>
           <input type='file' className='upl2'
           onChange={handleFile} required></input>                  
         <button type='submit' className='uploadbutt'>Upload Nilai Semester II</button>
         </form>
  
   </div>
    )
  }

  const list3 = () =>{
    return (
     <div className='row3'>
   <form onSubmit={sem3}>
         <p className='psem3'>Semester III</p>
           <input type='file' className='upl3'
           onChange={handleFile} required></input>                  
         <button type='submit' className='uploadbutt'>Upload Nilai Semeter III</button>
         </form>
  
   </div>
    )
  }

  const list4 = () =>{
    return (
     <div className='row4'>
    <form onSubmit={sem4}>
      
    <p className='psem4'>Semester IV</p>
           <input type='file' className='upl4'
           onChange={handleFile} required></input>                  
         <button type='submit' className='uploadbutt'>Upload Nilai Semeter IV</button>
         </form>
  
   </div>
    )
  }
  const list5 = () =>{
    return (
     <div className='row5'>
   <form onSubmit={sem5}>
     
   <p className='psem5'>Semester V</p>
     <div className='col'> <input type='file' className='upl5'
           onChange={handleFile} required></input>                  
         <button type='submit' className='uploadbutt'>Upload Nilai Semeter V</button>
         </div>
          
         </form>
  
   </div>
    )
  }

  const list6 = () =>{
    return (
     <div className='row6'>
   <form onSubmit={sem6}>
     
   <p className='psem6'>Semester VI</p>
           <input type='file' className='upl6'
           onChange={handleFile} required></input>                  
         <button type='submit' className='uploadbutt'>Upload Nilai Semeter VI</button>
         </form>
  
   </div>
    )
  }
  return (
   <div> 
     <SideMenu
   link={`/${uid}/daftarsiswa`} title={"Daftar Siswa"}
   link2={""} title2={""}  icon2={""}
   link3={""} title3={""} icon={""}
/>
     <div>
  {list()}
  {list2()}
  {list3()}
  {list4()}
  {list5()}
  {list6()}
     </div>
    
    </div>
  );
}

export default Exx;