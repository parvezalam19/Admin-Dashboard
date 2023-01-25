import React, { useEffect, useState } from 'react'
import './Navbar.css';
import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';




const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { pathname } = location;
    const menu = useRef();
    const hideLogoutBtn = pathname === '/'
    const [menuToggele, setMenuToggele] = useState(false)
    const clearStorage = () => {
        navigate('/')
        localStorage.clear();
    }


    const toggele = () => {
        setMenuToggele(!menuToggele);

    }
    useEffect(() => {
        if (menuToggele) {
            menu.current.style.display = 'block';
        } else {
            menu.current.style.display = 'none';
        }
    }, [menuToggele])







    return (
        <div>

            <nav className='navbar w-100 '>
                <div className="container h-100">
                    <a href='' className=" navbar-brand">
                        <span>PRODUCT ADMIN</span>
                    </a>

                    <div className="navbar-collapse collapse">

                        <ul className="navbar-nav max-auto h-100">
                            <li className={`nav-item ${pathname === '/dashboard' ? 'active' : ''}`}>
                                <Link className='nav-links' to="/dashboard">
                                    <i class="fa-solid fa-gauge-high"></i>   Dashboard
                                </Link>
                            </li>
                            <li className={`nav-item ${pathname === '/products' ? 'active' : ''}`}>
                                <Link className='nav-links' to="/products">
                                    <i class="fa-solid fa-cart-shopping"></i>  Products
                                </Link>
                            </li>
                            <li className={`nav-item ${pathname === '/account' ? 'active' : ''}`}>
                                <Link className='nav-links' to="/account">
                                    <i class="fa-solid fa-user"></i>   Account
                                </Link>
                            </li>
                            {!hideLogoutBtn && <li className='nav-item logout-btn'>
                                <Link to='/' href="" className='nav-links'>
                                    <span className='logout-btn' onClick={clearStorage}> Admin ,Logout</span>

                                </Link>
                            </li>}

                        </ul>

                    </div>
                    <div className="hamburger" onClick={toggele}>
                        <i class="fa-solid fa-bars"></i>

                    </div>
                    <div className="menu-links" ref={menu}>
                        <ul>
                            <li>
                                <Link className='links' to="/dashboard">
                                    <i class="fa-solid fa-gauge-high"></i>   Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link className='links' to="/products">
                                    <i class="fa-solid fa-cart-shopping"></i>  Products
                                </Link>
                            </li>
                            <li>
                                <Link className='links' to="/account">
                                    <i class="fa-solid fa-user"></i>   Account
                                </Link>
                            </li>
                            <li>
                                <Link to='/' href="" className='links'>
                                    <span className='logout-btn' onClick={clearStorage}> Admin ,Logout</span>

                                </Link>
                            </li>
                        </ul>
                    </div>



                </div>

            </nav>






        </div>
    )
}

export default Navbar