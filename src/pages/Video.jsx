//making a quick video component due to video not working on safari
//also I dislike the dangerouslySetInnerHTML syntax

//css
import '../css/Index.css'

//videos for body
import afVideo from "../assets//afVideo.webm"
// import afVideo2 from "../assets//afVideo.mp4"

function Video()
{

    retrun (
        <video className='basicVideo' loop autoPlay muted>
            <source src={afVideo} type="video/webm" />
            {/* <source src={afVideo2} type="video/mp4" /> */}
        </video>
    )
}

export default Video;