import React, {useState, useEffect} from "react";
import "../../../App.css";
import firebase from "../../../config/Firebase";
import SideMenu from "../../menu/SideMenu";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {useHistory, Link} from "react-router-dom";
const AdminHome = () => {
  const [file, setFile] = useState('')
  
  const [files, setFiles] = useState([])
 const up = () =>{
 const data = {
   file: file,
 }
  firebase.database().ref('file/').set(data);
 }

  useEffect (() =>{
    firebase.database().ref('/file').on("value", (res) => {
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
          setFiles(walikelasArr);
          console.log(files)
        }
    });

  }, [])
  
  return(
          <div>
            <SideMenu
                link={"/tambahuser"} title={"Tambah User"}
                link2={"/cekemail"} title2={"Ganti Email"}  
                link3={"/user"} title3={"User"} icon={""}
            />
          </div>

      
  
  )
}

export default AdminHome;
