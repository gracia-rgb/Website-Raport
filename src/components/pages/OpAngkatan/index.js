import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
const OpAngkatan = () => {
  
  let history = useHistory();

  const [angkatan, setAngkatan] = useState("")
  const handle = () =>
  {
    history.push(`/editdatasiswa/${angkatan}`)
  }
    return (
        <div className="formop">
        <label  className="form-label">Masukan Angkatan Untuk Melihat Daftar Siswa</label>
        <input 
          placeholder="Angkatan Kelas Yang Di Cari" className="form-control" value={angkatan} onChange={(e) => setAngkatan(e.target.value)}/>
         <br></br>
          <button className='p-3' onClick={handle}>Cari</button>
      </div>
    )
  
}

export default OpAngkatan;
