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
            <Route path='/dialogs' render={ () => <Dialogs store={props.store} /> }/>
            <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
                                                           dispatch={props.dispatch} /> }/>
        </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
