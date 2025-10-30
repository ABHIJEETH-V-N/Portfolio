import React from "react";
import { useState } from 'react';
import Shift from "../components/Shift";



function Container2() {
  
 
   const list=[
    {
      title:"Fan Favourite Award: Google Maps Platform Awards 2025",
      description: "My Team project won the Google Maps Platform Awards 2025 under the category of sustainability by community votes.",
      link:"https://mapsplatform.google.com/awards/nominees/global-climate-tracker/",
      img:"https://devpost-public.s3.amazonaws.com/Banners/gmpawards-emailbanner.jpeg",
    },
    {
      title:"Semi Finalist WCHL World Computer Hacker League 2025",
      description: "Among 1500+ teams worldwide, my team reached the top 250 teams in the WCHL 2025 hackathon organized by Dorahacks.",
      link:"https://dorahacks.io/buidl/28686",
      img:"https://cdn.dorahacks.io/static/files/199098d73daea7dff53654e47c493dd6.jpg",
    }
   ];

  const Achievements = list.map((abc, index) => (
    <div className="achievement" key={index}>

    <div style={
      {
        backgroundImage:`url(${abc.img})`,
        backgroundSize:"cover",
        backgroundPosition:"center", 
        transition:"0.5s",
        width:"100%",
        height:"10em",
        maxHeight:"50vh",
        maxWidth:"100vw",
        borderRadius:" var(--border-radius)",
        overflow:"hidden",
        textWrap:"wrap",
      }
    }>
    </div>

    <div>
    <h1><Shift text={abc.title} interval={100} /></h1>
    <p>{abc.description}</p>
    <a href={abc.link}>check it out</a>
    </div>

    </div>
  ));

  return (
    <>
    <h1>Achievements</h1>
    <div className="container2">{Achievements}</div>
    </>
  );
}



export default Container2;