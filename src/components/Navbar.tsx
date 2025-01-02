import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import "../styles/components/Navbar.scss"
import { useState } from "react";

const Navbar = () => {
  const [displayLink, setDisplayLink] = useState(false);

  const showNavLinks = () => {
    setDisplayLink(!displayLink)
    console.log("Click")
  }
  return (
    <>
      {
        displayLink
          ?
          <div className="verticalNavbar">
            <div className="closeIcon">
              <RxCross2 onClick={showNavLinks} size={40} />
              {/* <button onClick={showNavLinks}><RxCross2 size={35}/></button> */}
            </div>
            <div className="vertical-link">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Contact</a>
              <a href="">Faqs</a>
            </div>
          </div>
          :
          <div className="navbar">
            <div className="logo">
              <p>Logo</p>
            </div>
            <div className="nav-link">
              <a>Home</a>
              <a>About</a>
              <a>Services</a>
              <a>Contact</a>
              <a>Faqs</a>
            </div>
            <div className="ham-icon">
              <RxHamburgerMenu size={35} onClick={showNavLinks} />
            </div>
          </div>
      }
    </>
  )
}

export default Navbar