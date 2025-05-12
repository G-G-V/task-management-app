import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'Pending',
  });

  const fetchTask = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/tasks/${id}`);
      setTask(res.data);
    } catch (err) {
      alert('Error fetching task: ' + err.message);
    }
  };

  useEffect(() => {
    fetchTask();
  }, [id]);


useEffect(() => {
  if (window.$) {
    window.$('#title').on('focus', function () {
      window.$(this).css('background-color', '#e0f7fa');
    });
  }
}, []);



  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleUpdate = async e => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, task);
      navigate('/');
    } catch (err) {
      alert('Error updating task: ' + err.message);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      navigate('/');
    } catch (err) {
      alert('Error deleting task: ' + err.message);
    }
  };

  return (
    <div className="container py-4">
  <div className="card shadow-sm p-4" style={{ backgroundColor: '#f0f4f8', borderRadius: '15px' }}>
  




    <div className="container">
      <div className="card shadow-sm p-4">
        <h2 className="mb-4 text-center">Edit Task</h2>
        <form onSubmit={handleUpdate}>
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
          <div className="d-flex justify-content-between">
            {/* <button type="submit" className="btn btn-primary px-4 rounded-pill">Update</button>
            <button type="button" className="btn btn-danger px-4 rounded-pill" onClick={handleDelete}>Delete</button> */}

            <button className="btn btn-outline-primary px-4 rounded-pill" type="submit">Update</button>
<button className="btn btn-outline-danger px-4 rounded-pill" type="button" onClick={handleDelete}>Delete</button>

          </div>
        </form>
      </div>
    </div>


    </div>
</div>
  );
};

export default TaskDetails;
