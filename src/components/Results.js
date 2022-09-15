import React, { Component } from 'react';

class Results extends Component {
    constructor(props){
        super(props);

        this.state = {};
    }

componentDidMount(){
    // console.log(this.props.results[0].data.title, this.props.results[0].data.url);
}

render() {
    const resultArray = this.props.results;
    const renderedPosts = [];
    for(let i = 0; i < resultArray.length; i++){
        renderedPosts.push(<ul>{resultArray[i].data.title}<a href={resultArray[i].data.url} target='_blank'>Link</a></ul>);
    }
    // const renderedPosts = resultArray.map(({title, url}) => (
    //     <p key={}
    // ))
    

    return(
        <div>
            <h3 id="results">Results</h3>
            {renderedPosts}
        </div>
    );
}

}

export default Results;