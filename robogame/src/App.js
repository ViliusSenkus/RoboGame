import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';

//Contexts (parameters)
import MainContext from './context/MainContext';

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import HighScores from "./pages/HighScores";
import Level from "./pages/Level";
import Settings from "./pages/Settings";
import E404 from "./pages/E404";

// Components
import Header from "./components/Header";

function App() {

  //useState()
  const [user, setUser] = useState(false);
  const [colors, setColors] = useState([]);
  const [directions, setDirections] = useState([]);
  const [functions, setFunctions] = useState([]);
  const [painters, setPainters] = useState([]);
  
  //useContext()
  const contextValues = {colors, setColors, directions, setDirections, functions, setFunctions,painters, setPainters};

  useEffect(()=>{
    //axios request is temporary and bad, just to remember that it is needed here.
    axios.get('http:://localhost:8000/api/user')
    .then(resp=>console.log(resp.data))
    .catch(error=>console.log(error))
    .finally(setUser(true));
  },[])

  return (
    <div>
      <BrowserRouter>
          <MainContext.Provider value={contextValues}>
            <Header />
            {colors}
            {directions}
            {functions}
            {painters}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/highscores" element={<HighScores />} />
              <Route path="/level/:level" element={<Level />} />  
              <Route path="/settings" element={<Settings />} /> 
              <Route path = "*" element={<E404 />} />
            </Routes>
          </MainContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

