import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpots } from "../../store/spots";
import SpotCard from "../SpotCard";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  const spots = useSelector((state) => state.spots.allSpots.Spots);

  if (!spots) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="home">
      <h2 className="title">Welcome, Search for your next holiday escape</h2>
      <ul className="spots-container">
        <SpotCard spots={spots}/>
      </ul>
    </div>
  );
};

export default Home;
