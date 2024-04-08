import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <div className= "container">
      <div className= "social">
        <Image src="../../../public/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="../../../public/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="../../../public/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="../../../public/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="logo"> ThinQ </div>
      <div className= "links">
        <ThemeToggle />
        <Link href="/" className= "link" >Homepage</Link>
        <Link href="/" className= "link" >Contact</Link>
        <Link href="/" className= "link" >About</Link>
        <AuthLinks />
      </div>
    </div>
    )
}

export default Navbar;