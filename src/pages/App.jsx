// import '../css/Index.css'
import '../css/temp.css'
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import image1 from '../assets/banana_leaves.jpg';

function App() {

  return (
      <div className="background">

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
                <li>Hair trimming</li>
                <li>Bathing</li>
                <li>Nail trimming</li>
                <li>Ear cleaning</li>
                <li>Gland expression (by request)</li>
              </ol>
              <p>
                Price: <br />
                $80 per hour <br />
                $20 per 15 minutes <br />
                Average service time: About 45 minutes to an hour <br />
              </p>
            </div>
          </div>
        </div>
        
        </ParallaxLayer>
      </Parallax>
      </div>
  )
}

export default App

/*

*/