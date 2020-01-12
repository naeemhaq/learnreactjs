import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: []
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>there are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;

    }
    render() { 
    
        return(
            <React.Fragment>
                {/* logical and operator between two values: 
                the first value is the result of this expression which is a boolean,
                the second value is a string. in javascript you can use the logical and &&
                in a non boolean values. e.g. 
                true && false = false
                true && 'Hi' = Hi because the first expression is true therefore it will evaluvate the second as well. 
                in this case truthy string (non empty). empty string is a falsy statement. 
                true && 'Hi" && 1 
                will render 1
                    */
                }
                {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.renderTags()}
            </React.Fragment>
        );
    }
}
 
export default Counter;