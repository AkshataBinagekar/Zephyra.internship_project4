import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Navbar2 />
      <section className="card_container">
        <div className="cards">
       <h1>Clothes</h1>
        <div className="sm-card">

        </div>
        <div className="sm-card">

        </div>
        </div>
        <div className="cards">
        <h1>Grocery</h1>
        <div className="sm-card">
          
        </div>
        <div className="sm-card">
          
        </div>
        </div>
        <div className="cards">
        <h1>Beauty</h1>
        <div className="sm-card">
          
        </div>
        <div className="sm-card">
          
        </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
