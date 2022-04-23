import React from "react";
import "../../../App.css";
import SideMenu from "../../menu/SideMenu";
import { useParams} from 'react-router-dom';
const WaliKelasnHome = () => {
  const {uid} = useParams()
  console.log('uid',{uid})

  return(
          <div>
             <SideMenu
                link={`/${uid}/daftarsiswa`} title={"Daftar Siswa"}
                link2={""} title2={""}  
                link3={""} title3={""} 
            />
            <br></br>
            <h1>Welcome {uid}</h1>
             
          </div>
      
  
  )
}

export default WaliKelasnHome;
