import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Contexts (parameters)
import MainContext from './context/MainContext';

// Components
import Header from "./components/Header";
import Board from "./components/Board";
import Input from "./components/Input";
import b1 from "./boardsData/b1.txt"



function App() {

  const [field, setField] = useState([]);
  // const [level, setLevel] = useState(0);
  // const [levelResult, setLevelResult] = useState(false);
  

  const contextValues = {field, setField};

  useEffect(()=>{
    // setLevel(level+1);
    // setLevelResult(false);
    fetch(b1)
      .then(resp => resp.text())
      .then(resp => createBoardArray(resp))
  }, []) //[levelResult]

  function createBoardArray(data){
    let linesArray = data.split("~");
    for (let x in linesArray){
      linesArray.splice(x,1,linesArray[x].split("-"));
    }
    setField(linesArray);
    localStorage.setItem("field", JSON.stringify(field))

  }

  return (
    <div>
      <BrowserRouter>
          <MainContext.Provider value={contextValues}>
            <Header />
            <Routes>  
              <Route path="/" element={<Board />} />
              <Route path="options" element={<Input />} />
            </Routes>
          </MainContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

