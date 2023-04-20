import { useEffect, useState } from "react";

// Components
import Board from "./components/Board";
import b1 from "./boardsData/b1.txt"

function App() {

  const [level, setLevel] = useState(0);
  const [levelResult, setLevelResult] = useState(false);
  const [fieldArray, setFieldArray] = useState([]);

  // useEffect(()=>{
  //   setLevel(level+1);
  //   setLevelResult(false);
  // }, levelResult)

  const file = "b" + level;
function drawtable(file){
  fetch(b1)
      .then(resp => resp.text())
      .then(resp => resp.split(""))
      .then(resp => setFieldArray(resp))
      .then(localStorage.setItem("field", JSON.stringify(fieldArray)))
  //   for(let x=0; x<15; x++){
  //   }
}

  return (
    <div>
      <Board board={fieldArray}/>
    </div>
  );
}

export default App;

