import React from "react";
import { useState } from 'react';

function Container2() {
    const [content, setContent] = useState(
      'Hi there Iam Abhijeeth VN  a student at Chennai Institute Of Technology (CIT) pursuing my BTECH  degree in Information Technology'
    );
    const handleButtonClick = (event) => {
      if (event.target.id == 'a1') {
        setContent(
          'I am a student at Chennai Institute Of Technology (CIT) pursuing my BTECH degree in Information Technology'
        );
      } else if (event.target.id == 'a2') {
        setContent('HYPER VISUALS  is a youtube channel where i showcase some of my 3d art projects');
      }
    };
  
    return (
      <div id="container2">
        <h1>ABOUT ME &nbsp;
        <svg width="50" height="50" viewBox="0 0 1353 1353" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1107 0L1029.51 169.125L861 246L1029.51 323.49L1107 492L1183.88 323.49L1353 246L1183.88 169.125M492 184.5L338.25 522.75L0 676.5L338.25 830.25L492 1168.5L645.75 830.25L984 676.5L645.75 522.75M1107 861L1029.51 1029.51L861 1107L1029.51 1183.88L1107 1353L1183.88 1183.88L1353 1107L1183.88 1029.51" fill="#3042b3"/>
</svg>




        </h1>
        <button id="a1" onClick={handleButtonClick}>
          ABHIJEETH V N
        </button>
        &nbsp;
        <button id="a2" onClick={handleButtonClick}>
          HYPER
        </button>
        <p id="cont">{content}</p>
      </div>
    );
   }

export default Container2;