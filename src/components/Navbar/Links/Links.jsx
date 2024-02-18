"use client"


import styles from "./links.module.css"
import NavLink from "./NavLinks/NavLink";
import { useState } from "react";

const links = [
  {"title": "Home", "path":"/"},
  {"title": "About", "path":"/about"},
  {"title": "Contact", "path":"/contact"},
  {"title": "Blog", "path":"/blog"},
];
const Links = () => { 

  const [open, setOpen] = useState(false);

  //Temp Data
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
        <div className={styles.links}> 
              {links.map((link=>(<NavLink item={link}></NavLink>)))}
              {session? (
                  <>
                  {
                  isAdmin && (<NavLink item={{"title": "Admin", "path": "/admin"}}>Admin</NavLink>)
                  }
                <button className={styles.logout}>Logout</button>
                  </>
                ): 
                (<NavLink item={{"title": "Login", "path": "/login"}}>Login</NavLink>)
                }
        </div>
        <button className={styles.menuButton} onClick={() => setOpen(prev=>!prev)}>Menu</button>
        {
          open && <div className={styles.mobileLinks}>
            {links.map((link)=>
            <NavLink item={link} key={link.title}>{link.title}</NavLink>
            )}
          </div>
        }
    </div>
   
  )
}

export default Links;