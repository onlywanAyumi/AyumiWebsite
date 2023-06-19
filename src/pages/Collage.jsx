// import '../css/Index.css'
import '../css/temp.css'


import image1 from '../assets/banana_leaves.jpg';
import example_1 from '../assets/example_1.png';

function Collage() {

  return (
    <>
      <div className="App">
        <Parallax strength={500} bgImage={image1}>
        </Parallax>
      </div>
    </>
  )
}

export default Collage

//test image idea
/*
<div className="Collage">
  <div className="photos">
    <img src="http://fakeimg.pl/360x360/000/?text=1" />
    <img src="http://fakeimg.pl/360x360/111/?text=2" />
    <img src="http://fakeimg.pl/360x360/222/?text=3" />
    <img src="http://fakeimg.pl/360x360/333/?text=4" />
    <img src="http://fakeimg.pl/360x360/444/?text=5" />
    <img src="http://fakeimg.pl/360x360/555/?text=6" />
    <img src="http://fakeimg.pl/360x360/666/?text=7" />
    <img src="http://fakeimg.pl/360x360/777/?text=8" />
    <img src="http://fakeimg.pl/360x360/888/?text=9" />
    <img src="http://fakeimg.pl/360x360/999/?text=10" />
    <img src="http://fakeimg.pl/360x360/aaa/?text=11" />
    <img src="http://fakeimg.pl/360x360/bbb/?text=12" />
  </div>
</div>
*/