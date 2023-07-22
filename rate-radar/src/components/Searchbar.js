import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons"

function Searchbar () {
    return (
        <div className="searchDiv">
            <input className="mainSearch" type="text" placeholder="Search..."/>
            <FontAwesomeIcon className="userImgMain" icon={faUser}/>
        </div>
    );
}

export default Searchbar;