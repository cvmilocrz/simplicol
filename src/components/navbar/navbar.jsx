import './navbar.css';
import logo from '../../assets/video/logo.webm';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const [logoMoved, setLogoMoved] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLogoMoved(true);
        }, 2100);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <div className={`siteLogo ${logoMoved ? 'moved' : ''}`}>
                <video autoPlay muted >
                    <source src={logo} type="video/webm" />
                    Tu navegador no soporta el formato de video.
                </video>
            </div>
            <nav className='Menu'>
                <div className="menuContainer">
                    <div className="menuOptions">
                        <Link className="menuItem">Inicio</Link>
                        <Link className="menuItem">Nosotros</Link>
                        <Link className="menuItem">Contacto</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;