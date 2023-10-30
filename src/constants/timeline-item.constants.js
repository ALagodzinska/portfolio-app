import AccentureBootcampIcon from "../pictures/accenture-bootcamp-logo.jpg";
import AccentureIcon from "../pictures/accenture-logo.jpg";
import RtuLogo from "../pictures/rtu-logo.png";
import SelfLearningPicture from "../pictures/self-learning.png";
import SheGoesTechIcon from "../pictures/sgt-logo.jpg";

import * as projectCourseConstants from "../constants/projects-courses.constants";

export const selfLearningItem = {
  image: SelfLearningPicture,
  title: "Self-learning",
  description:
    "I am actively enhancing my programming skills through online courses and hands-on project creation.",
  courses: projectCourseConstants.courseList,
  projects: projectCourseConstants.selfLearningProjectList,
};

export const accentureItem = {
  image: AccentureIcon,
  title: "Software Engineer Intern",
  place: "Accenture",
  description:
    "With the mentor's support, I accomplished several independent C#/.NET projects and gained experience in Azure DevOps. I acquired and put into practice code design principles while        developing these projects.",
  projects: projectCourseConstants.accentureInternshipProjects,
};

export const bootcampItem = {
  image: AccentureBootcampIcon,
  title: "Accenture .NET Bootcamp",
  place: "Accenture",
  description:
    "In this Bootcamp, I advanced my C# programming skills, mastered Entity Framework for database interaction, explored APIs, and deepened my understanding of web application development. I      collaborated on a Real-Time Chat Application project using C#, MVC, and SignalR, successfully deploying it to Azure Cloud.",
  projects: projectCourseConstants.accentureBootcampProjects,
};

export const sheGoesTechItem = {
  image: SheGoesTechIcon,
  title: "SHE GOES TECH Bootcamp",
  place: "SHE GOES TECH",
  description:
    "During the Bootcamp, I was introduced to the fundamentals of programming, gained proficiency in C#, and gained insights into JavaScript, HTML, and CSS. I had the opportunity to create        various console applications and developed a web application using the MVC pattern.",
  projects: projectCourseConstants.sheGoesTechProjects,
};

export const RTUItem = {
  image: RtuLogo,
  title: "Bachelor's in Business Administration and Management",
  place: "Riga Technical University",
  description:
    "I have a Bachelor's degree in Business Administration. My thesis was about finding better ways for small businesses to plan their marketing. This education gave me a strong base in business    management and practical knowledge about finance and marketing.",
};
