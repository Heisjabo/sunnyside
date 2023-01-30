import Log from '../images/footer-logo.svg'
import Facebook from '../images/icon-facebook.svg'
import Instagram from '../images/icon-instagram.svg'
import Twitter from '../images/icon-twitter.svg'
import Pinterest from '../images/icon-pinterest.svg'

const Footer = () => {
  return (
    <section className="footer">
      <img src={Log} id="footer-logo" alt=""/>
      <ul className='footer-nav'>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className='icons'>
        <img src={Facebook} alt=""/>
        <img src={Instagram} alt=""/>
        <img src={Twitter} alt=""/>
        <img src={Pinterest} alt=""/>
      </div>
    </section>
  )
}

export default Footer
