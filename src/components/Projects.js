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
        <div className="text-justify">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Project</th>
                <th>Category</th>
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
