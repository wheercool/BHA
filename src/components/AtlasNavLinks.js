import React from 'react'
import MessageMenu from './AtlasNavMenu'
console.log(MessageMenu)
let AtlasNavLinks = (props) => {
	return (<ul className="nav navbar-top-links navbar-right">
			<MessageMenu />
		</ul>)
}
export default AtlasNavLinks