import axios from "axios";
import { useEffect, useState, useContext } from "react";

import SelectableButtons from  '../elements/selectableButtons';
import MainContext from "../context/MainContext";

/*
Čia turi būti tokia logika:
1. gauname leistinus elementus iš DB;                       ---axios.get()
2. gauname leistinų funkcijų keikį ir jų elementų skaičių;  ---axios.get()
3. atvaizduojam elementus kaip mygtukus;                    ---<SelectableButtons> būtinas delete element ir   clear mygtukas
4. atvaizduojam tuščius funkcijų elementų laukelius;        ---<AvialableFunctions>
      Mygtukų ir funkcijų elementų veikimas
      a. pasirenkamas elementas į kūrį bus dedami mygtukai;
      b. pasirenkami mygtukai automatiškai dedami į elementą;
5. Start mygtukas - paleidžia funkcijos vykdymą:
      5.a. nuskaitomi elementai sudedami į masyvą/stringą/...
*/

function Settings() {
   // const data = props.options;

   const {field, setField, colors, setColors, directions, setDirections, functions, setFunctions,painters, setPainters} = useContext(MainContext)

  //cia reikalinga funkcija nuskaitanti paklikinim1 ant mygtuko ir perduodanti jo duomenis i virsu <Input>

   return (
      <>
         <h2 style={{color:'red'}}>&lt;Settings&gt; should be visible only to connected users</h2>
         {colors.map((value, index)=>(
            <div key={index}>
               {value}
            </div>
         ))}
         Settings Propsu vieta
         <h3>
            &lt;SelectableButtons&gt; komponentas
         </h3>
         turi būti kaip elementas.
         <h5>
            Actions
         </h5>
         {directions && directions.map((value, index) => (
            <div key={index}>
               <div className="selection">
                  <span className="material-symbols-outlined">
                     {value}
                  </span>
                  <input type="radio" name="action" value="go" />
               </div>
            </div>
         ))}
         <h5>
            Colors
         </h5>
         {colors && colors.map((value, index) => (
            <div key={index}>
               <div className={`selection color-${value}`}>
                  <input type="radio" name="color" value={value} />
               </div>
            </div>
         ))}
         <h5>
            Painters
         </h5>
         {painters && painters.map((value, index) => (
            <div key={index}>
               <div className="selection">
                  <span class="material-symbols-outlined" style={{ color: `${value}` }}>
                     format_paint
                  </span>
                  <input type="radio" name="recolor" value={value} />
               </div>
            </div>
         ))}
         <h5>
            Functions
         </h5>
         {functions && functions.map((value, index) => (
            <div key={index}>
               <div className="selection">
                  F{value}
                  <input type="radio" name="function" value={`f${value}`} />
               </div>
            </div>
         ))}
      </>
   )
}

export default Settings