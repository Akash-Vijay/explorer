"use client"

import Link from "next/link";
import styles from "./navlink.module.css"
import { usePathname } from "next/navigation";

const NavLink = ({item}) => {
 
  const PathName = usePathname();

  return (
    <Link href={item.path} key={item.title} className={`${styles.container} ${PathName===item.path && styles.active}`}>{item.title}</Link>
  )
}

export default NavLink;