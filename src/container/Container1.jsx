import React from "react";
import { Link } from "react-router-dom";
import { useState,useContext} from "react";
import { useRef } from "react";
import Shift from "../components/Shift";

function Container1(){
    return (
      <div>
       <h1
        style={{
          fontSize: "5vw",
          fontWeight: "bolder",
          lineHeight: "0.01em",
          cursor: "pointer",
        }}
      >
        <Shift text="ABHIJEETH V N" interval={100} />
      </h1>
          <p> A Software developer based in INDIA </p>
        </div>
    
    )
  }

  export default Container1;