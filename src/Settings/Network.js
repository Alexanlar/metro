import React, { Component } from 'react';

class Network extends Component {
  constructor(props){
    super(props);
    this.state={
      dhcp:false,
      ip:'',
      mask:'',
      gate:'',
      mainDns:'',
      altDns:'',
      disabled:false,
    }
  }
  handleChange(event){
    console.log(event.target.name)
    this.setState({[event.target.name]: event.target.value});
  }
  handleChangeDhcp(event){
    console.log(event.target.name)
    this.setState({dhcp:!this.state.dhcp});
    this.setState({disabled:!this.state.disabled});
  }
  handleSubmit(event){
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <form name="Network" onSubmit={this.handleSubmit.bind(this)}>
        <dl>Натройки сети
            <dd>Включить DHCP<input name='dhcp' type='checkbox' value={this.state.dhcp} onChange={this.handleChangeDhcp.bind(this)}/></dd>
            <dd>IP-адрес<input name='ip' type='text' value={this.state.ip} onChange={this.handleChange.bind(this)} disabled={this.state.disabled}/></dd>
            <dd>Маска подсети<input name='mask' type='text' value={this.state.mask} onChange={this.handleChange.bind(this)}disabled={this.state.disabled}/></dd>
            <dd>Основной шлюз<input name='gate' type='text' value={this.state.gate} onChange={this.handleChange.bind(this)}disabled={this.state.disabled}/></dd>
            <dd>Предпочитаемый DNS-сервер<input name='mainDns' type='text' value={this.state.mainDns} onChange={this.handleChange.bind(this)}/>DNS-сервер ставит в соответствие имена устройств их IP-адресам</dd>
            <dd>Альтернативный DNS-сервер<input name='altDns' type='text' value={this.state.altDns} onChange={this.handleChange.bind(this)}/></dd>
            <input type='submit' />
        </dl>
      </form>
    );
  }
}

export default Network;
