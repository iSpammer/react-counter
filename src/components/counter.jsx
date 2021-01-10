import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        // value: this.props.counter.value,
        tags: ['tag1', 'tag2', 'tag3']
     };

     renderTags(){
         return (this.state.tags.length === 0) ? <p>No Tags here</p> : <ul> {this.state.tags.map(tag => <li key={tag} >{tag}</li>)}
     </ul>;
     }

    constructor(){
        super();
        // this.handleIncrement = this.handleIncrement.bind(this);
        console.log("counter constructor");
    }

    componentDidMount(){
        //w hena msln mmkn delete requests
        console.log("counter mount");
    }

    componentDidUpdate(prevProps, prevState){
        //mmkn msln law fee t8yyr a3ml ajax 3shan ageeb new data
        console.log("counter update, prev props ",prevProps);
        console.log(" prevState ", prevState)
        if(prevProps.counter.value !== this.props.counter.value){
            //ajax call hena msln get new data
        }
    }

    componentWillUnmount(){
        console.log("counter unmount")
    }

    //  handleIncrement = () => {
    //      console.log();
    //      this.setState({ value: this.state.value+1 })
    //  }

     handleDelete=()=>{
         console.log("delete");
     }

    //  doHandelIncement = ()=> {
    //      
    //  }

    //  styles = {
    //     fontSize: 50,
    //     fontWeight: 'bold'
    //  };
    render() { 

        console.log("counter rendered")
        return (
        <div>
            {/* {this.props.children} */}
            <span className={this.getBadgeClasses()} >{ this.formatCount() }</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            {/* {this.state.tags.length === 0 && 'Please create a new tag!'}
            {this.renderTags()} */}
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;