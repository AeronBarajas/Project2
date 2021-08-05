import React from "react"
import {Link} from "react-router-dom"


function Featured(props){
    return props.blogPost.map((articles) =>
        <Link to={`/article/${articles.title}`}>
        <h4>{articles.title}</h4></Link>)
 
}



export default Featured