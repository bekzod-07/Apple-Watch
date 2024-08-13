import "./Intro.css"

import Bg from "./intro-bg.jpg"

function Intro(){
    return(
        <div className='intro'>
            <div className='container'>
                <div className="intro__app">
                    <div className="intro__app__text">
                        <h2>Freedom calls.</h2>
                        <p>Answer a call from your surfboard. Ask Siri to send a message. Stream your favorite songs on your run.
                            And do it all while leaving your phone behind. Introducing Apple Watch Series 3 with cellular. Now
                            you have the freedom to go with just your watch.</p>
                        <button>Watch the keynote</button>
                    </div>
                    <div className="intro__app__img">
                        <img src={Bg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro