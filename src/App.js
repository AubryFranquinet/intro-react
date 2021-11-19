import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Todo from './components/todo';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Main />
                <Todo />
            </div>
        );
    }
}

export default App;