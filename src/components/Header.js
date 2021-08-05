import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    return  <div className="nav">
    <div className="nav-item"><span className="nav-logo">
        <Link to="/"><img className='ignlogo' src='https://images.squarespace-cdn.com/content/v1/5a4e740c4c326d723144bf21/1515109896684-6ZGJ7BT44OR0R0VOYJ1O/ign-logo-2color%402x.png'/></Link></span></div>
    <div className="nav-item" className='articlesreroute'>
        <Link to="/articles">Articles</Link></div>

</div>
}

export default Header