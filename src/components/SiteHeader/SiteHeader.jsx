import "./SiteHeader.css"

function SiteHeader(){
    return(
        <header className="site__header">
            <div className='container'>
                <div className="site__header__app">
                    <div className="site__header__app__icon">
                        <img src={"icon.png"} alt="Icon"/>
                    </div>
                    <div className="site__header__app__title">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Offers</li>
                            <li>Services</li>
                        </ul>
                        <p>How can we help you?</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default SiteHeader