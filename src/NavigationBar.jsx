import React, {useState} from "react";
import styles from './navBar.module.css';

function NavBar(){
    const [displayProfMenu,setDisplayProfMenu] = useState(false);
    const handleDisplayMenu = ()=>{
        if(displayProfMenu){
            setDisplayProfMenu(false);
        }
        else{
            setDisplayProfMenu(true);
        }
    }
    return (
      <div className={styles.navBar}>
        <h1 className={styles.headText}>Map Editor</h1>
          <button className={styles.profileBtn} onClick={handleDisplayMenu}>Profile</button>
          {displayProfMenu&&<ProfileMenu/>}


      </div>
    );
}

function ProfileMenu(){
    return (
        <div className={styles.profileMenu}>
            <ul>
                <li>Set</li>
                <li>new</li>
            </ul>
        </div>
    );
}

export default  NavBar;