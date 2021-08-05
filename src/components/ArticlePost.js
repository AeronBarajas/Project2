function ArticlePost(props){

    const title = props.match.params.title

    const articles = props.blogPost.find((articles) => articles.title === title)
    
    return <div>
          <h3>{articles ? articles.title : null }</h3>
          {/* <p>{articles ? articles.content : null }</p> */}
        </div>
      
  
  
};

export default ArticlePost;