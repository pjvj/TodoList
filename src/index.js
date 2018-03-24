import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoList from "./components/TodoList";

class App extends React.Component {

    render(){

        return(
        <div>

            <div>
                <TodoList/>
            </div>
        </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector(".container12"));