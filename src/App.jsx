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
          <div className="one">
          ABHIJEETH V N 
          </div>
          <div className="two">
          ABHIJEETH V N 
          </div>
        </h1>
          
      </footer>    
    </Router>
    </div>
  );
}

export default App;