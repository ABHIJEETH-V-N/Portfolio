import React from "react";
import { Link } from "react-router-dom";


function Container4() {
  const projects = [
    {
      img: "/ue1.jpg",
      description: "Recreating 'The Nali Castle' from 'Unreal The Game(1999)' IN UNREAL ENGINE 5",
      link: "/out",
      id:"work work-1"
    },
    {
      img: "/website.png",
      description: "Websites that I have created",
      link: "/out", // You can create another page for this project.
      id:"work work-2"
    },
    {
      img:"/reactt.svg",
      description:"this react js portifolio website",
      link:"/out",
      id:"work work-4"
    }
  ];

  const renderedProjects = projects.map((project, index) => (
    <div  className={project.id} key={index} >
      <img src={project.img} alt="Project Thumbnail" />
      <p>{project.description}</p>
      <Link to={project.link}>
        <button><i class="fa-solid fa-magnifying-glass"></i>&nbsp;Check Out</button>
      </Link>
    </div>
  ));

  return (
    <div>
      <div className="container4">{renderedProjects}</div>
      
    </div>
  );
}

export default Container4;
