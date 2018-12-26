import React, { Component } from 'react';
import Home from './Pages/Home';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Book from './Pages/Book'
import Author from './Pages/Author'
import BookCreate from './Pages/BookCreate'
import AuthorCreate from './Pages/AuthorCreate'

class App extends Component {
  render() {
    return (
      <div>
                    <Switch>
                        <Route path = '/' exact component={Home}/>
                        <Route path = '/book' exact component={Book}/>
                        <Route path = '/book/create' component={BookCreate}/>
                        <Route path = '/author' exact component={Author}/>
                        <Route path = '/author/create' component={AuthorCreate}/>
                    </Switch>
      </div>
    );
  }
}

export default App;
