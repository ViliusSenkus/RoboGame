function Answer(props) {
  let arrOfCells = [];

  if (props.numOfTd) {
    for (let i = 0; i < parseInt(props.numOfTd); i++) {
      arrOfCells.push(undefined);
    }

  }

  return (
    <>
      {arrOfCells.map((value, index) => (
        <td key={index}>
          {value}
        </td>
      )
      )}
    </>
  );
}

export default Answer;