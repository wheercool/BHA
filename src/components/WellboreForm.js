'use strict';
import React from 'react';
import parse from 'csv-parse';

class WellboreForm extends React.Component{
  constructor(props = '#000000') {
    super();
    this.state = {      
      trajectory: []
    };
  }
  render() {
    return (<div>
      <label>Name:</label>
      <input type="text" ref="name"></input>
      <input type="file" accept=".csv" onChange={this.onChange.bind(this)}></input>
      <button className="btn btn-default" onClick={this.onWellboreAdded.bind(this)}>Add</button>
    </div>);
  }
  onWellboreAdded() {
    this.props.onWellboreAdded({
      name: this.refs.name.value,
      trajectory: this.state.trajectory
    });
    this.refs.name.value = '';
    this.setState({
      trajectory: ''
    })
    return true;
  }


   onChange(evt) {
    if (!browserSupportFileUpload()) {
          alert('The File APIs are not fully supported in this browser!');
    } else {
      var data = null;
      var file = evt.target.files[0];
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (event) => {
          var csvData = event.target.result;
          parse(csvData, (err, output) => {
            this.setState({
              trajectory : output.map(x => x.map(d => +d))
            });
          });
      };
      reader.onerror = function() {
          alert('Unable to read ' + file.fileName);
      };
    }
  }
}

 function browserSupportFileUpload() {
    var isCompatible = false;
    if (window.File && window.FileReader && window.FileList && window.Blob) {
    isCompatible = true;
    }
    return isCompatible;
}
export default WellboreForm;
