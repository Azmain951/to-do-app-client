import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ height: '70vh', width: '80vw', margin: '10vh', padding: '22vh', backgroundColor: '#d6e6ff' }} className='shadow rounded text-center mx-auto'>
            < h2 > Welcome to TO DO APP</h2 >
            <div className='my-5'>
                <Link to='/add-task'><button className='btn btn-primary me-5 px-5 rounded-pill'>Add Task</button></Link>
                <Link to='/view-task'><button className='btn btn-info text-white px-5 rounded-pill'>View Task</button></Link>
            </div>
        </div >
    );
};

export default Home;