import React, { Component } from 'react';
import Network from './Settings/Network';
import RegistInfo from './Settings/RegistInfo';
import TimeSet from './Settings/TimeSet';
import UserSet from './Settings/UserSet';
import Application from './Settings/Application';
import CamSet from './Settings/CamSet';
import VideoReg from './Settings/VideoReg';
import Media from './Settings/Media'
import './App.css';

const Tabs = React.createClass({
  displayName: 'Tabs',
  propTypes: {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ]).isRequired
  },
  getDefaultProps() {
    return {
      selected: 0
    };
  },
  getInitialState() {
    return {
      selected: this.props.selected
    };
  },
  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  },
  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <li key={index}>
          <a href="#"
            className={activeClass}
            onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
        </li>
      );
    }
    return (
      <ul className="tabs__labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  },
  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.selected]}
      </div>
    );
  },
  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
    );
  }
});

const Pane = React.createClass({
  displayName: 'Pane',
  propTypes: {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  },
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

class Settings extends Component {
  render() {
    return (
      <div>
        <Tabs selected={0}>
          <Pane label="Сеть">
            <Network />
          </Pane>
          <Pane label="Информация о регистрации">
            <RegistInfo />
          </Pane>
          <Pane label="Дата/Время">
            <TimeSet />
          </Pane>
          <Pane label="Настройки камер">
            <CamSet />
          </Pane>
          <Pane label="Видеорегистратор">
            <VideoReg />
          </Pane>
          <Pane label="Носитель информации">
            <Media />
          </Pane>
        </Tabs>
      </div>
    );
  }
}
export default Settings;
