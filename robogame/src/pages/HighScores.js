import { Link } from 'react-router-dom';

function HighScores(){
      return(
            <div>
                  <h2>Best results ever</h2>
                  Game is under developement <br />
                  No results recorded yet
                  <Link to="/">Return</Link> to main page.
            </div>
      )
}

export default HighScores;