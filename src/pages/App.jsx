import '../css/Index.css'
// import '../css/main.css'
// import {Parallax, ParallaxLayer} from '@react-spring/parallax';

import "../assets/satoLogo1.png"

//create scrollTo function


function App() {

  return (
    <div>
      <div className='title'>
        large text
      </div>
      <div className='subTitle'>
        Subtitle
      </div>

      <div className='sectionTitle'>
        Why Us:
      </div>
      <div className='subText'>
        <p></p>
      </div>

      <div className='sectionTitle'>
        Services:
      </div>
      <div className='subText'>
        <p></p>
      </div>

      <div className='sectionTitle'>
        Contact:
      </div>
      <div className='subText'>
        <p></p>
      </div>

    </div>
  )
}

export default App

/*
<Parallax pages={1} style={{ top: '0', left: '0' }}>
        <ParallaxLayer sticky={{ start: 1}}>
        <div className="cardContainer">
          <div className="card">         
            <div>
              <h1 className="title">Only Wan Dog Grooming</h1>
            </div>
            <div className="textBody">
              <p>
                phone: 206-454-0749 <br />
                Hours of Operation: 9am-5pm, Monday-Friday <br />
                Email: test@gmail.com <br /> <br />
                Services:
              </p>
              <ol>
                <li>Full groom</li>
                <li>Partial</li>
                <li>Bathing</li>
                <li>Nail trimming</li>
                <li>Ear cleaning</li>
                <li>Gland expression (by request)</li>
              </ol>
              <p>
                
              </p>
            </div>
          </div>
        </div>
        
        </ParallaxLayer>
      </Parallax>
*/