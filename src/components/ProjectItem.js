import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    //console.log(this.props.projects);
    return (

      <tr className="Project">
        <td>{this.props.project.index}</td>
        <td><u>{this.props.project.title}</u></td>
        <td>{this.props.project.category}</td>
      </tr>
    );
  }
}

export default ProjectItem;
