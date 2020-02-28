import CardList from './CardList.js';
import React, { Component } from 'react';
import SearchBox from './SearchBox';
import {robots} from './Robots';
import './app.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
        
    }

    onSearchChange = (event) => {
        this.setState( {searchField: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return(
            <div className="tc">
            <h1>Robo Friends</h1>
            <SearchBox onSearchChange={this.onSearchChange} />
            <CardList robots={filteredRobots}/>
            </div>
            );
        }
    }
    
    export default App;