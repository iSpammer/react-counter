import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

    constructor(){
        super();
        console.log("counters constructor");


    }

    componentDidMount(){
        console.log("counters mount");
    }
  render() {
      console.log("counters rendered")
      const {onReset, onDelete, onIncrement, counters} = this.props
    return (
      <div>
        <button
          className="btn btn-primary btn-sm btn-m2"
          onClick={onReset}
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          >
            {/* <h4>
                            Counter #{counter.id}
                        </h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
