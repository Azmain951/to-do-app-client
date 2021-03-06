import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleLogout = (e) => {
        e.preventDefault();
        signOut(auth);
        toast.success('user sign out successfully')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>To Do App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='add-task'>Add Tasks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='view-task'>View Tasks</Link>
                        </li>
                        {
                            user ?
                                <li className="nav-item">
                                    <button onClick={handleLogout} className='btn btn-secondary'>Logout</button>
                                </li>
                                : <li className="nav-item">
                                    <Link className="nav-link" to='login'>Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;