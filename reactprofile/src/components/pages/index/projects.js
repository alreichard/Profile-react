import React from "react"
import ProjectWrap from "./projectWrapper"
import { Jumbotron } from 'reactstrap';
import projects from './projectInfo.json';

class Projects extends React.Component {

    state = {
        projects
    };
    

    render() {
        return (
            <Jumbotron className="m-3 bg-dark">
                <h1 className="display-4 text-center pb-5">Projects</h1>
                 <section>
                <hr className="my-4" />
                <div class="row justify-content-center">
                    {this.state.projects.map(projects => (
                        <ProjectWrap
                            name={projects.name}
                            img={projects.img}
                            git={projects.git}
                            web={projects.web}
                            
                        />
                    ))}
                    </div>
                    </section>
            </Jumbotron>
        )
    }
}

export default Projects;