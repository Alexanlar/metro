import React, { Component } from 'react';

class RegistInfo extends Component {
  constructor(props){
    super(props);
    this.state={
      serial:"0fdsfasdw",
      id:'',
      vehNum:'',
      vehPlate:'',
      lineNum:'',
      drvNum:'',
      drvName:'',
    };
  }
  handleChange(event){
    console.log(event.target.name)
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event){
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <dl>
            <dt>Информация о устройстве</dt>
              <dd>Серийный номер{this.props.serial}</dd>
              <dd>ID устройства<input name='id' type='text' value={this.state.id} onChange={this.handleChange.bind(this)}/></dd>
            <dt>Информация о транспорте</dt>
              <dd>Номер транспорта<input name='vehNum' type='number' value={this.state.vehNum} onChange={this.handleChange.bind(this)}/></dd>
              <dd>Номерной знак<input name='vehPlate' type='number' value={this.state.vehPlate} onChange={this.handleChange.bind(this)}/></dd>
              <dd>Номер линии<input name='lineNum' type='number' value={this.state.lineNum} onChange={this.handleChange.bind(this)}/></dd>
            <dt>Информация о водителе</dt>
              <dd>Номер водителя<input name='drvNum' type='number' value={this.state.drvNum} onChange={this.handleChange.bind(this)}/></dd>
              <dd>Имя водителя<input name='drvName' type='text' value={this.state.drvName} onChange={this.handleChange.bind(this)}/></dd>
            <input type='submit'/>
          </dl>
        </form>
    );
  }
}

export default RegistInfo;
