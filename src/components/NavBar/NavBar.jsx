import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <NavLink to="/books">All Books</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/books/new">New Book</NavLink>
        </nav>
    );
}