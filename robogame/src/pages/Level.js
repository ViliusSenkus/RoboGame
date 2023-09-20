import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from 'axios';
import MainContext from "../context/MainContext";

//Components
import LevelMenu from "../components/LevelComponents/LevelMenu";
import Board from "../components/LevelComponents/Board";
import Controls from "../components/LevelComponents/Controls";
import SolutionArea from "../components/LevelComponents/SolutionArea";


function Level() {

   const {board, setBoard, colors, setColors, directions, setDirections, painters, setPainters, functions, setFunctions, solutions, setSolutions} = useContext(MainContext);

   const { level } = useParams();

   useEffect(() => {
      axios.get("http://localhost:8000/api/level/" + level)
         .then(resp => spreadData(resp.data)) 
         .then(resp => localStorage.setItem("leveldata"+level, JSON.stringify(resp.data)))         
         .catch(error => ("klaidele" + error));
   }, [])

   function spreadData(data) {
      console.log("level data:",data)
      setBoard(data.board);
      setColors(data.colors);
      setDirections(data.directions);
      setPainters(data.painters);
      setFunctions(data.functions);
      setSolutions(data.solutions);
   }

   return (
      <>
      <h2>&lt;Level&gt; page</h2>
      <div>You are at level {level} </div>
         <LevelMenu />
         <Board />
         <Controls colors={colors} directions={directions} painters={painters} functions={functions} />
         <SolutionArea solutions={solutions}/>
      </>
   )
}

export default Level