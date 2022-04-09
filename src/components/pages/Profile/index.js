import React, {useState, useEffect} from "react";
import firebase from "../../../config/Firebase";
import SideMenu from "../../menu/SideMenu";

const Profile = () => {
    const [users, setUsers] = useState([]);
  useEffect(() => {
    firebase.database().ref('users').on("value", (res) => {
      if(res.val()) {
          //ubah menjadi array
         const rawData = res.val();
          const userArr =[];
          Object.keys(rawData).map((item) => {
            userArr.push({
                id: item,
                ...rawData[item],
            });
            
          console.log({item})
          });
          setUsers(userArr); 
        }
        
    });
  }, []);

  return(
      <div>
        <SideMenu />
        <div>
    <div className="box1">
      <table>
        <thead>
          <tr>
          <th className="nama">Nama Lengkap</th>
          <th className="act">Email</th>
          

          </tr>
        </thead>
        <tbody>
          <div className="namaleng">
          </div>
          {users.map((item) => (
              <tr key={item.id}>
                <div className="nl">
                  <td>{item.namaLengkap}</td>
                  </div>
              <div className="em">
              <td>{item.email}</td>
              </div>
              </tr>
          ))}
        </tbody>
      </table>
      
    </div>
    </div>
         
      </div>
  )
}



export default Profile;