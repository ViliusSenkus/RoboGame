import { Link } from 'react-router-dom';
import './header.css';

function Header(){
return(
      <>
      <h1>
            RoboGame
      </h1>
      <nav>
            <Link to = "level/1" > Sneak Peek</Link>
            <Link to = "/highscores" > High Scores </Link>
            <Link to = "/login" > Log in </Link>
            <Link to = "/signin" > Sign in </Link>
            <Link to = "/settings" > Settings </Link>
      </nav>
      </>
)
}

export default Header