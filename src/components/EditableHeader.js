'use strict';

import React from 'react';
import { Glyphicon} from 'react-bootstrap';

let EditableHeader = (props) =>  (<div>
							<span className="panel-title">
								<a href="#">{props.title}</a>
								<a className="pull-right" href="#" bsSize="sm"><Glyphicon glyph="pencil" /></a>
							</span>
							<div className="clearfix"></div>
						</div>)



export default EditableHeader;
