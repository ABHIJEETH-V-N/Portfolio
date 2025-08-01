import React from "react";
import { Link } from "react-router-dom";


function Container4() {
  const projects = [
    {
      img: "/castle.png",
      description: "Recreating 'The Nali Castle' from 'Unreal The Game(1999)' IN UNREAL ENGINE 5",
      link: "/out",
      id:"work work-1",
    },
    {
      img: "/webs.png",
      description: "Websites that I have created",
      link: "/out", 
      id:"work work-2",
    },
    {
      img:"/port.png",
      description:"this react js portifolio website\n\n",
      link:"/out",
      id:"work work-3",
    },
    {
      img:"/calc.png",
      description:"A Simple Calculator using Winforms \n\n",
      link:"/out",
      id:"work work-4",
    }
  ];

  const renderedProjects = projects.map((project, index) => (
    <div  className={project.id} key={index} >
      <img src={project.img} alt="Project Thumbnail" />
      <p>{project.description}</p>
      <Link to={project.link}>
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
          &nbsp;Check Out
        </button>
      </Link>
    </div>
  ));

  return (
      <div className="container4">{renderedProjects}</div>
  );
}

export default Container4;
