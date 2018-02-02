import moment from 'moment';
import { getTasksRequest } from '../api/tasks';

export function createTask(taskData) {
  const newTask = {
    ...taskData,
    created: moment().unix()
  };

  return {
    type: 'CREATE_TASK',
    payload: newTask,
    meta: {
      retry: true
    }
  };
}

export function updateTask(taskId, taskData) {
  return {
    type: 'UPDATE_TASK',
    payload: {
      taskId,
      taskData
    },
    meta: {
      retry: true
    }
  };
}

export function moveTask(taskId, fromIndex, toIndex, newAbsolutePosition) {
  return {
    type: 'MOVE_TASK',
    payload: {
      taskId,
      taskData: { position: parseInt(newAbsolutePosition, 10) }
    },
    meta: {
      retry: true,
      fromIndex: parseInt(fromIndex, 10),
      toIndex: parseInt(toIndex, 10)
    }
  };
}

export function fetchTasksSuccess(data) {
  return {
    type: 'FETCH_TASKS_SUCCESS',
    payload: data,
    meta: {
      retry: false
    }
  };
}

export function fetchTasks(dispatch) {
  return getTasksRequest()
    .then(data => dispatch(fetchTasksSuccess(data)));
}
