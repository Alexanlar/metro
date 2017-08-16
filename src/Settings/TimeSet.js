import React, { Component } from 'react';

class TimeSet extends Component {
  constructor(props){
    super(props);
    this.state ={
      time:'',
      date:'',
    };
  }
  handleChange(event){
    console.log(event.target.type)
    this.setState({[event.target.type]: event.target.value});
  }
  handleSubmit(event){
    alert('A time was submitted: ' + this.state.time +'\n And date submitted:' + this.state.date);
    event.preventDefault();
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <dt>Установка даты и времени</dt>
          <input type='time' value={this.state.time} onChange={this.handleChange.bind(this)}/>
          <input type='date' value={this.state.date} onChange={this.handleChange.bind(this)}/>
          <input type='submit' />
        </form>
    );
  }
}

export default TimeSet;
