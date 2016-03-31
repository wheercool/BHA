'use strict';

import React from 'react';

require('styles//WellboreList.css');

class WellboreListComponent extends React.Component {
  render() {
    return (
      <div className="wellborelist-component">
			<ul className="list-group">	
				{
					this.props.data.map((item,i) => (<li key={i} className="list-group-item"><input type="checkbox" onChange={this.onChanged.bind(this, item.name)} checked={item.isSelected}></input>&nbsp;{item.name}</li>))
				}			
			</ul>
      </div>
    );
  }
  onChanged(name) {
  	this.props.onSelectionChanged(name)
  }
}

WellboreListComponent.displayName = 'WellboreListComponent';

// Uncomment properties you need
// WellboreListComponent.propTypes = {};
// WellboreListComponent.defaultProps = {};

export default WellboreListComponent;
