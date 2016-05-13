import React from 'react'
import AtlasNavItem from './AtlasNavItem'
import AtlasNavSearch from './AtlasNavSearch'
import {Link} from 'react-router'

let AtlasNavSidebar = (props) => {
	return (<div className="navbar-default sidebar" role="navigation">
			  <ul className="nav" id="side-menu">
			  		<AtlasNavSearch />
					<AtlasNavItem to="/projects">Projects</AtlasNavItem>
					<AtlasNavItem to="/wellsites">Wellsites</AtlasNavItem>
					<AtlasNavItem to="/wells">Wells</AtlasNavItem>

			</ul>

		</div>)
}
export default AtlasNavSidebar