import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route, Redirect} from "react-router-dom";
import Home from './components/Home/home';
import RepoDetail from './components/RepoDetail/repoDetail';
import Followers from './components/Followers/followers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home/detail/:id" component={()=><RepoDetail />} />
          <Route path="/home/followers/:username" component={()=> <Followers/>}/>
          <Route path="/home" component={()=><Home />} />
          <Redirect path="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
