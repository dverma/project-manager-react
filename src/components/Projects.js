import React, { Component } from 'react';
import ProjectItem from './ProjectItem';


class Projects extends Component {
  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(p => {
        //console.log(p);
        return (
          <ProjectItem key={p.index} project={p} />
        );
      });
    }
    return (
      <div className="Projects">
        <h2>My Projects</h2>
        <hr/>
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">Project</th>
                <th className="text-center">Category</th>
              </tr>
            </thead>
            <tbody>{projectItems}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Projects;
