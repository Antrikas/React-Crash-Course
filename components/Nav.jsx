import {Link} from 'react-router-dom'

function Nav () {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/ronaldo">Ronaldo</Link>
            <Link to="/messi">Messi</Link>
        </nav>
    )
}


export default Nav;
