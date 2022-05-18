import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Task from './Task';

const ViewTask = () => {
    const [user] = useAuthState(auth);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {

        const getTasks = async () => {
            const email = user.email;
            const url = `http://localhost:5000/task/${user.email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setTasks(data);
        }
        getTasks();
    }, [tasks, user])
    return (
        <div className='w-75 shadow rounded p-5 m-5 mx-auto'>
            <h2 className='text-center mb-3'>To Do List</h2>
            <Table striped bordered hover className='text-center'>
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th colSpan={4}>Task Description</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => <Task key={task._id} task={task}></Task>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ViewTask;