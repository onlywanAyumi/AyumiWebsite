import '../css/Index.css'
// import {Parallax, ParallaxLayer} from '@react-spring/parallax';

import sato from "../../public/satoLogo1.png"

//create scrollTo function()

//should work as nav bar

function App() {

  return (
    <div className='app'>
      <div className="card">
        <div className='title'>
          OnlyWan
        </div>
        <img src={"sato"} />
        <nav>
          <ul>
            <li><a href="#whyUs">Why Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className='subTitle'>
          OnlyWan is a relaxing no-stress dog grooming service
          <br />
          //should I mention "we" specialize in nervous dogs?
        </div>
        <br/>
        <section>
          <div className='sectionTitle'>
            <h3>Why us:</h3>
          </div>
          <div className='subText'>
            <p>
              At OnlyWan, we strive to provide a calming, relaxing and welcoming environment 
              where our furry friends can relax and enjoy a wonderful grooming experience. 
              We understand that each dog has unique needs, characteristics and preference. Whether 
              our furry friend needs a simple bath, brush, or a stylish haircut, we always 
              prioritize their comfort and well-being!
              <br/>
              <br/>
              Ayumi is not only a groomer, but she also has been studying dog behaviors and animal 
              welfare for years. She loves and cares dogs, and she will provide a gentle and 
              compassionate grooming approach, putting the dogs at ease and building trust 
              with dogs during the grooming process!
              <br/>
            </p>
          </div>
        </section>
        <br />
        <section>
          <div className='sectionTitle'>
            <h3>Services:</h3>
          </div>
          <div className='subText'>
            <p>
              <bold>For puppies</bold>
              <br/>
              The first grooming experience for puppy is very important 
              because It’s are not only one time job but life-long commitment.
              They have no idea what they’ll experience in their first time therefore we will 
              be very careful to proceed our services to be successful as enjoyable time 
              for them which will continually no stress for rest of them grooming life!
              <br/>
              <br/>
              <bold>The Teddy bear haircut</bold>
              <br/>
              Do you like to have your dog to be looks like teddy bear?
              We will seek out each dog’s potential and make as cute as possible!
            
              Asian-fusion haircut

              They have variety of asian-fusion hairstyles.
              If you look for your pet to have special looking, 
              we are more than welcome to consult for it.
            </p>
          </div>
        </section>
        <br />
        <section>
        <div className='sectionTitle'>
          <h3>Contact:</h3>
        </div>
        <div className='subText'>
          <p>
            email: 
            <br/>
            Number:
          </p>
        </div>
        </section>
        Image by <a href="https://www.freepik.com/free-vector/tea-leaves-background-with-flat-design_2427211.htm#query=leaf%20pattern&position=13&from_view=keyword&track=ais">Freepik</a>
      </div>
    </div>
    
  )
}

export default App