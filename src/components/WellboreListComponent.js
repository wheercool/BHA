'use strict';

import React from 'react';
import Wellbore from './WellboreComponent';

require('styles//WellboreList.css');

class WellboreListComponent extends React.Component {

  render() {
    console.log(this.props)
    var self = this;
    return (
      <div className="wellborelist-component">
			<ul className="list-group">	
				{
					this.props.data.map((item,i) => <Wellbore key={i} 
                                                    onChanged={self.props.onSelectionChanged}
                                                    onColorChanged={self.props.onColorChanged}
                                                    isSelected={item.isSelected}
                                                    color={item.color}
                                                    name={item.name}/>)
          


				}			
			</ul>
      </div>
    );
  }
  onChanged(name) {
  	this.props.onSelectionChanged(name)
  }
}

function say() {alert('Close')}
WellboreListComponent.displayName = 'WellboreListComponent';

// Uncomment properties you need
// WellboreListComponent.propTypes = {};
// WellboreListComponent.defaultProps = {};

export default WellboreListComponent;
