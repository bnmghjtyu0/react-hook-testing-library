import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './home'
function App() {
    return (
        <div className="App">
        <Route exact to="/" component={Home}/>

        </div>
    );
}

export default App;
