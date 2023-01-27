import Apples from '../desktop/image-graphic-design.jpg'
import Orange from '../desktop/image-photography.jpg'

const Projects = () => {
  return (
    <section className="services">
      <div className="graphic-design">
        <img src ={Apples}/>
        <div className='graphic-txt'>
        <h3>Graphic Design</h3>
        <p>Great design makes you memorable.
          We deliver artwork that underscores
          your brand message and captures potential
          client's attention.
        </p>
        </div>
      </div>
      <div className='photography'>
        <img src={Orange}/>
        <div className='photography-txt'>
        <h3>Photography</h3>
        <p>Increase your credibility by getting
          the most stunning, high-quality photos
          that improve your business image
        </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
