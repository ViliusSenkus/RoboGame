import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

//Components
import Board from "../components/Board";
import Input from "../components/Input";
import Solution from "../components/Solution";

function Level() {

      const { level } = useParams();

      const [initialBoard, setInitialBoard] = useState("");
      const [boardData, setBoardData] = useState([]);

      
      useEffect(() => {
            axios.get("http://localhost:8000/api/level/" + level)
                  .then(resp => {
                        const data = resp.data;
                        
                        setInitialBoard(data);
                        toArray(data);
                        localStorage.setItem("board", JSON.stringify(data));
                  })
                  .catch(error => setInitialBoard("klaidele" + error))
                  .finally(console.log("exios request in Level component done"));
      },[])

      function toArray(data) {
            let linesArray = data.split("~"); //spiltting data by board lines;
            for (let x in linesArray) {
                  linesArray.splice(x, 1, linesArray[x].split("-")); //splitting in to fields
            }
            setBoardData(linesArray);
      }

      return (
            <>
                  <p>
                        žaidimo lentos duomenys iš DB, išsaugomi localStorage, kan nereikėtų pakartotinai kreiptis į backą/serverį <br />
                        { initialBoard ? (<code>{initialBoard}</code>) : <div>Loading</div>}
                  </p>
                  <p>
                        boardData kintamojo reikšmė, perduodama kaip propsas į Board <br />
                        { boardData && (<code>{boardData}</code>)}
                  </p>
                  <Board boardData={boardData} setBoardData={setBoardData} />
                  <Input />
                  <Solution />
            </>
      )
}

export default Level