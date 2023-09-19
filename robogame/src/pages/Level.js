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

      useEffect(() => {
            axios.get("http://localhost:8000/api/level/" + level)
                  .then(resp => spreadData(resp.data)) //šaukiam funkciją duomenų išskirstymui ir kintamūjų priskyrimui.
                  .then(resp =>  localStorage.setItem("leveldata", JSON.stringify(resp.data)))

            //                         resp.data
            // fields_list:"x1-x2~y1-y2"
            // functions: "x,y"
            // id: int
            // options: "{"colors":["r","g","b"],"directions":["x","y"],"functions":[x,y],"painters":["r","g","b"]}"
            // updated_at:
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
            const opt = JSON.parse(data.options);
            

             // konvertuojam data duomenis į ikonų nuorodas:
            for (const [key, value] of Object.entries(opt)) {
                        for (let i = 0; i < key.length; i++) {
                           switch (value[i]) {
               
                              //colors
                              case "r":
                                 value[i] = "red";
                                 break;
                              case "g":
                                 value[i] = "green";
                                 break;
                              case "b":
                                 value[i] = "blue";
                                 break;
               
                              //painters
                              case "fw":
                                 value[i] = "arrow_upward";
                                 break;
                              case "ccw":
                                 value[i] = "arrow_top_left";
                                 break;
                              case "cw":
                                 value[i] = "arrow_top_right";
                                 break;
                              default:
                                 value[i] = value;
                           }
                        }
                     }
            setOptions(opt);

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
                       Objektas nerodomas : <div>Loading Options</div>}
                  </p>
                  <p>
                        <b>useState(function) </b> kintamojo reikšmė, perduodama kaip propsas į &lt;Functions&gt; <br />
                        {functions ? (<code>{functions}</code>) : <div>Loading Board</div>}
                  </p>
                  <Board board={board} setBoard={setBoard} />
                  <Options options={options} />
                  {/* // colors={colors} directions={directions} painters={painters} functions={fnct} /> */}
                  <Functions functions={functions} />
            </>
      )
}

export default Level