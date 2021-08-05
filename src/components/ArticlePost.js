function ArticlePost(props){

    const title = props.match.params.title

    const articles = props.blogPost.find((articles) => articles.title === title)
    
    return <div>
          <h3>{articles.title}</h3>
          <p>{articles.content}</p>
        </div>
      

  
};

export default ArticlePost;