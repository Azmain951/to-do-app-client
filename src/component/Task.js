import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Task = ({ task }) => {
    const { name, description } = task;
    const [completed, setCompleted] = useState(false);
    const handleComplete = () => {
        toast.success(`Congrats, ${name} Task Completed`);
        setCompleted(true);
    }
    const deleteTask = e => {
        e.preventDefault();
        const confirm = window.confirm(`Do you really want to delete ${name} task?`);
        if (confirm) {
            fetch(`https://serene-spire-17366.herokuapp.com/task/${task?._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Task Removed Successfully')
                })
        }

    }
    return (
        <tr>
            <td className={`${completed ? 'text-decoration-line-through' : ''}`}>{name}</td>
            <td className={`${completed ? 'text-decoration-line-through' : ''}`} colSpan={4}>{description}</td>
            <td colSpan={2} className='d-flex flex-column'>
                <button onClick={handleComplete} className='w-50 btn btn-success mb-2 mx-auto'>Completed</button>
                <button onClick={deleteTask} className='w-50 btn btn-danger mx-auto'>Delete</button>
            </td>
        </tr>

    );
};

export default Task;