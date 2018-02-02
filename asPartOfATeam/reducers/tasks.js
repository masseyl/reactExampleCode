import { find, findIndex, map, filter, includes, unionBy, cloneDeep, sortBy } from 'lodash';
import move from 'array-move';

export function updateTask(tasks, taskId, delta) {
  // TODO: what if task object does not have an id field set yet
  const task = find(tasks, { id: taskId });

  return [{
    ...task,
    ...delta
  }];
}

export function checkForTaskByDate(tasks, taskData) {
  return !!find(tasks, { created: taskData.created });
}

export function findTaskIndex(tasks, taskData) {
  if (taskData.id) {
    return findIndex(tasks, { id: taskData.id });
  }

  return findIndex(tasks, { created: taskData.created });
}

const initialState = {
  tasks: []
};

export default function tasksReducer(state = initialState, action) {
  let tasks;
  let taskData;
  let taskIndex;
  let modifiedTask;
  let tasksClone;

  switch (action.type) {
    case 'CREATE_TASK':
      taskData = {
        ...action.payload,
        id: Math.floor(Math.random() * 1000000),
        status: 'open'
      };

      if (checkForTaskByDate(state.tasks, taskData)) {
        return state;
      }
      tasks = [...state.tasks];
      tasks.unshift(taskData);

      return {
        ...state,
        tasks
      };

    case 'API_CREATE_TASK_SUCCESS':
      tasksClone = cloneDeep(state.tasks);
      taskIndex = findTaskIndex(state.tasks, action.payload.taskData);
      tasksClone[taskIndex].id = action.payload.response.id;

      return {
        ...state,
        tasks: tasksClone
      };

    case 'UPDATE_TASK': {
      modifiedTask = updateTask(state.tasks, action.payload.taskId, action.payload.taskData);

      return {
        ...state,
        tasks: unionBy(modifiedTask, state.tasks, 'id')
      };
    }

    case 'MOVE_TASK': {
      const updatedTasks = move(state.tasks, action.meta.fromIndex, action.meta.toIndex);

      return {
        ...state,
        tasks: updatedTasks
      };
    }

    case 'FETCH_TASKS_SUCCESS': {
      const apiIds = map(action.payload, 'id');
      const filteredTasks = filter(state.tasks, ({ id }) => includes(apiIds, id));
      const updatedTasks = sortBy(unionBy(action.payload, filteredTasks, 'id'), 'position');

      return {
        ...state,
        tasks: updatedTasks
      };
    }

    default:
      return state;
  }
}
