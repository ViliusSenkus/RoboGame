import { Link } from 'react-router-dom';

function E404() {
   return (
      <>
         <h2>
            Error 404
         </h2>
         <div>
            The page you requested doesn't exists
         </div>
         <Link to="/">Click here</Link> to return to main page
      </>
   );
}

export default E404