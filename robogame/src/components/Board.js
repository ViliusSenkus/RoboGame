import { useState, useEffect } from "react";

function Board(props) {

      const [positionX, setPositionX] = useState("");
      const [positionY, setPositionY] = useState("");
      const [color, setColor] = useState(false);
      const [fieldState, setFieldState] = useState(false)

      Object.keys(props.board).forEach(prop => console.log(prop))
      return (
            <div className="board">
                  sdsds
            </div>
      )

}

export default Board