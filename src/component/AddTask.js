import React from 'react';
import { Form } from 'react-bootstrap';

const AddTask = () => {

    const handleAddTask = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;

        console.log(name, description);
        e.target.reset();
    }

    return (
        <div className='w-50 mx-auto m-5 p-5 rounded shadow'>
            <h2 className='mb-3 text-center'>Add Task</h2>
            <Form onSubmit={handleAddTask}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="task name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control as="textarea" name='description' rows={3} placeholder='task description' />
                </Form.Group>
                <input className='btn btn-primary' type="submit" value="Add Task" />
            </Form>
        </div>
    );
};

export default AddTask;