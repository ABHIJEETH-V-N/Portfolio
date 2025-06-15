import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import './app.css';
import Container1 from "./container/Container1";
import Container2 from "./container/Container2";
import Container3 from "./container/Container3";
import Container4 from "./container/Container4";
import Out from "./projects/out";
import Gallery from "./projects/Gallery";





function Nav(){
  return(
    <>
    <div className="slide"/>
    <nav>
    <Link to="/">HYPER<br/>VISUALS</Link>
    <Link to="/gallery" className="fa-regular fa-image"></Link>
    <Link to="/" className="fa-solid fa-house"></Link>
    </nav> 
    </>
  );
}

function Home(){
  return(<>
  <Container1 /><br />
  <Container2 /><br />
  <Container3 /><br />
  <Container4 />
  </>);
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Main">
     <Nav /><br />
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/out" element={<Out/>} />
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </div>
      </div>
      <footer>
        <img className="ab"src="abc.png" height="50%" width="50%"/>
        <p>Created by ABHIJEETH V N</p>
      </footer>
    </Router>

  );
}

export default App;
