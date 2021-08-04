import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    return  <div className="nav">
    <div className="nav-item"><span className="nav-logo">
        <Link to="/">IGN</Link></span></div>
    <div className="nav-item">
        <Link to="/">Home</Link></div>

</div>
}

export default Header