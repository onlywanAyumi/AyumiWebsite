import '../css/Index.css'
import {Parallax, Background} from 'react-parallax';

function App() {

  return (
    <>
      <div className="App">
        <Parallax strength={500} >
          <div className="content">
            <div className="container">
              <h1 className="title">Only Wan Dog Grooming</h1>
            </div>
          </div>
        </Parallax>

      </div>
    </>
  )
}

export default App

/*
<div className="container">
  <div>
    <h1 className="title">Only Wan Dog Grooming</h1>
  </div>
  <div className="card">
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
*/