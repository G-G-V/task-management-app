import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/actions/taskActions';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="container py-4">
  <div className="card shadow-sm p-4" style={{ backgroundColor: '#f0f4f8', borderRadius: '15px' }}>


    <div className="container">
      <h2 className="mb-4">Task List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add Task</Link>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {/*<strong className="mb-1">{task.title}</strong> - {task.status}*/}
              <h5 className="mb-1">{task.title}</h5>
          <small className="text-muted">{task.status}</small>
            </div>
            <Link to={`/task/${task._id}`} className="btn btn-sm btn-outline-info">Details</Link>
          </li>
        ))}
      </ul>
    </div>


      </div>
</div>
  );
};

export default Dashboard;
