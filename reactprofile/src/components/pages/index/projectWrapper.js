import React from "react";


function ProjectWrap(props) {
    return (
        <div className = "col-5">
            <div className="card mt-3" >
            <p className = "mx-auto my-3" >{props.name}</p>
            <hr className="mx-2 my-0"></hr>
            <i className={props.img + " cool mx-auto mt-5 mb-3 float right"} ></i>
            <div className="card-body mx-auto">
            <a href={props.git} className="btn button">Git hub</a>
            <a href={props.web} className="btn button">Web page</a>
            </div>
            </div>
        </div>
    )
}

export default ProjectWrap;


