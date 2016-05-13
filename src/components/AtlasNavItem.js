import React from 'react'
import {Link} from 'react-router'

let AtlasNavItem = (props) => {
	return  (<li>
	    <Link to={props.to || '/'} activeClassName="active">{props.children}</Link>
	</li>);
}

export default AtlasNavItem