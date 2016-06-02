import React from 'react'

import {Glyphicon, Button} from 'react-bootstrap'

let AtlasNavSearch = () => {
	return (
		<li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search..."></input>
                                <span className="input-group-btn">
                                    <Button>
                                        <Glyphicon glyph="search" />
                                    </Button>
                                </span>
                            </div>
                        </li>
	)
}

export default AtlasNavSearch