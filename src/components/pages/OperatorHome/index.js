import React from "react";
import SideMenu from '../../menu/SideMenu';
import { useParams} from 'react-router-dom';
import "../../../App.css";

const OperatorHome = () => {
  
  const {uid} = useParams()
  console.log('uid',{uid})
  return(
          <div>
            <br></br>
            <br></br>
            <h1>Welcome {uid}</h1>
           
              <SideMenu
                link={"/editdatasiswa"} title={"Edit Data Siswa"}
                link2={""} title2={""}
                link3={""} title3={""} 
            />

          </div>
      
  
  )
}

export default OperatorHome;
