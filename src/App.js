import "./App.css";
import './styles.css'
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlePost from "./components/ArticlePost";

function App() {

  const apiKey='https://cdn.contentful.com/spaces/iz60vf35ehx3/environments/master/entries?access_token=jmNnYeQ0Lpi1GrZB672PyIcHv7mNkLq1qenFEXqXF6Y'
  const [articles, setArticles] = useState([])
  const selectArticle = async() =>{
    const response = await fetch(apiKey)
    const data = await response.json()
    const fixData = data.items.map( (blogPost, index) => {
      return {
        title: blogPost.fields.title,
        content: blogPost.fields.content,
        key: [index]
     } })
      console.log(fixData)
      setArticles(fixData)
      }

    useEffect (() => {
      selectArticle()
    }, [])
  



  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home articles= {articles}/>
      </Route>
      <Route path="/article">
        <ArticlePost />
      </Route>
    </Switch>
    
  </div>
  );
}

export default App;
