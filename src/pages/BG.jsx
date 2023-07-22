/*
BG means background. This is a page for extrapolating the parallx effect, and corrisponding css from the app component.
my goal is to be able to render both with the same call, and to allow myself to use the ParallaxLayer tag to layer the components.
*/

import App from './App.jsx';
import '../css/BG.css';
import leaves1 from '../assets/leaves1.webp'; // may wish to do this in css instead???

import {Parallax, ParallaxLayer} from '@react-spring/parallax';

function BG()
{
  return (
    <Parallax pages={2}>
        <ParallaxLayer speed={0.5}>
          <div className="bg">
            testing
            <img src={leaves1} />
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer speed={1}>
          <App />
        </ParallaxLayer>
      </Parallax>
  )
}

export default BG