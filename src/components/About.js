import Egg from '../desktop/image-transform.jpg'
import Stand from '../desktop/image-stand-out.jpg'
import EggMobile from '../mobile/image-transform.jpg'
import standMobile from '../mobile/image-stand-out.jpg'

const About = () => {
  return (
    <section className="about">
      <div className="about-img1">
        <img src={Egg} id="img-desktop"/>
        <img src={EggMobile} id="img-mobile"/>
      </div>
      <div className="brand">
        <h3>Transform your brand</h3>
        <p>We are a full-service creative
            agency specializing in helping
            brands grow fast. Engage your
            clients through compelling visuals
            that do most of the marketing for you.
        </p>
        <button>LEARN MORE</button>
      </div>
      <div className='about-img2'>
        <img src={Stand} id="img-desktop"/>
        <img src={standMobile} id="img-mobile"/>
      </div>
      <div className="stand-out">
        <h3>Stand out to the right audience</h3>
        <p>Using a collaborative formula of 
            designers, researchers, photographers,
            videographers, and copywriters, we'll
            build and extend your brand in digital
            places.
        </p>
        <button>LEARN MORE</button>
      </div>
    </section>
  )
}

export default About
