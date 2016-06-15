require('styles/rc-tree.css')
require('styles/wellbores.css')

import React from 'react'
import Tree, {TreeNode} from 'rc-tree';
import {Link, hashHistory} from 'react-router'

import {Panel, Col, Tabs, Tab, ButtonGroup, Button, FormGroup,
		 InputGroup, Glyphicon, FormControl, Radio,
		 Table} from 'react-bootstrap'
import WellboreForm from '../WellboreForm'
import Trajectory from '../Trajectory'

let onClick = (id, baseUrl) => {
	hashHistory.push(baseUrl + '/' + id)
}


const Wellbores = props => {
	const {wellbores, motherbore, wellbore = {id: ""}, baseUrl, disabled} = props;
	const loop = (list, item) => {
		let children = list.filter(x => x.parentId == item.id);
		if (!children.length) return <TreeNode title={item.name} key={item.id} />;

		return <TreeNode title={item.name} key={item.id}>
			{children.map(child => loop(list, child))}
		</TreeNode>
	};
	const wellboresLoop = wellbores.length ? loop.bind(null, wellbores): () => <div></div>;
	let header = <FormGroup >

				 	<InputGroup >
				 		<InputGroup.Addon className="search-input-group"><Link to={props.baseUrl + "/add/"} className="btn-warning btn-lg"><Glyphicon glyph="plus"/></Link></InputGroup.Addon>
				 		<InputGroup.Addon className="search-input-group"><h5>Wellbores</h5></InputGroup.Addon>
				    	<Col sm={12} className="pull-right"><FormControl type="text" placeholder="Search..." /></Col>
				    	<div className="clearfix" />
				    </InputGroup>
				</FormGroup>;


	const heightStyle = {
		minHeight: 250
	}

	var points = {
	    rows: [
	        // ['', '#', 'Depth', 'Inclination', 'Azimuth'],
	        ['1,0', '1,1', '1,2'],
	        ['2,0', '2,1', '2,2'],
	        ['3,0', '3,1', '3,2']
	    ]
	};

	const buttonToolbar = <ButtonGroup>
		<Button bsStyle="success">Add</Button>
		<Button bsStyle="default">Edit</Button>
		<Button bsStyle="danger">Delete</Button>
	</ButtonGroup>
	const propertiesButtonToolbar = <div><ButtonGroup className="pull-right">
		<Button bsStyle="primary">OK</Button>
		<Button>Cancel</Button>
	</ButtonGroup>
	<div className="clearfix" /></div>

	return (<div className="wellbores">
		<Col sm={4}>
		<Panel style={heightStyle} header={header} footer={buttonToolbar}>
			<Tree className="myCls" showLine onSelect={(selectedKeys)=>{onClick(selectedKeys[0], baseUrl)}} selectedKeys={[wellbore.id.toString()]}>
	           {wellboresLoop(motherbore)}
	        </Tree>
        </Panel>
        </Col>
        <Col sm={8}>
        	<Panel style={heightStyle} header="Properties" footer={propertiesButtonToolbar}>
        	<Tabs id="uncontrolled">
        		<Tab eventKey={1} title="Info">
        			<br />
					<WellboreForm disabled={disabled} initialValues={wellbore}/>
        		</Tab>
        		<Tab eventKey={2} title="Trajectory">
					<br />
					<ButtonGroup>
						<Button>Import</Button>
						<Button>Clear All</Button>
					</ButtonGroup>
					<Trajectory points={points.rows} />

        		</Tab>
        		<Tab eventKey={3} title="Completion">
					<br />
        		</Tab>
        	</Tabs>
        	</Panel>
        </Col></div>)

}

export default Wellbores