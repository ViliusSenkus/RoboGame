import axios from "axios";
import { useEffect, useState } from "react";

import SelectableButtons from "./selectableButtons";
import Functions from "../elements/Functions"
import valdymas from "./valdymas.txt"  //reik4s keisti į DB


function Input() {

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


   const [inputPanel, setInputPanel] = useState({});
   // let arr = {colors:["r","m","z"], directions:["cw","ccw"],functions:2}
   // console.log(JSON.stringify(arr));
   
   useEffect(() => {
      fetch(valdymas)
         .then(resp => resp = (resp.text()))
         .then(resp => setInputPanel(JSON.parse(resp)))
         .catch(error => console.log("inputPanel paemimo klaida", error))
   }, []);

   return (
      <>
         <h2>
            &lt;Input&gt; komponentas
         </h2>
         {inputPanel && <SelectableButtons inputPanel={inputPanel} />}
         <Functions />
      </>
   )
}

export default Input