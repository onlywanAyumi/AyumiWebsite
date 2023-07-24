// components
import App from './App.jsx';

//css
import '../css/BG.css';

//images
import leaves1 from '../assets/leaves1.webp'; //setting here for future ability to easily change with js

//libraries
import {Parallax, ParallaxLayer} from '@react-spring/parallax';

// const { scrollProgress } = useScroll();

function BG()
{
  // const alignCenter = { display: 'flex', alignItems: 'center' }

  return (
    <Parallax pages={1}>
      {/* <img src={leaves1} alt="leaves" className="leaves1" /> */}

      <ParallaxLayer speed={0.5}>
        <App />
      </ParallaxLayer>
    </Parallax>
  )
}

export default BG