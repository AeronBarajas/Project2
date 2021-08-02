import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ArticlePost from "./pages/ArticlePost";

function App() {

  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);







  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home articles={articles} openArticlePost={openArticlePost} />
      </Route>
      <Route path="/article">
        <ArticlePost article={article} />
      </Route>
    </Switch>
    <Footer />
  </div>
  );
}

export default App;
