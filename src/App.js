import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Navigate from "./components/Navigate/Navigate";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <Navigate/>
        <div className='app-wrapper-content'>
        {/*<Profile/>*/}
        <Dialogs/>
        </div>
    </div>
  );
}

export default App;
