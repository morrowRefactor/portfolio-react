import React, { Component } from 'react';
import ProjectBox from '../ProjectBox/ProjectBox';
import ProjectData from '../ProjectData';
import './ProjectsMain.css';

class ProjectsMain extends Component {

    render() {
        const projects = ProjectData.projects.map(p =>
            <ProjectBox
                key={p.name}
                id={p.id}
                name={p.name}
                summary={p.summary}
                tech={p.tech}
                image={p.image}
                appLink={p.appLink}
                codeLink={p.codeLink}
                serverLink={p.serverLink}
            />
        );

        return (
            <section className="ProjectsMain">
                <h3>Projects</h3>
                <section className='ProjectsMain_projects'>
                    {projects}
                </section>
            </section>
        );
    };
};

export default ProjectsMain;