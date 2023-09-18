import { useEffect } from 'react';

function Functions(props){
      
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
                  ) : "Kraunasi"}
               </tbody>
            </table>

      </>
)
}

export default Functions