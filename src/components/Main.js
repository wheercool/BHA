require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Canvas3D from './Canvas3DComponent'
import WellboreList from './WellboreListComponent'

class AppComponent extends React.Component {
	componentDidMount() {
		this.props.store.subscribe(_ => {
			this.setState(this.props.store.getState())
		})
	}
	onSelectionChanged(name) {

		this.props.store.dispatch({
			type: 'TOGGLE_WELLBORE',
			payload: {
				name: name
			}
		});
	}
  render() {
    return (
      <div className="index">
      	<Canvas3D data={this.props.store.getState().wellbores.filter(x => x.isSelected).map(d=>d.trajectory)}></Canvas3D>
        <div className="container-fluid">
		<h1 id="bha-title">BHA View</h1>

		<div className="row">
			<div className="col-sm-2">
			<div className="panel panel-default">
				<div id="panel-header" className="panel-heading">
					<div className="panel-title">Project Explorer</div>
				</div>
				<WellboreList data={this.props.store.getState().wellbores}
								onSelectionChanged={this.onSelectionChanged.bind(this)}/>
			<div className="panel-footer">
					<div className="well">
						<div style={{color: 'red'}}>x axis (South)</div>
						<div style={{color: 'green'}}>y axis</div>
						<div style={{color: 'blue'}}>z axis (West)</div>
					</div>
					<div id="console"></div>
				</div>
			</div>

			</div>
		
		<section className="col-sm-10">
			<div className="wrapper"></div>
			<div className="">
				
				
					<div className="col-sm-6 view">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title pull-left">Plane</h3>
								<div className="btn-group pull-right">
									<button className="btn btn-default">+</button>
									<button className="btn btn-default">Fit</button>
								</div>
								<div className="clearfix"></div>
							</div>
							<div  className="panel-body">
								<div id="plane-container" className="canvas"></div>
							</div>
						</div>
					</div>

					<div className="col-sm-6 view">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title pull-left">Perspective</h3>
								<div className="btn-group pull-right">
									<button className="btn btn-default">+</button>
									<button className="btn btn-default">Fit</button>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="panel-body"> <div id="perspective-container"  className="canvas"></div></div>
						</div>
					</div>

					<div className="col-sm-6 view">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title pull-left">Orthographic</h3>
								<div className="btn-group pull-right">
									<button className="btn btn-default">+</button>
									<button className="btn btn-default">Fit</button>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="panel-body"><div id="orthographic-container" className="canvas"></div></div>
						</div>
					</div>

					<div className="col-sm-6 view">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title pull-left">Section</h3>
								<div className="btn-group pull-right">
									<button className="btn btn-default">+</button>
									<button className="btn btn-default">Fit</button>
								</div>
								<div className="clearfix"></div>
							</div>
							<div className="panel-body"><div id="section-container" className="canvas"></div></div>
						</div>
					</div>
			</div>
		</section>
		
		
		</div>
		</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
