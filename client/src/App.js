import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    customers:[]
  }
  componentDidMount(){
    fetch('/api/customers').then(res=>res.json()).then(resdata=>{
      console.log(resdata)
      this.setState({customers:resdata.customers})
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Customers</h1>
        <ul>
          {this.state.customers.map(customer =>{
            return <li key={customer.id}>{customer.name}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
