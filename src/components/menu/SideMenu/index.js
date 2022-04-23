import React from "react";
import {useHistory, Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsersGear} from "@fortawesome/free-solid-svg-icons";
import firebase from "../../../config/Firebase";
const SideMenu = ({link, link2, link3, title, title2, title3}) => {
        
  let history = useHistory();
        const handle = () =>{
                firebase.auth().signOut().then(() => {
                  history.push('/');
                })
              }
        return (
<div>
<div className="leftmenu">
            
            <h3>SMP ADVENT MAKASSAR</h3>
            <br />
            <hr />
            <h4><Link className="nav-link" to={link}><FontAwesomeIcon icon={faUsersGear}></FontAwesomeIcon> {title}</Link></h4>
            <hr />
            <h4><Link className="nav-link" to={link2}><FontAwesomeIcon></FontAwesomeIcon> {title2}</Link></h4>
            <hr />
            <h4><Link className="nav-link" to={link3}><FontAwesomeIcon ></FontAwesomeIcon> {title3}</Link></h4>
            <hr />
             </div>
          
             <p className="out"><Link className="linkout" onClick={handle}>Signout</Link></p>
 
</div>
        );
    }


export default SideMenu;