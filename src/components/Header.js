import Log from '../images/logo.svg'
import Arrow from '../images/icon-arrow-down.svg'
import menu from '../images/icon-hamburger.svg'
import { useState } from 'react'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
    <div className="header">
    <div className="container">
      <img className="logo" src={Log} alt="sunnyside"/>
      <img src={menu} alt="" id="menu-icon" onClick={() => {
        setNavOpen(!navOpen); 
      }}/>
      <ul className={navOpen ? "nav-open" : "main-nav"}>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li id='contact'>CONTACT</li>
      </ul>
      <div className='home-text'>
        <h1>WE ARE CREATIVES</h1>
        <img src={Arrow} alt=""/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Header
