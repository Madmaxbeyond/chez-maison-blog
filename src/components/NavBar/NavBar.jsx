import { NavLink, Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <NavLink to="/books">All Books</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/books/new">New Book</NavLink>
            &nbsp; | &nbsp;
            <span>Welcome, { user.name }</span>
            &nbsp; | &nbsp;
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    );
}