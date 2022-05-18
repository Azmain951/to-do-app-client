import React from 'react';
import toast from 'react-hot-toast';

const Task = ({ task }) => {
    const { name, description } = task;
    const deleteTask = e => {
        e.preventDefault();
        fetch(`http://localhost:5000/task/${task._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Task Removed Successfully')
            })
    }
    return (
        <tr>
            <td>{name}</td>
            <td colSpan={4}>{description}</td>
            <td colSpan={2} className='d-flex flex-column'>
                <button className='w-50 btn btn-success mb-2 mx-auto'>Completed</button>
                <button onClick={deleteTask} className='w-50 btn btn-danger mx-auto'>Delete</button>
            </td>
        </tr>

    );
};

export default Task;