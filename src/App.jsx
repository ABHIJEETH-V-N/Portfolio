import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import './app.css';
import Container1 from "./container/Container1";
import Container2 from "./container/Container2";
import Container3 from "./container/Container3";
import Container4 from "./container/Container4";
import Container5 from "./container/Container5";
import Out from "./projects/out";
import Gallery from "./projects/Gallery";
import foot from "./assets/foot.svg"
import Mode from "./Mode";
import { useState,useRef } from "react";


function Nav(){
  return(
    <div className="overlay">
    <div className="ball"/>
    <nav>
      <Link to="/gallery" className="fa-regular fa-image"></Link>
      <Link to="/" className="fa-solid fa-house"></Link>
      <Mode/>
    </nav> 
    </div>
  );
}

function Home(){
  return(<>
  <Container1 /><br />
  <Container2 /><br />
  <Container3 /><br />
  <Container4 /><br/>
  <Container5/>
  </>);
}


function App() {
  const [content, setContent] = useState("ABHIJEETH V N");
    const intervalRef = useRef(null);
    const originalText = "ABHIJEETH V N";
    function randomString(length) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }
    const handleMouseEnter = () => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        setContent(randomString(originalText.length));
      }, 100);
    };
  
    const handleMouseLeave = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setContent(originalText);
    };

  return (
    <div className="App">
    <Router>
     <Nav /><br />
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/out" element={<Out/>} />
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
        <footer>
        <h1> 
          <div  className="one" onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          {content}
          </div>
          <div className="two" onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          {content}
          </div>
        </h1>
          
      </footer>    
    </Router>
    </div>
  );
}

export default App;