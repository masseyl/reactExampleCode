import apiService from './apiService';

export function getAttachmentRequest(taskId) {
  const path = `tasks/${taskId}/attachments`;

  return apiService.getJson(path);
}

export function createAttachmentRequest(attachment) {
  const path = 'attachments';

  return apiService.postJson(path, attachment);
}

export function addAttachmentsRequest(taskId, attachments) {
  const path = `tasks/${taskId}`;

  return apiService.patchJson(path, { attachments });
}

export function uploadAttachmentRequest (attachment){
  return apiService.uploadAttachment(attachment);
}
