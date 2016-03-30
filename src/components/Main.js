require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Canvas3D from './Canvas3DComponent'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
      	<Canvas3D></Canvas3D>
        
        <div className="container-fluid">
		<h1 id="bha-title">BHA View</h1>

		<div className="row">
			<div className="col-sm-2">
			
			<div className="panel panel-default">
				<div id="panel-header" className="panel-heading">
					<div className="panel-title">Project Explorer</div>
				</div>
				<ul className="list-group">
					<li className="list-group-item">Wellbore 1</li>
					<li className="list-group-item">Wellbore 2</li>					
					<li className="list-group-item">Wellbore 3</li>					
					<li className="list-group-item">Wellbore 4</li>					
				</ul>
				<div className="panel-footer">
					<button className="btn btn-default">Add</button>
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
