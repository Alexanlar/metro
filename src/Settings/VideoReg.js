import React, { Component } from 'react';

class Reg extends Component{
  constructor(props) {
    super(props)
    this.state={
      name:'',
      chanNumb:'',
    };
  }
  handleChange(event){
    console.log(event.target.type)
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return (
        <div>
          <dt>Видеорегистратор {this.props.number}</dt>
            <dd>Псевдоним</dd>
            <dd><input name='name' type='text' value={this.state.name} onChange={this.handleChange.bind(this)}/>Псевдоним видеорегистратора позволяет ему присвоить имя, что более понятно для человека чем идентификационный номер</dd>
            <dd>Количество каналов</dd>
            <dd><input name='chanNumb' type='number' value={this.state.chanNumb} onChange={this.handleChange.bind(this)}/></dd>
        </div>
    );
  }
}
class VideoReg extends Component {
  render() {
    return (
        <div>Видеорегистраторы:
        <Reg number="1" />
        </div>
    );
  }
}

export default VideoReg;
