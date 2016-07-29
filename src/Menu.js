import React, { Component } from 'react';
import "./Menu.css"

class MenuItem extends Component {
  propTypes: {
    title: React.PropTypes.string.required,
    onClick: React.PropTypes.func.required
  }

  render() {
    return (
      <div className="Menu-item" onClick={ (e) => this.props.onClick(e, this.props.title) }>{this.props.title}</div>
    );
  }
}

class Menu extends Component {

  propTypes: {
    onClick: React.PropTypes.func.required
  }

  render() {
    return (
      <div className="Menu">
        <MenuItem title='Stores' onClick={this.props.onClick}/>
        <MenuItem title='Products' onClick={this.props.onClick}/>
        <MenuItem title='Shopping Lists' onClick={this.props.onClick}/>
      </div>
    );
  }
}

export default Menu;