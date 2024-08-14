import "./Frame.css"
import img from "./frame.jpg"

function Frame(){
    return(
        <div className='frame'>
            <div className="container">
                <div className="frame__app">
                    <div className="frame__app__text">
                        <h2>Nike Sport Band. Light. Flexible. Breathable.</h2>
                        <p>Made from the same durable, lightweight fluoroelastomer as the
                            original Apple Watch Sport Band, the Nike Sport Band reduces
                            weight and improves ventilation via row after row of compression-molded perforations.</p>
                        <button className='button'>Buy now</button>
                    </div>
                    <div className="frame__app__img">
                        <img src={img} alt="rasm"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frame