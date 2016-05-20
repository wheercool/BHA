import React from 'react'
import {Link} from 'react-router'
import {Glyphicon} from 'react-bootstrap'

let WellsitesHeader = props => {
	return (<div>
		
		<div className="pull-right">
			<Link to="/wellsites/byList" className="btn btn-default" activeClassName="active"><Glyphicon glyph="th-list"></Glyphicon></Link>
			<Link to="/wellsites/byGrid" className="btn btn-default" activeClassName="active"><Glyphicon glyph="th"></Glyphicon></Link>
			<Link to="/wellsites/by3D" className="btn btn-default" activeClassName="active">3D</Link>
		</div>
		<h3>Wellsites</h3>
		<div className="clearfix" />
		<hr />
		{props.children}
	</div>)
}
export default WellsitesHeader