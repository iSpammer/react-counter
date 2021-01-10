import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 5,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
      {
        id: 5,
        value: 1,
      },
    ],
  };

  constructor(props){
    super(props);
    console.log("app constructor")
    //renderd recurcservly
    // this.state = this.props.something a2dr a call el props directly hena
  }

  componentDidMount(){
    console.log("app mount")
    //ajax call from server
    // this.setState{james}
  }


  handleDelete = (counterId) => {
    console.log("event handler", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });

  }
  render() {
    console.log("app rendered")
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counters={this.state.counters} />
        </main>
      </React.Fragment>

    );
  }
}


export default App;
