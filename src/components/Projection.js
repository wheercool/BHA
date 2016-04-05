'use strict';

import React from 'react';

class Projection extends React.Component{
  render() {
  	let iconClass = 'glyphicon ' + (this.props.isStretched? 'glyphicon glyphicon-resize-small':'glyphicon glyphicon-fullscreen');

  	let className = "view col-sm-" + (this.props.isStretched?"12": "6");  		
    return (
    	<div className="Projection" style={this.props.style}>
	        <div className={className}>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title pull-left">{this.props.title}</h3>
						<div className="btn-group pull-right">
							<button className="btn btn-default">Fit</button>
							<button className="btn btn-default" onClick={this.props.onModeChanged}><span className={iconClass} aria-hidden="true"></span></button>
						</div>
						<div className="clearfix"></div>
					</div>
					<div  className="panel-body">
						<div id={this.props.id} className="canvas"></div>
					</div>
				</div>
			</div>
		</div>
      );
  }
};

export default Projection; 

