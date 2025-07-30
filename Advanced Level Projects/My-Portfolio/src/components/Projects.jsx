import React, { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/utils/projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error loading projects:", err));
    }, []);

    return (
        <section id="projects" className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="w-20 h-1 bg-teal-600 mx-auto mb-6 rounded"></div>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Projects
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-5 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {project.description}
                                </p>
                            </div>
                            <div className="mt-auto">
                                <p className="text-xs text-gray-500 mb-2">{project.tech}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-sm text-white bg-teal-500 hover:bg-teal-600 px-4 py-1 rounded-full"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;