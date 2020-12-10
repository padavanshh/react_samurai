import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navigate from "./components/Navigate/Navigate";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
        <Header/>
        <Navigate/>
        <div className='app-wrapper-content'>
            <Route path='/dialogs' render={ () => <Dialogs state={props.state.messagesPage}/> }/>
            <Route path='/profile' render={ () => <Profile state={props.state.profilePage} addPost={props.addPost}/> }/>
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
