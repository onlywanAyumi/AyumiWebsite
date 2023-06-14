import '../css/App.css'

function App() {

  return (
    <>
      <div className="imageGrid">
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
    </>
  )
}

export default App
