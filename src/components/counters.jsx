import React, { Component } from 'react';
import Counter2 from './counter2';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
     }
    render() { 
        return ( <div>
            {this.state.counters.map(counter => <Counter2 key={counter.id}/>) }
        </div> );
    }
}
 
export default Counters;