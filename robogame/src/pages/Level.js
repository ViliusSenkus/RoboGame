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

   const { board, setBoard, colors, setColors, directions, setDirections, painters, setPainters, functions, setFunctions, solutions, setSolutions } = useContext(MainContext);

   const [options, setOptions] = useState();
   const { level } = useParams();

   useEffect(() => {
      axios.get("http://localhost:8000/api/level/" + level)
         .then(resp => {
            // console.log(resp);
            // setOptions(JSON.stringify(resp.data));
            setBoard( JSON.stringify(resp.data.board));
            setColors( JSON.stringify(resp.data.colors));
            setDirections( JSON.stringify(resp.data.directions));
            setPainters( JSON.stringify(resp.data.painters));
            setFunctions( JSON.stringify(resp.data.functions));
            setSolutions( JSON.stringify(resp.data.solutions));
         })
         .catch(error => ("klaidele" + error))

   }, [])

   // function spreadData(options) {
   //    const obj = (options);
   //    setBoard(obj.board);
   //    setColors(obj.colors);
   //    setDirections(obj.directions);
   //    setPainters(obj.painters);
   //    setFunctions(obj.functions);
   //    setSolutions(obj.solutions);
   // }

   return (
      <>
         {/* {options && spreadData(options)} */}
         <h2>&lt;Level&gt; page</h2>
         <div>You are at level {level} </div>
         <LevelMenu />
         <Board board={board} />
         <Controls colors={colors} directions={directions} painters={painters} functions={functions} />
         <SolutionArea solutions={solutions} />

      </>
   )
}

export default Level;