import React, { Component } from 'react';
import Scheme from './img/schema_k1.png';
class CamSet extends Component {
  constructor(props){
    super(props);
      this.state={
        A1:'',
        A2:'',
        A3:'',
        A4:'',
        B1:'',
        B2:'',
        B3:'',
        B4:'',
        K1:'',
        K4:'',
        D1:'',
        D4:'',
        brightness:50,
        contrast:50,
        hShift:50,
        vShift:50,
        hСompr:50,
        vCompr:50,
      };
  };
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
          <dl>Настройки камер
            <dt>Ссылки на камеры</dt>
              <img src={Scheme} alt="Схема вагона"/>
              <dd>URL для камеры А1<input name='A1' type='url' value={this.state.A1} onChange={this.handleChange.bind(this)}/></dd>
              <dd>URL для камеры А2<input name='A2' type='url' value={this.state.A2} onChange={this.handleChange.bind(this)}/></dd>
              <dd>URL для камеры А3<input name='A3' type='url' value={this.state.A3} onChange={this.handleChange.bind(this)}/></dd>
              <dd>URL для камеры А4<input name='A4' type='url' value={this.state.A4} onChange={this.handleChange.bind(this)}/></dd>
              <dd>URL для камеры B1<input name='B1' type='url' value={this.state.B1} onChange={this.handleChange.bind(this)}/></dd>
              <dd>URL для камеры B2<input name='B2' type='url' value={this.state.B2} onChange={this.handleChange.bind(this)}/></dd>
              <dd>URL для камеры B3<input name='B3' type='url' value={this.state.B3} onChange={this.handleChange.bind(this)}/></dd>
              <dd>URL для камеры B4<input name='B4' type='url' value={this.state.B4} onChange={this.handleChange.bind(this)}/></dd>
              <dd>URL для камеры K1<input name='K1' type='url' value={this.state.K1} onChange={this.handleChange.bind(this)}/></dd>
              <dd>URL для камеры K4<input name='K4' type='url' value={this.state.K4} onChange={this.handleChange.bind(this)}/></dd>
              <dd>URL для камеры D1<input name='D1' type='url' value={this.state.D1} onChange={this.handleChange.bind(this)}/></dd>
              <dd>URL для камеры D4<input name='D4' type='url' value={this.state.D4} onChange={this.handleChange.bind(this)}/></dd>
            <dt>Параметры изображения</dt>
              <dd>Яркость<input name='brightness' type='range' value={this.state.brightness} onChange={this.handleChange.bind(this)}/>{this.state.brightness}</dd>
              <dd>Контрастность<input name='contrast' type='range' value={this.state.contrast} onChange={this.handleChange.bind(this)}/>{this.state.contrast}</dd>
              <dd>Сдвиг экрана по горизонтали<input name='hShift' type='range' value={this.state.hShift} onChange={this.handleChange.bind(this)}/>{this.state.hShift}</dd>
              <dd>Сдвиг экрана по вертикали<input name='vShift' type='range' value={this.state.vShift} onChange={this.handleChange.bind(this)}/>{this.state.vShift}</dd>
              <dd>Сжатие экрана по горизонтали<input name='hСompr' type='range' value={this.state.hСompr} onChange={this.handleChange.bind(this)}/>{this.state.hСompr}</dd>
              <dd>Сжатие экрана по вертикали<input name='vCompr' type='range' value={this.state.vCompr} onChange={this.handleChange.bind(this)}/>{this.state.vCompr}</dd>
            <input type='submit'/>
          </dl>
        </form>
    );
  }
}

export default CamSet;
