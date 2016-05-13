'use strict';

import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import ProjectExplorer from './ProjectExplorer';
import WellsiteExplorer from './WellsiteExplorer';
import { Router, Route, Link, RouteHandler } from 'react-router'


let NavigationPanel = (props) => {
	debugger;
	console.log(props.children)
	return (
	<div>
		<Breadcrumb>
			 <Breadcrumb.Item href="#">
		      		Project Explorer
		    </Breadcrumb.Item>
			 <Breadcrumb.Item href="#">
		      		Wellbores
		    </Breadcrumb.Item>
		</Breadcrumb>
		{props.children}
		
	</div>)
	};

export default NavigationPanel;