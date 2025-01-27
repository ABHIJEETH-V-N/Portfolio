import React from "react";
import { useState } from 'react';

function Container2() {
    const [content, setContent] = useState(
      'Hi there Iam Abhi am a student at Chennai Institute Of Technology (CIT) pursuing my BTECH degree in Information Technology'
    );
    const [logoSrc, setLogoSrc] = useState('/2.png');
    const handleButtonClick = (event) => {
      if (event.target.id == 'a1') {
        setContent(
          'I am a student at Chennai Institute Of Technology (CIT) pursuing my BTECH degree in Information Technology'
        );
        setLogoSrc('/2.png');
      } else if (event.target.id == 'a2') {
        setContent('HYPER VISUALS  is a youtube channel where i showcase some of my 3d art projects');
        setLogoSrc('/1.png');
      }
    };
  
    return (
      <div id="container2">
        <h1>ABOUT ME ✨</h1>
        <button id="a1" onClick={handleButtonClick}>
          ABHIJEETH V N
        </button>
        &nbsp;
        <button id="a2" onClick={handleButtonClick}>
          HYPER
        </button>
        <img id="logo" src={logoSrc} alt="HYPER VISUALS" />
        <p id="cont">{content}</p>
      </div>
    );
   }

export default Container2;