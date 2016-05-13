import React, { Component } from 'react'
import AtlasNav from './AtlasNav'
import {connect} from 'react-redux'
require('styles/Main.css')
require('styles/sb-admin-2.css')


class Main extends Component {

	render() {
		let props = this.props;			
		return (<div id="wrapper">

				<AtlasNav />
				<div id="page-wrapper">
					 <div className="container-fluid">
		                <div className="row">
		                    <div className="col-lg-12">
		                        
		                        {props.children && React.cloneElement(props.children, {data: props.main})}

		                    </div>
		                  
		                </div>
		               
		            </div>
					
					
				</div>

			</div>)
	}
}

let mapDispatch = (dispath) => { return {}};

export default connect(state=> state, mapDispatch)(Main);
