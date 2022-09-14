import React, { Component } from 'react';
import Container from './Container';
import Results from './Results';

class App extends Component {
    render() {
        return (
            <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
                <h1>Solo Project Test</h1>
                <Results />
                <Container /> 
            </div>
        )
    }
}


export default App;