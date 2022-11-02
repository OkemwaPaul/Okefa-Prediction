import { Link} from 'react-router-dom'

function Navigation() {
    return (
        <div> 
            <nav> 
                <Link to='/components/welcome'>Welcome</Link>
                <Link to='/componets/details'>Details</Link>
                <Link to='/components/more'>More</Link>
                <Link to='/components/updates'>Updates</Link>
            </nav>
        </div>
    );
}

export default Navigation;