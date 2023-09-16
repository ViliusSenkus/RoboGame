import { useState, useEffect, useContext } from "react";
import MainContext from "../context/MainContext";
import Item from "../elements/Item";
import { useParams } from "react-router-dom";
import axios from 'axios';

function Board() {

      const {field} = useContext(MainContext);

      // const [positionX, setPositionX] = useState("");
      // const [positionY, setPositionY] = useState("");
      // const [color, setColor] = useState(false);
      const [fieldState, setFieldState] = useState(false)
      // const [playBoard, setPlayBoard]=useState("")

      const {id} = useParams();

      const [info, setInfo] = useState("Informacija siunčiama");

      useEffect(()=>{
            axios.get("http://localhost:8000/api/level/" + id)
            .then(resp => setInfo(resp.data))
            .catch(error => setInfo("klaidele" + error))
            .finally(console.log("axiosas baigėsi"));
      
      },[])

      
      function Field(){
            for(let index in field) {
                        for (let i in field[index]){
                              if (field[index][i].length > 5) break;
                                    field[index].splice(i,1,codeToClasses(field[index][i]));
                        }
                  }
      
      function codeToClasses(data){
            const element = (data.split(""));
            let result = "";

            switch (element[0]) {
                  case "0" : 
                        result = " inactive";
                        break
                  case "1" :
                        result = " active";
                        break;
            }

            switch (element[1]) {
                  case "r" :
                        result += " color-red";
                        break;
                  case "g" :
                        result += " color-green";
                        break;
                  case "b" :
                        result += " color-blue";
                        break;
            }

            switch (element[2]) {
                  case "t" :
                        result += " aim";
                        break;
                  case "s" :
                        result += " start";
                        break;
                  case "f" :
                        result += "";
                        break;
            }

            return result;
      }


            return (
                  <table className="board">
                        <tbody>
                        {field.map((value, index) => (
                              <tr key={index}>
                                    {value.map((value, index) => (
                                          <td key={"td"+index} className={value}>
                                                {{Item} && <Item classes={value} />}
                                          </td>
                                    )
                                    )}
                              </tr>
                              )     
                        )}
                        </tbody>
                  </table>
            )
      }

      return (
        <div>
            Border faile
           
            <Field />
            <h2>
                  {info}
            </h2>
        </div>
        )

}

export default Board