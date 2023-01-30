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
      <img className="logo" src={Log} alt="logo"/>
      <img src={menu} id="menu-icon" onClick={() => {
        setNavOpen(!navOpen); 
      }}/>
      <ul className={navOpen ? "nav-open" : "main-nav"}>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#" id='contact'>CONTACT</a></li>
      </ul>
      <div className='home-text'>
        <h1>WE ARE CREATIVES</h1>
        <img src={Arrow}/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Header
