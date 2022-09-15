import React, { Component } from 'react';
import Searches from './Searches';
import Results from './Results';

const axios = require('axios');


class Container extends Component {
    constructor(props){
        super(props);

        this.state = {value:[]};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleChange(event){
    console.log('test');
    this.setState({value: event.target.value});
    
}

//axios request from front end to back end here and clearing out our input field
//saw logs indicating request was in the backend which was good
//on front end getting errors about CORS being disallowed, was able to resolve using a chrome extension?

//next steps we want to take the keyword value and use it in the backend axios request
//return it to the front end and populate our searches component and also populate our results component with the relevant data
//cache the results into a database
handleSubmit(event){
    // debugger;
    console.log('keyword submitted ' + this.state.value);
    event.preventDefault();
    axios.get('http://localhost:3000/get')
    .then((res) => {/*console.log(res)*/
    this.setState({results: res});
    });
    this.setState({value: ''});
}

componentDidMount() {
    console.log('mounted');
};

componentDidUpdate(){
    console.log(this.state);
};

//what I want to do is use the event handler in my text area to capture the state
//pass this down to the Searches component

render() {
    console.log(this.state);
    return (
        <div>
        <h3 id="keyword">Input Keyword</h3>
        <form onSubmit={this.handleSubmit}>
                <textarea cols="20" rows="2" type="search keyword" value={this.state.value} onChange={this.handleChange}/>
            <select>
                <option value="hardwareswap">r/Hardwareswap</option>
                <option value="appleswap">r/Appleswap</option>
                <option value="buildapcsales">r/BuildAPCSales</option>
            </select>
            <input type="submit" value="Submit"/>
        </form>
        {/* <Searches searches={this.state.value}/> */}
        {this.state.results && <Results results={this.state?.results?.data} />}
        </div>
    );
}

}

export default Container;