





// Trynimui.











function SelectableButtons(props) {

   const data = props.inputPanel;
   console.log("propsai", data)

   //konvertuojam data duomenis į ikonų nuorodas:


   for (const [value] of Object.entries(data)) {
      for (let i = 0; i < value.length; i++) {
         switch (value[i]) {

            //colors
            case "r":
               value[i] = "red";
               break;
            case "g":
               value[i] = "green";
               break;
            case "b":
               value[i] = "blue";
               break;

            //painters
            case "fw":
               value[i] = "arrow_upward";
               break;
            case "ccw":
               value[i] = "arrow_top_left";
               break;
            case "cw":
               value[i] = "arrow_top_right";
               break;
            default:
               value[i]=value;
         }
      }
   }

   //cia reikalinga funkcija nuskaitanti paklikinim1 ant mygtuko ir perduodanti jo duomenis i virsu <Input>

   return (
      <>
         <h3>
            &lt;SelectableButtons&gt; komponentas
         </h3>
         turi būti kaip elementas.
         <h5>
            Actions
         </h5>
         {data.directions && data.directions.map((value, index) => (
            <div key={index}>
               <div className="selection">
                  <span class="material-symbols-outlined">
                     {value}
                  </span>
                  <input type="radio" name="action" value="go" />
               </div>
            </div>
         ))}
         <h5>
            Colors
         </h5>
         {data.colors && data.colors.map((value, index) => (
            <div key={index}>
               <div className={`selection color-${value}`}>
                  <input type="radio" name="color" value={value} />
               </div>
            </div>
         ))}
         <h5>
            Painters
         </h5>
         {data.painters && data.painters.map((value, index) => (
            <div key={index}>
               <div className="selection">
                  <span class="material-symbols-outlined" style={{ color: `${value}` }}>
                     format_paint
                  </span>
                  <input type="radio" name="recolor" value={value} />
               </div>
            </div>
         ))}
         <h5>
            Functions
         </h5>
         {data.functions && data.functions.map((value, index) => (
            <div key={index}>
               <div className="selection">
                  F{value}
                  <input type="radio" name="function" value={`f${value}`} />
               </div>
            </div>
         ))}
      </>
   )
}

export default SelectableButtons