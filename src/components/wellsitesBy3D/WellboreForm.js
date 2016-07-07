'use strict';
import React from 'react';
import parse from 'csv-parse';

let id = 0;
class WellboreForm extends React.Component{
  constructor() {
    super();
    this.state = {
      trajectory: []
    };
  }
  render() {
    var dataImported = this.state.trajectory.length > 0,
        alertType =  dataImported? 'alert alert-success': 'alert alert-warning',
        alertMessage = dataImported? 'Done': (<div><strong>Warning!</strong> Import trajectory from csv file</div>);

    return (<div>
       <div className="form-group">
          <label htmlFor="wellboreInput">Name</label>
          <input type="text" ref="name" className="form-control" id="wellboreInput" placeholder="New Wellbore"></input>
        </div>
      <input type="file" key={id++} ref="file" className="hidden" accept=".csv" onChange={this.onChange.bind(this)}></input>
      <div className={alertType}>{alertMessage}</div>
      <div className="btn-group">
        <button className="btn btn-default" onClick={this.onImport.bind(this)}>Import</button>
        <button className="btn btn-default" disabled={!dataImported} onClick={this.onWellboreAdded.bind(this)}>Add</button>
      </div>
    </div>);
  }
  onImport() {
    this.refs.file.click();
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
