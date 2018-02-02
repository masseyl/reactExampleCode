import apiService from './apiService';

export function getTasksRequest() {
  const path = 'tasks';

  return apiService.getJson(path);
}

export function updateTaskRequest(taskId, taskData) {
  const path = `tasks/${taskId}`;

  return apiService.patchJson(path, taskData);
}

export function createTaskRequest(taskData) {
  return apiService.postJson('tasks', taskData);
}
