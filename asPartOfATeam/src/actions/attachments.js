export function fetchAttachments(taskId) {
  return {
    type: 'FETCH_ATTACHMENTS',
    payload: taskId
  };
}

export function fetchAttachmentsSuccess(taskId, attachments) {
  return {
    type: 'FETCH_ATTACHMENTS_SUCCESS',
    payload: {
      taskId,
      attachments
    }
  };
}

export function clearAttachments() {
  return {
    type: 'CLEAR_ATTACHMENTS'
  };
}

export function createAttachmentsCompleteAction() {
  return {
    type: 'CREATE_ATTACHMENTS_COMPLETE'
  };
}

export function uploadingAttachmentsAction() {
  return {
    type: 'UPLOADING_ATTACHMENTS'
  };
}

export function uploadAttachmentAction(attachment) {
  return {
    type: 'UPLOAD_ATTACHMENT',
    payload: attachment,
    meta: {
      retry: true
    }
  }
};

export function createAttachments(attachments) {
  return {
    type: 'CREATE_ATTACHMENTS',
    payload: attachments
  };
}

export function addAttachments(taskId, attachments) {
  return {
    type: 'ADD_ATTACHMENTS',
    payload: {
      taskId,
      attachments
    }
  };
}

export function addAttachmentsSuccess(attachments) {
  return {
    type: 'API_ADD_ATTACHMENTS_SUCCESS',
    payload: {
      attachments
    }
  };
}
