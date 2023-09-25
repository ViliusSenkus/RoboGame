import { useEffect } from 'react';
import Answer from '../../elements/Answer';

function SolutionArea(props){
      
      let data = [];
      console.log(data); 
      if (props.options.solutions){
            data = props.options.solutions.split(",");    
             
      }

return(
      <>
            <table className="solutions">
               <tbody>
                  {data ? data.map((value, index) => (
                        <tr key={index}>
                     <Answer  numOfTd={value} />
                     </tr>
                  )
                  ) : "Funkcijos Kraunasi"}
               </tbody>
            </table>

      </>
)
}

export default SolutionArea;