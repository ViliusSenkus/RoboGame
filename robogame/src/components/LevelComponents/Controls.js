import { useContext } from 'react-router-dom';
import MainContext from '../../context/MainContext';
import Item from '../../elements/Item';

function Controls(props) {

  //declaring variables to prevent code breaking, till props will be loaded
  let arrColors = [];
  let arrPainters = [];
  let arrFunctions = [];
  let arrDirections =[];

  if (props.options) {
    arrColors = props.options.colors.split("");
    arrPainters = props.options.painters.split("");
    arrFunctions = props.options.functions.split(",");
    arrDirections = props.options.directions.split(",");

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
    <>
    <h3>
               &lt;Controls&gt; component
            </h3>
            
    <table className="board">
      <tbody>
        {/* COLORS */}
        <tr>
          <td colspan={arrColors.length}>Colors</td>
        </tr>
        <tr>
          {arrColors.map((value, index) => (
            <td key={index} className={`selection color-${value}`}>
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
            </td>
          )
          )}
        </tr>
        {/* FUNCTIONS */}
        <tr>
          <td colspan={arrFunctions.length}>Functions</td>
        </tr>
        <tr>
          {arrFunctions.map((value, index) => (
            <td key={index}>
              {value}
            </td>
          )
          )}
        </tr>
        {/* DIRECTIONS */}
        <tr>
          <td colspan={arrDirections.length}>Directions</td>
        </tr>
        <tr>
          {arrDirections.map((value, index) => (
            <td key={index} className={`selection color-${value}`}>
              {value}
            </td>
          )
          )}
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default Controls;