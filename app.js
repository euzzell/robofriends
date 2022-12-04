import { render } from "@testing-library/react";
import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import './App.css';

class App extends Component {
    constructor() {
        super ()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onsearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }
    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
              <h1 className= 'f2' >RoboFriends</h1>
              <SearchBox searchChange={this.onsearchChange}/>
              <CardList robots={filteredRobots}/>
            </div>
              
          );
    }
}
   

export default App;
