import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ArticlePost from "./pages/ArticlePost";

function App() {

  // const [articles, setArticles] = useState([]);
  // const [article, setArticle] = useState([]);

  const getAllArticles = async () => {
    const response = await fetch(
      "https://cdn.contentful.com/spaces/iz60vf35ehx3/environments/master/entries?access_token=jmNnYeQ0Lpi1GrZB672PyIcHv7mNkLq1qenFEXqXF6Y"
    );
    const data = await response.json();
    console.log('API call test', data)
    }




  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/article">
        <ArticlePost />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
