import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='m-5 p-5 shadow rounded bg-light text-center'>
            <h2>Welcome to TO DO APP</h2>
            <div className='my-5'>
                <Link to='/add-task'><button className='btn btn-primary me-5'>Add Task</button></Link>
                <Link to='/view-task'><button className='btn btn-info text-white'>View Task</button></Link>
            </div>
        </div>
    );
};

export default Home;