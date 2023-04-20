/* creating field (array of arrays from left to right, from top down)
indexes in array array[x][y][0="color"||1="active"]
                                    Index Y
            1     2     3     4     ..... 12    13    14
 Index X
      1  [ [color,active], [color,active], ... [color,active], [color,active] ]
      .
      .
      .
      14 [ [color,active], [color,active], ... [color,active], [color,active] ]
*/

let fieldData=[]

function createField(file){
      data = fetch(file)
      .then(resp => resp.text())
      .then(resp => resp.split())
      .then(resp => fieldData = resp);
}
console.log(fieldData);