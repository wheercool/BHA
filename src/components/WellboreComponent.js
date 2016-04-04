'use strict';

import React from 'react';
import ColorPicker from 'react-color';

require('styles//Wellbore.css');

class WellboreComponent extends React.Component {
  constructor(props = '#000000') {
    super();
    this.state = {    	
	    displayColorPicker: false,
	    color: props.color,
    };
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }

  handleClose() {
    this.setState({ displayColorPicker: false });  
  }

  handleChange(color) {
    this.setState({ color: '#' + color.hex });    
  }
  handleColorChanged(hide) {   
    this.props.onColorChanged(this.props.name, this.state.color)
    this.setState({
      displayColorPicker: !hide
    })
  }
  render() {
    const handleColorChanged = this.handleColorChanged.bind(this)
    const handleClose = this.handleClose.bind(this)
    const handleChange = this.handleChange.bind(this)
    const handleClick = this.handleClick.bind(this)
  	return (<li  className="list-group-item">
             
              <div className="">
              

               <input type="checkbox" 
                      onChange={this.props.onChanged.bind(this, this.props.name)} 
                      checked={this.props.isSelected}></input>
                      <span>&nbsp;{this.props.name}</span>
                <div style={{
                        backgroundColor: this.props.color,                        
                  }}

                  className="color-picker-btn pull-right"
                  onClick={handleClick}></div> 
            </div>

              

              <div style={{display:this.state.displayColorPicker?'block':'none', width: '100%'}}>
              <ColorPicker color={this.state.color}                           
                          type="slider" 
                          onClose={handleClose}
                          onChange={handleChange}
                          onChangeComplete={this.handleColorChanged.bind(this, false)} />
                          <div className="text-center">
                            <button className="btn btn-default" onClick={handleClose}>Cancel</button>
                            <button className="btn btn-primary" onClick={this.handleColorChanged.bind(this, true)}>OK</button>
                          </div>
              </div>

            </li>);
  }
}

WellboreComponent.displayName = 'WellboreComponent';

// Uncomment properties you need
// WellboreComponent.propTypes = {};
// WellboreComponent.defaultProps = {};

export default WellboreComponent;
