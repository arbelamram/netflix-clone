import React, { useState, useEffect } from 'react'
import '../style/Nav.css'

function Nav() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        }
    
        window.addEventListener("scroll", handleScroll)
    
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
