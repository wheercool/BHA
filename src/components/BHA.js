require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Canvas3D from './Canvas3DComponent'
import WellboreList from './WellboreListComponent'
import Projection from './Projection'
import WellboreForm from './WellboreForm'
import NavigationPanel from './NavigationPanel'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class AppComponent extends React.Component {


  render() {
  	const projectionList = [{
  		id: 'plane-container',
  		title: 'Plane'
  	}, {
  		id: 'perspective-container',
  		title: 'Perspective'
  	}, {
  		id: 'orthographic-container',
  		title: 'Orthographic'
  	}, {
  		id: 'section-container',
  		title: 'Section'
  	}];
  	let props = this.props.main;
    return (
      <div className="index">
      	<Canvas3D data={props.wellbores.filter(x => x.isSelected)}
      			  isFullScreenMode={props.fullScreenModeProjectionIndex >= 0}></Canvas3D>
        <div className="container-fluid">
		<h1 id="bha-title">BHA View</h1>

		<div className="row">
			<div className="col-sm-2">
			<div className="panel panel-default">
				<div id="panel-header" className="panel-heading">
					<div className="panel-title">Project Explorer</div>
				</div>
				<WellboreList data={props.wellbores}
								onSelectionChanged={this.props.onWellboreClick}
								onColorChanged={this.props.onColorChanged}/>

				<WellboreForm onWellboreAdded={this.props.onWellboreAdded}/>
			<div className="panel-footer hidden">
					<div className="well">
						<div style={{color: 'red'}}>x axis (South)</div>
						<div style={{color: 'green'}}>y axis</div>
						<div style={{color: 'blue'}}>z axis (West)</div>
					</div>
					<div id="console"></div>
				</div>
			</div>

			</div>
		
		<section className="col-sm-8">
			<Link to="/bha/wellsites">Test</Link>
			<div className="wrapper"></div>
			<div className="view-container">
					

				{
					projectionList.map((d, index) => <Projection id={d.id}
														key={index}
														isStretched={index == props.fullScreenModeProjectionIndex} 
														style={{display: (props.fullScreenModeProjectionIndex < 0 || index == props.fullScreenModeProjectionIndex)? "block": "none"}}
														title={d.title}
														onModeChanged={this.props.onModeChanged.bind(null, index)}/>)
				}
				
			</div>
		</section>
		
			<div className="col-sm-2">				
				{this.props.children}
			</div>
		
		</div>
		</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

let mapDispatch = (dispatch) => {
	return {
		onWellboreClick: (name) => {
			dispatch({
				type: 'TOGGLE_WELLBORE',
				payload: {
					name: name
				}
			});
		},
		onColorChanged: (name, color) => {
			dispatch({
				type: 'WELLBORE_COLOR_CHANGED',
				payload: {name, color}
			})
		},
		onModeChanged: (index) => {
			dispatch({
				type: 'PROJECTION_MODE_CHANGED',
				payload: {
					index: index
				}
			})
		},
		onWellboreAdded: (wellbore) => {
			dispatch({
				type: 'WELLBORE_ADDED',
				payload: {wellbore}
			})
		}
	}
}

export default connect((state)=> state, mapDispatch)(AppComponent);
