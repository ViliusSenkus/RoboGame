import { useContext } from 'react-router-dom';
import MainContext from '../../context/MainContext';
import Item from '../../elements/Item';

function Controls(props) {

  let arrColors = [];
  let arrPainters = [];
  if (props.options) {
    arrColors = props.options.colors.split("");
    arrPainters = props.options.painters.split("");

    for (let i in arrColors) {
      arrColors.splice(i, 1, codeColorsToClasses(arrColors[i]))
      arrPainters.splice(i, 1, codeColorsToClasses(arrColors[i]))
    }
  }

  function codeColorsToClasses(data) {
    switch (data) {
      case "r":
        data = "red";
        break;
      case "g":
        data = "green";
        break;
      case "b":
        data = "blue";
        break;
    }
    return data;
  }

  return (
    <table className="board">
      <tbody>
        {/* COLORS */}
        <tr>
          <td colspan={arrColors.length}>Colors</td>
        </tr>
        <tr>
          {arrColors.map((value, index) => (
            <td key={index} className={`selection color-${value}`}>
              {{ Item } && <Item classes={value} />}
            </td>
          )
          )}
        </tr>
        {/* PAINTERS */}
        <tr>
          <td colspan={arrPainters.length}>Painters</td>
        </tr>
        <tr>
          {arrPainters.map((value, index) => (
            <td key={index} className={`selection color-${value}`}>
              {{ Item } && <Item classes={value} />}
            </td>
          )
          )}
        </tr>
      </tbody>
    </table>
  )
}

export default Controls;