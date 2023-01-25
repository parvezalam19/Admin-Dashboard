import React, { useEffect } from 'react'
import './LoginNavbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';




const LoginNavbar = () => {
    // const navigate = useNavigate()
    // const location = useLocation();
    // const { pathname } = location;

    // const hideLogoutBtn = pathname === '/'

    // const clearStorage = () => {
    //     navigate('/')
    //     localStorage.clear();
    // }



    return (
        <div>

            <nav className='navbar w-100 '>
                <div className="container h-100">
                    <a href='/' className=" navbar-brand">
                        <span>PRODUCT ADMIN</span>
                    </a>

                    <div className="navbar-collapse collapse">

                        <ul className="navbar-nav max-auto h-100">
                            <li className='nav-item'>
                              
                                    <Link className='nav-links' to="/">
                                        <i class="fa-solid fa-gauge-high"></i>   Dashboard
                                    </Link>

                            </li>
                            <li className='nav-item'>
                                <Link className='nav-links' to="/">
                                    <i class="fa-solid fa-cart-shopping"></i>  Products
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-links' to="/">
                                    <i class="fa-solid fa-user"></i>   Account
                                </Link>
                            </li>
                         

                        </ul>

                    </div>
                </div>

            </nav>






        </div>
    )
}

export default LoginNavbar