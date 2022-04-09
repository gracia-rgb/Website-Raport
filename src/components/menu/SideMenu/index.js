import { Component } from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faUsersGear} from "@fortawesome/free-solid-svg-icons";

class SideMenu extends Component {
    render() {
        return (
<div>
<div className="leftmenu">
            
            <h3>SMP ADVENT MAKASSAR</h3>
            <br />
            <hr />
            <h4><Link className="nav-link" to="/profile"><FontAwesomeIcon icon={faUsersGear}></FontAwesomeIcon> Daftar User</Link></h4>
            <hr />
            <h4><Link className="nav-link" to="/"><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> Daftar Siswa</Link></h4>
            <hr />
            <h4><Link className="nav-link" to="/cekemail"><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> Ganti Email</Link></h4>
            <hr />
             </div>
</div>
        );
    }
}

export default SideMenu;