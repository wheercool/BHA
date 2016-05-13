'use strict';

import React from 'react';
import EditableHeader from './EditableHeader';
import {Panel, Button, ListGroupItem, ListGroup} from 'react-bootstrap';

let ProjectExplorer = (props) => {
	props = props || {wellsites: []}
  return (
  	<Panel  header={<EditableHeader title="Project Explorer" />}
  			footer={<Button>Add</Button>}>
  		<ListGroup>
  			{
  				props.wellsites.map((d, id) => <ListGroupItem key={id}><EditableHeader title={d.name} /></ListGroupItem>)
  			}	  		
  		</ListGroup>  		
  	</Panel>
  );
}

export default ProjectExplorer;
