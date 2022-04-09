import React,{useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import firebase from "../../../config/Firebase";
import SideMenu from "../../menu/SideMenu";

const Search = ()  => {
const [data, setData] = useState({})
const [students, setStudents] = useState([]);
const useQuery = () =>{
    return new URLSearchParams(useLocation().search)
}

let query = useQuery();
let search = query.get('name');
console.log('search', search);

useEffect(()=> {
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
    searchData();
},[])

const searchData = () =>{
    firebase.database().ref('student').orderByChild('namaLengkap').equalTo(search).on('value', (snapshot)=>{
        if(snapshot.val()) {
            const data = snapshot.val();
            setData(data);
            console.log('data',data)
        }
    })
}
return (
    <div>
        <SideMenu />
        <div className="box1">
     <table>
        <thead>
          <tr>
          <th className="nama">Nama Lengkap</th>
          <th className="actse">Email</th>

          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((item) => (
              <tr key={item.id}>
                <div className="nml">
                <td>{data[item].namaLengkap}</td>
             
                </div>
              <td >
                <div className="emailsearch">
                    <td>{data[item].email}</td>
                    <td>
                      
                    </td>
                </div>
                 </td>
              </tr>
          ))}
          
        </tbody>
      </table>
      </div>
    </div>
)
}


export default Search;