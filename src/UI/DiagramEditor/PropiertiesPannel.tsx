import React, { Component } from "react";
import ProjectService from "../../Infraestructure/project/ProjectService";

interface Props {
  projectService: ProjectService
}
interface State {}

class PropiertiesPannel extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div id="PropiertiesPannel" className="col-sm-12 p-1 h-75">
        <div className="col-sm-12 h-100">
          <div className="card text-center h-100 shadow-sm p-1 bg-body rounded">
            <div className="card-header bg-lightblue-Variamos border-title-lighblue-variamos">
              Propierties
            </div>
            <div className="card-body">
              <h5 className="card-title">...</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PropiertiesPannel;
