import React, {Component} from "react";
import CardList from "../Components/CardList";
import Searchbox from "../Components/Searchbox.js";
//import {robots} from '../Components/robots';
import Scroll from '../Components/Scroll.js';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor(){
        super()
        //The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. 
        //In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.
        this.state = {
            robots: [],
            searchfield: '' 
        }       
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots : users})})  ;      
    }

    onSearch = (event) => {
        this.setState({searchfield: event.target.value})               
        }
    render(){
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
            //The includes() method returns true if a string contains a specified string, otherwise false.
        })
        //Ternary operators(Conditional ! :)
        return !robots.length ? <h1>Loding</h1>
        : (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearch} searchField={this.onSearch}/>
                    <Scroll>
                        <ErrorBoundry>
                             <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
}

export default App; 