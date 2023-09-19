import axios from "axios";
import { useEffect, useState } from "react";

import SelectableButtons from "./selectableButtons";
import valdymas from "./valdymas.txt"  //reik4s keisti į DB

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

function Options(props) {
   const data = props.options;
   console.log("perduotos opcijos",data);

   const [colors, setColors] = useState([]);
   const [directions, setDirections] = useState([]);
   const [functions, setFunctions] = useState([]);
   const [painters, setPainters] = useState([]);
   
  useEffect(()=>{
   if (data) {
      setColors(data.colors);
      setDirections(data.directions);
      setFunctions(data.functions);
      setPainters(data.painters);
   }
   
  },[])

  //cia reikalinga funkcija nuskaitanti paklikinim1 ant mygtuko ir perduodanti jo duomenis i virsu <Input>

   return (
      <>
         Opcijos
         {/* {colors.map((value, index)=>(
            <div key={index}>
               {value}
            </div>
         ))} */}
         Options Propsu vieta
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
                  <span class="material-symbols-outlined">
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

export default Options