import React from "react";
import { Link } from "react-router-dom";
import Shift from "../components/Shift";

function Container4() {
  
  const projects = [
    {
      img:"https://raw.githubusercontent.com/NEXBIT-X/CLAIM/01527877a35ea43e7bf0f1fe5838ae907cfe8dc5/public/logo.svg",
      description:"A Decentralized Patent ProvingPlatform on Blockchain",
      link:"https://github.com/NEXBIT-X/CLAIM",
      id:"work work-1",
      title:"CLAIM",
    },
     {
      img:"https://raw.githubusercontent.com/NEXBIT-X/ESSENCE-/6bc077eed5e129c651e1d80ee7408010adb09064/Essence/public/logo.svg",
      description:"Essence is a Duolingo-inspired app for cultural learning",
      link:"https://github.com/NEXBIT-X/ESSENCE-",
      id:"work work-2",
      title:"Essence",
    },
    {
      img: "/castle.png",
      description: "Recreating 'The Nali Castle' from 'Unreal The Game(1999)' IN UNREAL ENGINE 5",
      link: "https://www.youtube.com/playlist?list=PLYyDZ_eMy9rw5nhimdxmlH40-vDQDDeR3",
      id:"work work-3",
      title:"UE5 Project",
    },
    {
      img: "/webs.png",
      description: "Websites that I have created",
      link: "/out", 
      id:"work work-4",
      title:"Web Projects",
    },
    {
      img:"/port.png",
      description:"this react js portifolio website\n\n",
      link:"https://github.com/ABHIJEETH-V-N/Portfolio",
      id:"work work-5",
      title:"Portfolio Website",
    },
    {
      img:"/calc.png",
      description:"A Simple Calculator using Winforms \n\n",
      link:"https://github.com/ABHIJEETH-V-N/calculator",
      id:"work work-6",
      title:"Calculator",
    },
    {
      img:"https://github.com/NEXBIT-X/.github/blob/main/logo.png?raw=true",
      description:"A Website For My Hackathon Team \n",
      link:"https://nexbitx.vercel.app",
      id:"work work-7",
      title:"NEXBIT",
    },
    {
      img:"https://github.com/NEXBIT-X/LITMUS/blob/main/assets/images/favicon.png?raw=true",
      description:"A React Native Frontend Application for An Idea Sharing Platform \n",
      link:"https://github.com/NEXBIT-X/LITMUS/tree/main",
      id:"work work-8",
      title:"LITMUS",
    }
  ];

  const renderedProjects = projects.map((project, index) => (
    <>
    
    <div  className={project.id} key={index} >
      <img src={project.img} alt="Project Thumbnail" />
      <h1><Shift text={project.title} /></h1>
    
      <p>{project.description}</p>
      <Link to={project.link}>
        <button>
          View Project
        </button>
      </Link>
    </div>
    </>
  ));

  return (
    <><h1>Worked On</h1>
      <div className="container4">{renderedProjects}</div>
      
      </>
  );
}

export default Container4;
