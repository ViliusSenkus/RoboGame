import { useEffect } from 'react';

function SolutionArea(props){
      
      let data = props.functions;
      // useEffect(()=>{
      //       data = ;
      // },[])
     
      

return(
      <>
            <table className="functions">
               <tbody>
                  {data ? data.map((value, index) => (
                     <tr key={index}>
                           <td>
                              {value}
                           </td>
                     </tr>
                  )
                  ) : "Funkcijos Kraunasi"}
               </tbody>
            </table>

      </>
)
}

export default SolutionArea