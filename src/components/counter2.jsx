import React, { Component } from 'react';

class Counter2 extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: []
    };
/*
    constructor () {
        super(); // call the constructor of parent class
        // with the bind method you can set the value of this. 
        // bind method will return a new instance of handleIncrement function
        // in which this will always reference to the current object
        this.handleIncrement = this.handleIncrement.bind(this);
    }
*/
    // the above constructor is not required if we convert below to an arrow function
    handleIncrement = () => {
        // setState is inherited method which updates the virtual DOM and 
        // view is updated through this method. 
        this.setState({count: this.state.count + 1});
    }

    render() { 
    
        return(
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter2;