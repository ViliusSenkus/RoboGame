import Item from "../elements/Item";

function Board(props) {

   let board = props.board;

   for (let index in board) {
      for (let i in board[index]) {
         if (board[index][i].length > 5) break; // nedidelė apsauga
         board[index].splice(i, 1, codeToClasses(board[index][i]));
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
   
   return (
      <>
         <div>
            <h2>
               &lt;Border&gt; komponentas
            </h2>

            <table className="board">
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
            </table>

         </div>
      </>
   )
}

export default Board