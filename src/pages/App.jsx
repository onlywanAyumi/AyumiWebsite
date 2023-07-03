import '../css/Index.css'
// import {Parallax, ParallaxLayer} from '@react-spring/parallax';

import sato from "../../public/sotaLogos/sotaLogo9.png"

//photos for body
import mainImage from "../../public/works/asianFusion.png"
import puppies from "../../public/works/puppies2.png"
import teddy from "../../public/works/teddy.png"
import ayuComp from "../../public/works/ayuComp.jpg"
import asianFusion from "../../public/works/asianFusion3.png"
import petal from "../../public/works/petal.png"



function App() {

  return (
    <div className='app'>
      <div className="card">
        <div className='titleBar'>
          <img className="logo" src={sato} />
        </div>
        <section>
          <div className='sectionTitle'>
            <h2>Welcome to:</h2>
          </div>
          <div className='subTitle'>
            OnlyWan a low-stress dog grooming service.
          </div>
          <br />
          <img className="basicPhoto" src={mainImage} />
        </section>
        <section>
          <div className='sectionTitle'>
            <h2>Why us:</h2>
          </div>
          <div className='subText'>
            <p>
              At OnlyWan, we strive to provide a calming, relaxing, and welcoming environment 
              where our furry friends can relax and enjoy a wonderful grooming experience. 
              We understand that each dog has unique needs, characteristics and preference. Whether 
              our furry friend needs a simple bath, brush, or a stylish haircut, we always 
              prioritize their comfort and well-being!
            </p>
            <img className='basicPhoto' src={ayuComp} />
            <p>
              Ayumi is not only a groomer, but she also has been studying dog behaviors and animal 
              welfare for years. She loves and cares for dogs, and she will provide a gentle and 
              compassionate grooming approach, putting the dogs at ease and building trust 
              with dogs during the grooming process!
              <br />
              <br />
              Ayumi was also the third place winner 
              of the salon freestyle at the Northwest Groonnubg Show 2023
            </p>
          </div>
        </section>
        <br />
        <section>
          <div className='sectionTitle'>
            <h2>Services:</h2>
          </div>
          <div className='subText'>
            <h4>For puppies:</h4>
            <img className="basicPhoto" src={asianFusion} />
            <p>
              The first grooming experience for puppy is very important 
              because It’s are not only one time job but life-long commitment.
              They have no idea what they’ll experience in their first time therefore we will 
              be very careful to proceed our services to be successful as enjoyable time 
              for them which will continually no stress for rest of them grooming life!
              <br/>
              <br/>
            </p>
            <h4>The Teddy Bear haircut:</h4>
            <img className="basicPhoto" src={teddy} />
            <p>
              Do you like to have your dog to be looks like teddy bear?
              We will seek out each dog’s potential and make as cute as possible!
              <br />
              <br />
            </p>
            <h4>Asian-fusion haircut</h4>
            <img className="basicPhoto" src={asianFusion} />
            <p>
              They have variety of asian-fusion hairstyles.
              If you look for your pet to have special looking, 
              we are more than welcome to consult for it.
              <br/>
              {/* <br/> */}
            </p>
            {/* <h4>Standard Full Grooming:</h4>
            <p>
              Full grooming includes bath, brush, haircut, 
              nail trim, ear cleaning, 
              and anal gland expression (by request).
            </p> */}
          </div>
        </section>
        <br />
        <section>
          <div className='sectionTitle'>
            <h2>Prices:</h2>
          </div>
          <div className='subText'>
            <p>
              Full grooming
              <br />
              Partial grooming
              <br />
              <br />
              $85 per hour
              <br />
              {/* <br />
              (all services are included, Bathing, 
              Brushing, Ear cleaning, and Nail clipping) */}
              
              <br />
              Teeth cleaning: $15
              <br />
              Nail Trim:
              <br />
              for small dogs $18 
              <br />
              mid to large dogs $25 
              <br />
              <br />
            </p>
          </div>
        </section>
        <section>
          <div className='sectionTitle'>
            <h2>Contact:</h2>
          </div>
          <div className='subText'>
            Number: 
            <br />
            206-454-0749
            <br/>
            Instagram:
            <br/>
            <a href="https://www.instagram.com/ayumi_doggrooming/">OnlyWanDogs</a>
            <br/>
            Email: 
            <br />
            OnlyWanDogs@gmail.com
            <br/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App

/*
idea for scroll to function, may be best for mobile
do to large card length

<nav>
  <ul>
    <li><a href="#whyUs">Why Us</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav> */