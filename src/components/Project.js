import React from "react";
import "../style.css";

function Project(props) {
    return (
    <div className="card">
        <div className="content">
            <ul>
                <li>
                    {props.name}
                </li>
                <li>
                    {props.summary}
                </li>
                <li>
                <a href={props.link} class="btn btn-secondary">{props.name}</a>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Project;
