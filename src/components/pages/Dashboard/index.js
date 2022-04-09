import React, {useState, useEffect} from "react";
import SideMenu from "../../menu/SideMenu";
import {useHistory} from 'react-router-dom';
import firebase from "../../../config/Firebase";


const Dashboard = () => {
  const [namaLengkap, setnamaLengkap] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [students, setStudents] = useState([]);
  const [button, setButton] = useState("Tambah Siswa")
  const [selectedKegiatan, setSelectedKegiatan] = useState({})
  const [search, setSearch] = useState('')
  useEffect(() => {
    firebase.database().ref('student').on("value", (res) => {
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
  }, []);

  let history = useHistory();
  const handleClick = (id) => {
    console.log(id);
    history.push(`/exx/${id}`)
  }
  
  const onDelete = (item) => {
    firebase.database().ref(`student/${item.id}`).remove()
    alert('Siswa berhasil dihapus')
  }
  const onUpdate = (item) =>{
    setnamaLengkap(item.namaLengkap)
    setButton("Update")
    setSelectedKegiatan(item)
  }
  const resetForm =() => {
    setnamaLengkap("");
    setEmail("");
    setPassword("");
    setSelectedKegiatan('')
  }
  const onSubmit = () =>{
    const data = {
      namaLengkap : namaLengkap,
    };
    const dataa ={
      email: email,
      namaLengkap : namaLengkap,
    }
    if(button === 'Tambah Siswa') {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        //simpan ke realtime database
        const userId = userCredential.user.uid;
        firebase.database().ref('student/' + userId).set(dataa);
      })
      alert('Siswa berhasil ditambah')
    
    }else {
      firebase.database().ref(`student/${selectedKegiatan.id}`).update(data)
      
      alert('Data siswa berhasil diupdate')
    }
     resetForm();
//tampilkan pesan error
    }

 const handleSubmit = (e) =>{
  e.preventDefault();
  history.push(`/search?name=${search}`)
  setSearch("");
  
}



  
    return (
        <div>
        <SideMenu />
               <div className="home">
        <h5 className="nl">Nama Lengkap</h5> 
        <form className="add">
        <input
      className="dash"
      placeholder="Masukkan Nama Lengkap"
      value={namaLengkap}
      onChange={(e) => setnamaLengkap(e.target.value)}
    
     />
     <h2 className="ksandi">Kata Sandi</h2>
     <input
      className="dash1"
      placeholder="Masukkan Kata Sandi"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
   
    />

       <br />
    <h5>Email</h5>
    <input
      className="dash"
      placeholder="Masukkan Email"
      type="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
   
    
    
    />
    <br />
    <button className="addsiswa" type ="button" onClick={onSubmit}>{button}</button>
     {button ==="Update" && (
       <button className="cancelbutton" onClick={resetForm}>Batal Edit</button>
     )}
    </form>
     <form onSubmit={handleSubmit}>
     <input className="search" type="text"
            placeholder="Search..." 
            onChange={(e) => setSearch(e.target.value)}
            value ={search}
          
            />
     </form>
         
    <div>
    <div className="box">
      <table>
        <thead>
          <tr>
          <th className="nama">Nama Lengkap</th>
          <th className="act"> Action</th>


          </tr>
        </thead>
        <tbody>
          {students.map((item) => (
              <tr key={item.id}>
                <div className="nm">
                <td>{item.namaLengkap}</td>
                </div>
              <td >
                <div className="action">
                <button className="buka"   onClick={() => handleClick(item.id)}>Buka</button>
                <button className="update" onClick={() => onUpdate(item)}>Edit</button>
                <button className="hapus"  onClick={() => onDelete(item)}>Hapus</button>
             
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
    );
};

export default Dashboard;
