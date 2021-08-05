function ArticlePost(props){

    const title = props.match.params.title

    const articles = props.blogPost.find((articles) => articles.title === title)
    
    return <div>
          <h3>{articles ? articles.title : null}</h3>
          <p>{articles ? articles.content : null}</p>
          <a href={articles ? articles.link : null}>Original Article</a>
        </div>
      
  
  
};

export default ArticlePost;