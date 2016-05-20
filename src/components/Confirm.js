import React from 'react'
import {Modal, Button, Glyphicon} from 'react-bootstrap'

let Confirm = props => {
	let {show, onYes, onNo} = props;

	return <Modal show={show}>
		<Modal.Header className="alert alert-danger">
            <Modal.Title ><Glyphicon  glyph="warning-sign"/> Warning!</Modal.Title>
        </Modal.Header>
		<Modal.Body>
			<h4> Are you sure?</h4>
		</Modal.Body>
		<Modal.Footer>
            <Button bsStyle="primary" onClick={onYes}>Yes</Button>
            <Button onClick={onNo}>No</Button>
        </Modal.Footer>
	</Modal>
}

export default Confirm