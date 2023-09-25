import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from 'axios';
import MainContext from "../context/MainContext";

//Components
import LevelMenu from "../components/LevelComponents/LevelMenu";
import Board from "../components/LevelComponents/Board";
import Controls from "../components/LevelComponents/Controls";
import SolutionArea from "../components/LevelComponents/SolutionArea";

/*
   Mygtukų ir funkcijų elementų veikimas
      a. pasirenkamas elementas į kūrį bus dedami mygtukai;
      b. pasirenkami mygtukai automatiškai dedami į elementą;
   Start mygtukas - paleidžia funkcijos vykdymą:
      5.a. nuskaitomi elementai sudedami į masyvą/stringą/...
*/


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
         <h2>&lt;Level&gt; page</h2>
         <div>You are at level {level} </div>
         <LevelMenu />
         {options && <Board options={options} />}
         {options && <Controls options={options} />}
         {options && <SolutionArea options={options} />}
      </>
   )
}

export default Level;