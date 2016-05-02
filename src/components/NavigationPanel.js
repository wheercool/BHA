'use strict';

import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import ProjectExplorer from './ProjectExplorer';

let NavigationPanel = (props) => (
	<div>
		<Breadcrumb>
			 <Breadcrumb.Item href="#">
		      		Project Explorer
		    </Breadcrumb.Item>
			 <Breadcrumb.Item href="#">
		      		Wellbores
		    </Breadcrumb.Item>
		</Breadcrumb>
		<ProjectExplorer wellsites={[]}/>
	</div>
	);
export default NavigationPanel;