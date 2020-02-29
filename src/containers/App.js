import CardList from '../components/CardList.js';
import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './app.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
        
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}));
    }
    
    onSearchChange = (event) => {
        this.setState( {searchField: event.target.value});
    }
    
    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return !this.state.robots.length ?
        <h1 className='tc'>Loading...</h1> :    
        (
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox onSearchChange={this.onSearchChange} />
                <Scroll >
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            );
        }
    }
    
    export default App;