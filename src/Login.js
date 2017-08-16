import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';
import Settings from './Settings';

class Form extends Component{
  static propTypes = {
    name:PropTypes.text,
    type:PropTypes.text
  }
  constructor(props){
    super(props);

    this.state = {value: ''}

  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render(){
    return(
      <form>
        {this.props.name}:
        <input
          type={this.props.type}
          value={this.state.value}
          onChange={this.handleChange.bind(this)} />
      </form>
    );
  }
}
class Login extends Component {
  render() {
    return (
      <div>
      <Form name="Login" type="text" />
      <Form name="Password" type="password" />
      <Link to='./Settings'><button>Submit</button></ Link>
      </ div>
    );
  }
}
export default Login;
