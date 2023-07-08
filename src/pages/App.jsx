import '../css/Index.css'
// import {Parallax, ParallaxLayer} from '@react-spring/parallax';

import sato from "../../public/sotaLogos/sotaLogo1.webp"
//change to 8 for other logo!                  ^^^

//photos for body
import mainImage from "../../public/works/asianFusion.webp"
import puppies from "../../public/works/puppies2.webp"
import teddy from "../../public/works/teddy.webp"
import ayuComp from "../../public/works/ayuComp.webp"
import asianFusion from "../../public/works/asianFusion3.webp"
import petal from "../../public/works/petal.webp"
import ayu from "../../public/works/AyumiMatsu2.webp"

//videos for body
import afVideo from "../../public/works/afVideo.webm"
import afVideo2 from "../../public/works/afVideo.mp4"

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
          <a href="https://www.instagram.com/ayumi_doggrooming/"><img className="basicPhoto" src={mainImage} /></a>
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
            <a href="https://www.instagram.com/ayumi_doggrooming/"><img className='basicPhoto' src={ayuComp} /></a>
            <p>
              Ayumi is a japanese proffessional dog groomer in seattle who specializes in asian-fusion hairstyles. 
              She is not only a groomer, but she also has been studying dog behaviors and animal
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
            <a href="https://www.instagram.com/ayumi_doggrooming/"><img className="basicPhoto" src={asianFusion} /></a>
            <p>
              The first grooming experience for puppy is very important 
              because It’s not only a one time job but life-long commitment.
              They have no idea what they will experience for their first time therefore we will 
              be very careful to proceed our services to be successful as enjoyable time 
              for them which will continually no stress for rest of them grooming life!
              <br/>
              <br/>
            </p>
            <h4>The Teddy Bear haircut:</h4>
            <a href="https://www.instagram.com/ayumi_doggrooming/"><img className="basicPhoto" src={teddy} /></a>
            <p>
              Do you like to have your dog to be looks like teddy bear?
              We will seek out each dog’s potential and make as cute as possible!
              <br />
              <br />
            </p>
            <h4>Asian-fusion haircut</h4>
            {/* <a href="https://www.instagram.com/ayumi_doggrooming/"><video className='basicVideo' src={afVideo} /></a> */}
            {/* <video className='basicVideo' src={afVideo} /> */}
            <video className='basicVideo' loop autoPlay muted>
              <source src={afVideo} type="video/webm" />
              <source src={afVideo2} type="video/mp4" />
            </video>
            <p>
              There are a variety of asian-fusion hairstyles.
              If you looking for your pet to have a special look, 
              we are more than happy to consult about this.
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
            <h2>Schedule:</h2>
          </div>
          <div className='subText'>
            We are open from 8am to 5pm,
            <br/>
            Monday through Saturday
          </div>
        </section>
        <br />
        <section>
          <div className='sectionTitle'>
            <h2>Contact:</h2>
          </div>
          <div className='subText'>
            Number: 
            <br />
            <a href="tel:206-454-0749">206-454-0749</a>
            <br/>
            Instagram:
            <br/>
            <a href="https://www.instagram.com/ayumi_doggrooming/">OnlyWanDogs</a>
            <br/>
            Email: 
            <br />
            <a href="mailto: OnlyWanDogs@gmail.com">OnlyWanDogs@gmail.com</a>
            <br/>
          </div>
        </section>
        <br />
        <section>
          <div className='sectionTitle'>
            <h2>Qualifications:</h2>
          </div>
          <div className='subText'>

            <p className="name">Ayumi Matsumoto</p> 
            <a href="https://www.instagram.com/ayumi_doggrooming/"><img className='basicPhoto' src={ayu} /></a>
            
            <p className='name'>North West Grooming Show 2023</p>
            
            <p className='name'>Dog Emotion and Cognition</p>
            
            {/* <p className='name'>Duke University</p> */}
            Duke University
            
            <p className='name'>Animal Behaviour and Welfare</p>
            
            {/* <p className='name'>University of Edinburgh</p> */}
            University of Edinburgh
            
            <p className='name'>EDIVET Acknowledge of what it takes to be a veterinarian</p>
            
          </div>
        </section>
      </div>
    </div>
  )
}

export default App