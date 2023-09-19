import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

//Components
import Board from "../components/Board";
import Options from "../components/Options";
import Functions from "../components/Functions";

function Level() {

      const { level } = useParams();

      const [board, setBoard] = useState([]);
      const [options, setOptions] = useState();
      const [functions, setFunctions] = useState();
      const [colors, setColors] = useState();
      const [directions, setDirections] = useState();
      const [painters, setPainters] = useState();
      const [fnct, setFnct] = useState();


      useEffect(() => {
            axios.get("http://localhost:8000/api/level/" + level)
                  .then(resp => {
                        const data = resp.data; //data - visa informacija apie lygį
                        localStorage.setItem("board", JSON.stringify(data));
                        spreadData(data); //šaukiam funkciją duomenų išskirstymui ir kintamūjų priskyrimui.
                  })
                  .catch(error => ("klaidele" + error));
      }, [])

      function spreadData(data) {
            // Žaidimo lauko duomenų apdirbimas
            let linesArray = data.fields_list.split("~"); //spiltting data by board lines;
            for (let x in linesArray) {
                  linesArray.splice(x, 1, linesArray[x].split("-")); //splitting in to fields
            }
            setBoard(linesArray);

            //Galimų komandų duomenų apdirbimas
            setOptions(JSON.parse(data.options));
            setColors(options.colors);
            setDirections = options.directions;
            setPainters = options.painters;
            setFnct = options.fnct;
            console.log(options.directions)


            //Funkcijų formavimo laukų ir langelių skaičiaus pavertimas masyvu
            const numberOfFunctions = data.functions.split(",");
            setFunctions(numberOfFunctions);
            // let fnct = [];
            // for (let i=0; i<numberOfFunctions.length; i++){
            //       fnct.push(1);
            //       for( let y=0; y<numberOfFunctions[i]; y++)
            //       fnct[i].push(1);
            // };
            // console.log("jj",fnct);
      }

      return (
            <>
                  <p>
                        pirminiai lygio duomenys iš DB, išsaugomi localStorage, kad nereikėtų pakartotinai kreiptis į backą/serverį <br />

                  </p>
                  <p>
                        <b>useState(board) </b> kintamojo reikšmė, perduodama kaip propsas į &lt;Board&gt; <br />
                        {board ? (<code>{board}</code>) : <div>Loading Board</div>}
                  </p>
                  <p>
                        <b>useState(options) </b> kintamojo reikšmė, perduodama kaip Stringinis propsas į &lt;Options&gt; <br />
                        {options ? (<code>{options.directions}</code>) : <div>Loading Options</div>}
                  </p>
                  <p>
                        <b>useState(function) </b> kintamojo reikšmė, perduodama kaip propsas į &lt;Functions&gt; <br />
                        {functions ? (<code>{functions}</code>) : <div>Loading Board</div>}
                  </p>
                  <Board board={board} setBoard={setBoard} />
                  <Options colors={colors} directions={directions} painters={painters} functions={fnct} />
                  <Functions functions={functions} />
            </>
      )
}

export default Level