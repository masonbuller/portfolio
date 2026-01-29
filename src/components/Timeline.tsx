import React from "react";
import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


const workExperience = [
  {
    title: "Technology Analyst I",
    company: "Fiserv",
    period: "June 2025 – Present",
    description:
      "Supported the development and implementation of the Premier core banking system throughout the software development lifecycle. Enhanced reliability by updating regression tests, automating Jenkins-to-GitHub migrations, and creating a dashboard to track critical vulnerabilities.",
    skills: ["VB .NET", "C#", "Regression Testing", "Github Actions", "Bank Solutions", "React", "Automation"],
  },
  {
    title: "General Clerk I",
    company: "ITC Federal",
    period: "July 2022 – May 2025",
    description:
      "Supported applicant processing and tracking across multiple databases for government programs, ensuring data consistency and accuracy. Assigned alien registration numbers, maintained and updated records, and assisted coworkers through training, guidance, and clarification of work processes and standards.",
    skills: ["Problem-Solving", "Teamwork", "Collaboration", "Training", "Data Entry", "Detail Oriented"],
  },
];

function Timeline() {
  return (
    <div className="container" id="experience">
      <div className="skills-container">
        <h1>Work Experience</h1>

        <div className="timeline">
          <div className="timeline-line" />

          <div className="timeline-row">
            {workExperience.map((job, index) => (
              <div className="timeline-item" key={index}>

                <div className="work-card">
                  <h3>{job.title}</h3>
                  <p className="company">
                    {job.company} <span>{job.period}</span>
                  </p>

                  <p className="description">{job.description}</p>
                  <div className="flex-chips">
                    {job.skills.map((skill, i) => (
                      <Chip key={i} className="chip" label={skill} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;

