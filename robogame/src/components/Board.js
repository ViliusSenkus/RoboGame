import { useState, useEffect, useContext } from "react";
// import MainContext from "../context/MainContext";
import Item from "../elements/Item";

function Board(props) {

   // const [positionX, setPositionX] = useState("");
   // const [positionY, setPositionY] = useState("");
   // const [color, setColor] = useState(false);
   // const [boardData, setBoardData] = useState("")
   // const [playBoard, setPlayBoard]=useState("")





   // useEffect(()=>{


   // },[fieldState])

   let boardData = props.boardData;


   for (let index in boardData) {
      for (let i in boardData[index]) {
         if (boardData[index][i].length > 5) break; // nedidelė apsauga
         boardData[index].splice(i, 1, codeToClasses(boardData[index][i]));
      }
   }

   function codeToClasses(data) {
      const element = (data.split(""));
      let result = "";

      switch (element[0]) {
         case "0":
            result = " inactive";
            break
         case "1":
            result = " active";
            break;
      }

      switch (element[1]) {
         case "r":
            result += " color-red";
            break;
         case "g":
            result += " color-green";
            break;
         case "b":
            result += " color-blue";
            break;
      }

      switch (element[2]) {
         case "t":
            result += " aim";
            break;
         case "s":
            result += " start";
            break;
         case "f":
            result += "";
            break;
      }

      return result;
   }

   console.log(props.boardData)

   return (
      <>
         <div>
            <h2>
               Border komponento pradžia
            </h2>

            <table className="board">
               <tbody>
                  {boardData.map((value, index) => (
                     <tr key={index}>
                        {value.map((value, index) => (
                           <td key={"td" + index} className={value}>
                              {{ Item } && <Item classes={value} />}
                           </td>
                        )
                        )}
                     </tr>
                  )
                  )}
               </tbody>
            </table>

         </div>
      </>
   )
}

export default Board