import React, { Component } from 'react';

class Counter2 extends Component {
    state = {
        value: this.props.value,
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
        this.setState({value: this.state.value + 1});
    };

    render() { 
        console.log('props', this.props);
        return(
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                
                {/* passing event arguments 1:13
                    we can have a wrapper function doHandleIncrement() to pass arguments but thats not recommended.
                    check video for details 1:14
                    this.handleIncrement is passing a function reference we will replace this will inline funtion
                    instead of hard codding id: 1 we are passing product variable.
                */}
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const {value: count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter2;