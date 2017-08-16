import React, { Component } from 'react';

class Device extends Component{
  constructor(props) {
    super(props)
    this.state={
      name:'',
      chanNumb:'',
      currSpace:1024,
      space:2048,
    };

  }
  handleChange(event){
    console.log(event.target.type)
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
        <div>
          <dt>{this.props.number}</dt>
            <dd>Тип носителя</dd>
            <dd><select>
                  <option>HDD</option>
                  <option>SD</option>
                  <option>FLASH</option>
                </select>Псевдоним видеорегистратора позволяет ему присвоить имя, что более понятно для человека чем идентификационный номер</dd>
            <dd>Количество каналов</dd>
            <dd><input name='chanNumb' type='number' value={this.state.chanNumb} onChange={this.handleChange.bind(this)}/>Данное поле определяет тип носителя.</dd>
            <dd>Объем свободной памяти</dd>
            <dd><input name='currSpace' type='number' value={this.state.currSpace}/>Данное поле информационное и показывает свободный объем памяти на носителе.</dd>
            <dd>Общий объем памяти</dd>
            <dd><input name='space' type='number' value={this.state.space}/>Данное поле информационное и показывает общий размер носителя.</dd>
        </div>
    );
  }
}
class Media extends Component {
  render() {
    return (
        <div>Носитель информации:
        <Device number="1" />
        </div>
    );
  }
}

export default Media;
