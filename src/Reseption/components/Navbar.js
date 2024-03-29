import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import AOS from "aos"
import "aos/dist/aos.css"
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
        history.push('/reseption/auth')
    }

    const [show, setShow] = useState(true)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" data-aos="fade-down" data-aos-duration="1000" >
            <div className="container" >
                <Link className="navbar-brand" to="/">Logo</Link>
                <button onClick={() => setShow(!show)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} className="navbar-icon" />
                </button>
                <div className={show ? "collapse navbar-collapse" : "collapse navbar-collapse show"} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/reseption/home">Bosh sahifa</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Qabul
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="nav-item">
                                    <Link className="dropdown-item" to="/reseption/qabul">Offline qabul</Link>
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li className="nav-item">
                                    <Link className="dropdown-item" to="/reseption/onlineqabul">Online qabul</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mijozlar
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="nav-item">
                                    <Link className="dropdown-item" to="/reseption/clients">Offline mijozlar</Link>
                                </li>
                                <li><hr class="dropdown-divider" /></li>
                                <li className="nav-item">
                                    <Link className="dropdown-item" to="/reseption/onlineclients">Online mijozlar</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reseption/cost">Xarajat</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reseption/costs">Xarajatlar</Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" href="" onClick={logoutHandler} >Chiqish</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
