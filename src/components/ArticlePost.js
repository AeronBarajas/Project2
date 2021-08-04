import React from "react";

function ArticlePost(props){

    const key = props.match.params.key

    const blogPost = props.selectArticle.find((blogPost) => blogPost.key === key)
    return (
        <div>
          <h3>{blogPost.title}</h3>
          <h5>{blogPost.content}</h5>
        </div>
    )
  
};

export default ArticlePost;