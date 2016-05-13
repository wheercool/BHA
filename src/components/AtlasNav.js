import React from 'react'

import AtlasNavHeader from './AtlasNavHeader'
import AtlasNavLinks from './AtlasNavLinks'
import AtlasNavSidebar from './AtlasNavSidebar'

let AtlasNav = (props) => {
	return (<nav className="navbar navbar-default navbar-static-top" 
				role="navigation"
				style={{marginBottom: 0}}>
		<AtlasNavHeader />
		<AtlasNavLinks />
		<AtlasNavSidebar />
	</nav>)
}

export default AtlasNav