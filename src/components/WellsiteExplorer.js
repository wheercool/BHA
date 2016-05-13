'use strict';

import React from 'react';
import EditableHeader from './EditableHeader';
import {Panel, Button, ListGroupItem, ListGroup} from 'react-bootstrap';

let WellsiteExplorer = (props) => {
  return (
  	<Panel  header={<EditableHeader title="Wellsite Explorer" />}
  			footer={<Button>Add</Button>}>
  		<ListGroup>
  			{
  				props.wells.map((d, id) => <ListGroupItem key={id}><EditableHeader title={d.name} /></ListGroupItem>)
  			}	  		
  		</ListGroup>

  	</Panel>
  );
}

export default WellsiteExplorer;
