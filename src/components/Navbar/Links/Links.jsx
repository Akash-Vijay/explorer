import Link from "next/link";
import styles from "./links.module.css"
import NavLink from "./NavLinks/NavLink";
const Links = () => { 

  const links = [
    {"title": "Home", "path":"/"},
    {"title": "About", "path":"/about"},
    {"title": "Contact", "path":"/contact"},
    {"title": "Blog", "path":"/blog"},
  ];

  //Temp Data
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}> 
      {links.map((link=>(<NavLink item={link}></NavLink>)))}
      {session? (
          <>
          {
          isAdmin && (<NavLink item={{"title": "Admin", "path": "/admin"}}>Admin</NavLink>)
          }
        <button>Logout</button>
          </>
         ): 
         (<NavLink item={{"title": "Login", "path": "/login"}}>Login</NavLink>)
         }
    </div>
  )
}

export default Links;