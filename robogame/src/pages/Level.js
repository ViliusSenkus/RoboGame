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

   const [options, setOptions] = useState();

   const { level } = useParams();

   useEffect(() => {
      axios.get("http://localhost:8000/api/level/" + level)
         .then(resp => setOptions(resp.data))
         .catch(error => ("klaidele" + error))

   }, [])

   return (
      <>
         {/* {options && spreadData(options)} */}
         <h2>&lt;Level&gt; page</h2>
         <div>You are at level {level} </div>
         <LevelMenu />
         {options && <Board options={options} />}
         {options && <Controls options={options} />}
         <SolutionArea />
      </>
   )
}

export default Level;