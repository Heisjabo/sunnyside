import Log from '../images/footer-logo.svg'
import Facebook from '../images/icon-facebook.svg'
import Instagram from '../images/icon-instagram.svg'
import Twitter from '../images/icon-twitter.svg'
import Pinterest from '../images/icon-pinterest.svg'

const Footer = () => {
  return (
    <section className="footer">
      <img src={Log} id="footer-logo"/>
      <ul className='footer-nav'>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className='icons'>
        <img src={Facebook}/>
        <img src={Instagram}/>
        <img src={Twitter}/>
        <img src={Pinterest}/>
      </div>
    </section>
  )
}

export default Footer
