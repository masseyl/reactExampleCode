import { uniqBy } from 'lodash';

const initialState = {
  attachments: [],
  newTaskAttachments: [],
  uploadsComplete: true
};

export default function attachmentsReducer(state = initialState, action) {
  let newAttachment;
  let uniqueAttachments;

  switch (action.type) {
    case 'FETCH_ATTACHMENTS_SUCCESS':
      uniqueAttachments = uniqBy(action.payload.attachments, 'id');

      return {
        ...state,
        uploadsComplete: true,
        attachments: {
          ...state.attachments,
          [action.payload.taskId]: uniqueAttachments
        }
      };

    case 'CLEAR_ATTACHMENTS':

      return {
        ...state,
        newTaskAttachments: [],
        uploadsComplete: true
      };

    case 'UPLOADING_ATTACHMENTS':

      return {
        ...state,
        uploadsComplete: false
      };

    case 'UPLOAD_ATTACHMENTS_COMPLETE':

      return {
        ...state,
        uploadsComplete: true
      };
      
    case 'CREATE_ATTACHMENTS_COMPLETE':

      return {
        ...state,
        uploadsComplete: true
      };

    case 'API_ADD_ATTACHMENTS_SUCCESS':
      newAttachment = {
        ...action.payload.attachments,
        id: action.payload.response.id
      };

      return {
        ...state,
        newTaskAttachments: [...state.newTaskAttachments, newAttachment]
      };

    case 'API_CREATE_ATTACHMENT_FAILURE':
      newAttachment = {
        ...action.payload.attachmentData,
        error: action.payload.error
      };

      return {
        ...state,
        newTaskAttachments: [...state.newTaskAttachments, newAttachment]
      };

    case 'API_CREATE_ATTACHMENT_SUCCESS':
      newAttachment = {
        ...action.payload.attachmentData,
        id: action.payload.response.id
      };

      return {
        ...state,
        newTaskAttachments: [...state.newTaskAttachments, newAttachment]
      };

    default:
      return state;
  }
}
