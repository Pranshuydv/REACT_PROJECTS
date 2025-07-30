import React from "react";

const Skills = () => {
    const skills = [
        "HTML", "CSS", "Bootstrap", "Tailwind CSS",
        "JavaScript", "jQuery", "React", "Responsive Design",
        "Git & GitHub", "UI/UX Design", "Python", "Flask", "Django"
    ];

    return (
        <section id="skills" className="bg-gray-100 py-16 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <div className="w-20 h-1 bg-teal-600 mx-auto mb-6 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-white text-gray-800 border border-gray-300 px-5 py-2 rounded-full shadow-sm hover:bg-teal-500 hover:text-white transition-all duration-300 text-sm font-medium"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;