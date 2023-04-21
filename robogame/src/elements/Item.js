import { useEffect } from "react";

function Item({classes}) {

      useEffect(()=>{
            let arr = classes.split(" ");
            if(arr.find((value)=> value==="start"))
                  document.querySelector(".start").innerHTML=
                  "<span class='material-symbols-outlined'>pest_control</span>";
            if(arr.find((value)=> value==="aim"))
                  document.querySelector(".aim").innerHTML=
                  "<span class='material-symbols-outlined'>star</span>";
            


      }, [])
  

      return(
           <>
        
           </>
      )
}

export default Item