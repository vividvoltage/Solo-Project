import React, { Component } from 'react';
import Searches from './Searches';



class Container extends Component {
    constructor(){
        super();

        this.state = {value: 'input keyword'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleChange(event){
    this.setState({value: event.target.value});

}

handleSubmit(event){
    console.log('keyword submitted ' + this.state.value);
    event.preventDefault();
}

componentDidMount() {

};

componentDidUpdate(){
    console.log(this.state);
};

render() {
    return (
        <div>
        <h3 id="keyword">Input Keyword</h3>
        <form onSubmit={this.handleSubmit}>
            <label>
                <textarea type="search keyword" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <select>
                <option value="hardwareswap">r/Hardwareswap</option>
                <option value="appleswap">r/Appleswap</option>
                <option value="buildapcsales">r/BuildAPCSales</option>
            </select>
            <input type="submit" value="Submit"/>
        </form>
        <Searches ={this.state.value}/>
        </div>
    );
}

}

export default Container;