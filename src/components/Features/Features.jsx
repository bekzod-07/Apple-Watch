import "./Features.css"

function Features(){
    return(
        <div className='features'>
            <div className="container">
                <div className="features__app">
                    <div className="features__app__section__one">
                        <h3>Know your runs. In and out.</h3>
                        <p>Train smarter with more in-run stats. Want to compare a run to your last five? Just
                            swipe left. Mark splits by selecting pause or using gestures, like tapping the screen
                            or double-clicking the side button. And get a full post-run report, including elevation.</p>
                    </div>

                    <div className="features__app__section__one">
                        <h3>Run in good spirits..</h3>
                        <p>A little support can go a long way. You can receive encouraging emoji from friends. And reminders
                            triggered by your friends’ shared activity, the current weather, or your own history give you
                            every reason to run.</p>
                    </div>

                    <div className="features__app__section__one">
                        <h3>Just do it. Sunday.</h3>
                        <p>Run every Sunday and see how long you can keep your streak alive. Fuel your run with exclusive Nike+ Run Club playlists on Apple Music.</p>
                        <h2>Learn more</h2>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Features