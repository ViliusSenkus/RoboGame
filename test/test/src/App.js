import { useEffect, useState } from "react";
import Sec from "./Sec";
import axios from 'axios';
import './index.css' ;

function App() {

  const [options, setOptions] = useState();
  
  let str = "jasjkdfh"
  useEffect(() => {
      axios.get("http://localhost:8000/api/level/1")
      .then(resp => setOptions(resp.data))
      .catch(error => console.log("axios klaida", error))
  }, [])
  console.log(str)
  return (
    <>
      <div>
       App
       <br />
       {str}
      </div>
      <Sec eilute={str} options={options} />
    </>
  );
}

export default App;
