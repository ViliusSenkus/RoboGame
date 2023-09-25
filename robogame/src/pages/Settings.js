import axios from "axios";
import { useEffect, useState, useContext } from "react";

import SelectableButtons from  '../elements/selectableButtons';
import MainContext from "../context/MainContext";

function Settings() {
   // const data = props.options;

   const {field, setField, colors, setColors, directions, setDirections, functions, setFunctions,painters, setPainters} = useContext(MainContext)

  //cia reikalinga funkcija nuskaitanti paklikinim1 ant mygtuko ir perduodanti jo duomenis i virsu <Input>

   return (
      <>
        <h2>&lt;Settings&gt; page</h2>
        <div>
         Here you will be able to change general options of the game, such as colortheme, sound, etc.
         </div>
      </>
   )
}

export default Settings