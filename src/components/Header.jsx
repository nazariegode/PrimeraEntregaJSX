import CardWidgets from "./CardWidgets"

const Header = () => {

    return (
        <header className="header">
                <div className="header_container">
                    <img className="header_logo" src="logo.jpg" alt="" />

                    <nav className="header_nav">
                    <a className="header_link" href="#"> Nuestro Productos</a>
                    <a className="header_link" href="#"> Nosotros</a>
                    <a className="header_link" href="#"> Contactanos</a>
                    <CardWidgets/>

                    </nav>
                </div>
        </header>
    )

}

export default Header 