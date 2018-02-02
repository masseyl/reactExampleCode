import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { values } from 'lodash';

import attachmentsProps from '../../assets/propTypes/attachments';
import { buildingProps } from '../../assets/propTypes/building';
import { createTask } from '../../actions/tasks';
import { createAttachment, clearAttachments } from '../../actions/attachments';
import styles from './stylesheet';
import CreateTaskComponent from './index';

class CreateTaskContainer extends Component {
  static navigatorStyle = {
    tabBarHidden: true,
    navBarHidden: false
  };

  render() {
    return (
      <View style={styles.container}>
        <CreateTaskComponent
          apiError={this.props.apiError}
          attachments={this.props.attachments}
          clearAttachments={this.props.clearAttachments}
          createAttachment={this.props.createAttachment}
          createTask={this.props.createTask}
          initialState={this.props.initialState}
          isConnected={this.props.isConnected}
          navigator={this.props.navigator}
          photoFirst={this.props.photoFirst}
          properties={this.props.properties}
          uploadsComplete={this.props.uploadsComplete}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    properties: state.propertiesReducer.properties,
    attachments: values(state.attachmentsReducer.newTaskAttachments),
    uploadsComplete: state.attachmentsReducer.uploadsComplete,
    apiError: state.apiStatusReducer.apiError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: data => dispatch(createTask(data)),
    createAttachment: data => dispatch(createAttachment(data)),
    clearAttachments: () => dispatch(clearAttachments())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CreateTaskContainer
);

CreateTaskContainer.propTypes = {
  apiError: PropTypes.shape({
    message: PropTypes.string,
    stack: PropTypes.string
  }),
  attachments: PropTypes.arrayOf(attachmentsProps),
  clearAttachments: PropTypes.func,
  createAttachment: PropTypes.func,
  createTask: PropTypes.func,
  initialState: PropTypes.shape({
    building: buildingProps
  }),
  isConnected: PropTypes.bool,
  navigator: PropTypes.shape({
    setStyle: PropTypes.func,
    pop: PropTypes.func
  }),
  photoFirst: PropTypes.bool,
  properties: PropTypes.arrayOf(buildingProps),
  uploadsComplete: PropTypes.bool
};
