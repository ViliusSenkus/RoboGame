import { useContext, useEffect } from "react";
import Item from "../../elements/Item";
import MainContext from "../../context/MainContext";


function Board(props) {

   // const { board, setBoard } = useContext(MainContext)
   // setBoard(props.board);

   if (board !== "") {
      let arr = board.split("~");
      arr.map((value, index) => {
         arr[index] = value.split("-")
      })
      for (let index in arr) {
         for (let i in arr[index]) {
            if (arr[index][i].length > 5) break; // nedidelė apsauga
            arr[index].splice(i, 1, codeToClasses(arr[index][i]));
         }
      }
      setBoard(arr);
   }

   // function codeToClasses(data) {
   //    const element = (data.split(""));
   //    let result = "";

   //    switch (element[0]) {
   //       case "0":
   //          result = " inactive";
   //          break
   //       case "1":
   //          result = " active";
   //          break;
   //    }

   //    switch (element[1]) {
   //       case "r":
   //          result += " color-red";
   //          break;
   //       case "g":
   //          result += " color-green";
   //          break;
   //       case "b":
   //          result += " color-blue";
   //          break;
   //    }

   //    switch (element[2]) {
   //       case "t":
   //          result += " aim";
   //          break;
   //       case "s":
   //          result += " start";
   //          break;
   //       case "f":
   //          result += "";
   //          break;
   //    }

   //    return result;
   // }

   return (
      <>
         <div>
            <h3>
               &lt;Board&gt; component
            </h3>
            {board}

            {/* <table className="board">
               <tbody>
                  {board && board.map((value, index) => (
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
            </table> */}

         </div>
      </>
   )
}

export default Board