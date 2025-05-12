import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'Pending',
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tasks', task);
      navigate('/');
    } catch (err) {
      alert('Error creating task: ' + err.message);
    }
  };

  return (

    <div className="container py-4">
  <div className="card shadow-sm p-4" style={{ backgroundColor: '#f0f4f8', borderRadius: '15px' }}>
  



    <div className="container">
      <div className="card shadow-sm p-4">
        <h2 className="mb-4 text-center">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input

                id="title"

              type="text"
              name="title"
              className="form-control"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="4"
              value={task.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              name="status"
              className="form-select"
              value={task.status}
              onChange={handleChange}
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="text-center">
            <button className="btn btn-success px-4 rounded-pill" type="submit">Create Task</button>
          </div>
        </form>
      </div>
    </div>


    </div>
</div>
  );
};

export default AddTask;
