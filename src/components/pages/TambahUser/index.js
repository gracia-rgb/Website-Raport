import React,{useState} from 'react'
import SideMenu from '../../menu/SideMenu';
import firebase from "../../../config/Firebase"

const TambahUser = () =>{
  const [namaLengkap, setnamaLengkap] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
     const data = {
       namaLengkap : namaLengkap,
       email: email,
     }
     firebase.auth().createUserWithEmailAndPassword(email, password)
     .then((userCredential) => {
       //simpan ke realtime database
       const userId = userCredential.user.uid;
       firebase.database().ref('walikelas/' + userId).set(data);
      setnamaLengkap('')
      setEmail('')
     setPassword('')
     alert('Akun berhasil dibuat')
     })
     .catch((error) => {
       console.log(error)
   //tampilkan pesan error
     });
   
     };
 
     const onSubmitOp = () => {
        const data = {
          namaLengkap : namaLengkap,
          email: email,
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          //simpan ke realtime database
          const userId = userCredential.user.uid;
          firebase.database().ref('operator/' + userId).set(data);
         setnamaLengkap('')
         setEmail('')
        setPassword('')
       
        alert('Akun berhasil dibuat')
        })
        .catch((error) => {
          console.log(error)
      //tampilkan pesan error
        });
      
        };
        const onSubmitSis = () => {
            const data = {
              namaLengkap : namaLengkap,
              email: email,
            }
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              //simpan ke realtime database
              const userId = userCredential.user.uid;
              firebase.database().ref('student/' + userId).set(data);
             setnamaLengkap('')
             setEmail('')
            setPassword('')
            alert('Akun berhasil dibuat')
            })
            .catch((error) => {
              console.log(error)
          //tampilkan pesan error
            });
          
            };
    return (
   <>
   <div>
     <SideMenu 
          link={"/tambahuser"} title={"Tambah User"}
          link2={"/cekemail"} title2={"Ganti Email"}  
          link3={"/user"} title3={"User"} icon={""} />
   
 <h1>Buat Akun Untuk</h1>
  <button className="btnform btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#walikelas" >
    Wali Kelas
  </button>

<div className="collapse" id="walikelas">
  <div className='boxform'>

  <input
        className="regs"
        placeholder="Nama Lengkap"
        value={namaLengkap}
        onChange={(e) => setnamaLengkap(e.target.value)}
      />
    
      <input
        className="regs"
        placeholder="Email"
        type="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    
      <input
        className="regs"
        placeholder="Kata Sandi"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button className='buatbtn' onClick={onSubmit} >Buat Akun</button>
     

  </div>
</div>
 
 <button className="btnform btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#operator" >
   Operator
 </button>

<div className="collapse" id="operator">
 <div className='boxform'>
 <input
        className="regs"
        placeholder="Nama Lengkap"
        value={namaLengkap}
        onChange={(e) => setnamaLengkap(e.target.value)}
      />
    
      <input
        className="regs"
        placeholder="Email"
        type="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    
      <input
        className="regs"
        placeholder="Kata Sandi"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button className='buatbtn' onClick={onSubmitOp} >Buat Akun</button>
     

 </div>
</div>

<button className="btnform btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#siswa" >
   Siswa
 </button>

<div className="collapse" id="siswa">
 <div className='boxform'>
 <input
        className="regs"
        placeholder="Nama Lengkap"
        value={namaLengkap}
        onChange={(e) => setnamaLengkap(e.target.value)}
      />
    
      <input
        className="regs"
        placeholder="Email"
        type="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    
      <input
        className="regs"
        placeholder="Kata Sandi"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button className='buatbtn' onClick={onSubmitSis} >Buat Akun</button>
     


 </div>
</div>
</div>              
</>

    )
}

export default TambahUser;