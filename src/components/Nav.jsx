import React from 'react'
import Logo from '../assets/images/logo.svg'
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'

function Nav() {
    return (
        <nav className='nav-wrapper'>
            <div className="nav-content">
                <ul className='list-styled'>
                    <li>
                        <img src={Logo} alt="Logo" />
                    </li>
                    <li>
                        <a className='link-styled' href="#">Tienda</a>
                    </li>
                    <li>
                        <a className='link-styled' href="#">Mac</a>
                    </li>
                    <li>
                        <a className='link-styled' href="#">Ipad</a>
                    </li>
                    <li>
                        <a className='link-styled' href="#">Iphone</a>
                    </li>
                    <li>
                        <a className='link-styled' href="#">Watch</a>
                    </li>
                    <li>
                        <a className='link-styled' href="#">AirPods</a>
                    </li>
                    <li>
                        <a className='link-styled' href="#">Accesorios</a>
                    </li>
                    <li>
                        <a className='link-styled' href="#">Soporte</a>
                    </li>
                    <li>
                        <img src={Search} alt="" />
                    </li>
                    <li>
                        <img src={Store} alt="" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;