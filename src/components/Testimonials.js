import Thomas from '../images/image-thomas.jpg'
import Emily from '../images/image-emily.jpg'
import Jennie from '../images/image-jennie.jpg'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>CLIENT TESTIMONIALS</h2>
      <div className="testimonies">
        <div className="box-item">
            <img src={Emily}/>
            <p>We put our trust in Sunnyside
                and they delivered, making sure
                our needs were met and deadlines
                were always hit.
            </p>
            <h4>Emily R.</h4>
            <span>Marketing Director</span>
        </div>

        <div className="box-item">
            <img src={Thomas}/>
            <p>Sunnyside's enthusiasm coupled 
                with their keen interest in our brand's
                success made it a satisfying and enjoyable
                experience.
            </p>
            <h4>Thomas S.</h4>
            <span>Chief Operating Officer</span>
        </div>

        <div className="box-item">
            <img src={Jennie}/>
            <p>Incredible end result! Our sales
                increased over 400% when we worked
                with Sunnyside. Highly recommended!
            </p>
            <h4>Jennie F.</h4>
            <span>Business Owner</span>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
