import axios from 'axios';

export const fetchTasks = () => async dispatch => {
  dispatch({ type: 'FETCH_TASKS_REQUEST' });
  try {
    const res = await axios.get('http://localhost:5000/api/tasks');
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'FETCH_TASKS_FAILURE', payload: err.message });
  }
};
