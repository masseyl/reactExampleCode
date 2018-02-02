import React, { Component } from 'react';
import { Keyboard, TouchableWithoutFeedback, ScrollView, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { Divider } from 'react-native-elements';
import moment from 'moment';
import { isEmpty } from 'lodash';

import AddAttachments from '../AddAttachments/container';
import AddProperty from './AddProperty';
import CreateTaskButton from './CreateTaskButton';
import SetDueDate from './SetDueDate';
import StatusBarContainer from '../StatusBar/container';
import styles from './stylesheet';

import attachmentsProps from '../../assets/propTypes/attachments';
import { buildingProps } from '../../assets/propTypes/building';
import { stringFormats } from '../../assets/styles/global';

export default class CreateTaskComponent extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);

    this.state = {
      toDoText: '',
      editing: false,
      attachments: [],
      uploadsPending: false,
      ...this.props.initialState
    };
  }

  componentWillMount() {
    this.props.clearAttachments();
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide
    );
    this.setState({
      editing: this.props.editing || false
    });

    if (this.props.photoFirst) {
      const today = moment().format(stringFormats.monthDay);
      this.setState({
        toDoText: `Photo task from ${today}`
      });
    }
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
    this.props.clearAttachments();
  }

  onNavigatorEvent = (event) => {
    if (event.id === 'didAppear' && !this.props.photoFirst && isEmpty(this.state.toDoText)) {
      this.mainInput.focus();
    }
  };

  onAddProperty = (building, area) => {
    this.setState({ building, area });
  };

  onChangeToDoText = (text) => {
    this.setState({
      toDoText: text
    });
  };

  onDateChange = (date) => {
    setTimeout(() => {
      this.setState({
        dueDate: parseInt(date, 10)
      });
    }, 500);
  };

    addAttachments = (attachments) => {
      this.setState({
        attachments: this.state.attachments.concat(attachments)
      });
    }

  createTask = () => {
    if (this.props.createTask) {
      const data = {
        title: this.state.toDoText,
        tags: this.state.tags,
        due_date: this.state.dueDate
      };

      if (this.state.building) {
        data.building = {
          ...this.state.building,
          area: this.state.area
        };
      }

      if (!(isEmpty(this.props.attachments))) {
        const attachmentIds = [];

        for (const attachment of this.props.attachments) {
          if (attachment.id && !attachment.error) {
            attachmentIds.push(attachment.id);
          }
        }
        data.attachments = attachmentIds;
      }

      this.props.createTask(data);
    }
    this.setState({
      attachments: []
    });

    this.props.clearAttachments();
    this.props.navigator.pop();
  };

  keyboardWillShow = () => {
    this.setState({
      editing: true
    });
  };

  keyboardWillHide = () => {
    this.setState({
      editing: false
    });
  };

  startEditing = () => {
    this.mainInput.focus();
  };

  renderMainInput = () => {
    return (
      <View style={styles.mainInput}>
        <TextInput
          enablesReturnKeyAutomatically
          placeholder="Type task"
          ref={component => (this.mainInput = component)}
          returnKeyType="next"
          style={styles.inputText}
          value={this.state.toDoText}
          onChangeText={this.onChangeToDoText}
        />
      </View>
    );
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.elementsContainer}>
          <StatusBarContainer />
          <View style={styles.elements}>
            <ScrollView keyboardShouldPersistTaps="always">
              {this.renderMainInput()}
              <Divider />
              <SetDueDate onDateChange={this.onDateChange} />
              <Divider />
              <AddProperty
                building={this.state.building}
                navigator={this.props.navigator}
                properties={this.props.properties}
                onAddProperty={this.onAddProperty}
              />
              <Divider />
              <AddAttachments
                addAttachments={this.addAttachments}
                attachments={this.props.attachments}
                navigator={this.props.navigator}
                photoFirst={this.props.photoFirst}
              />
              <Divider />
            </ScrollView>
          </View>
          {(!!this.state.toDoText || this.props.photoFirst) && (
            <CreateTaskButton
              createTask={this.createTask}
              enabled={this.props.uploadsComplete}
              isConnected={this.props.isConnected}
              style={styles.createTaskButton}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

CreateTaskComponent.propTypes = {
  attachments: PropTypes.arrayOf(attachmentsProps),
  photoFirst: PropTypes.bool,
  clearAttachments: PropTypes.func,
  createTask: PropTypes.func,
  editing: PropTypes.bool,
  isConnected: PropTypes.bool,
  properties: PropTypes.arrayOf(buildingProps),
  initialState: PropTypes.shape({
    building: buildingProps
  }),
  navigator: PropTypes.shape({
    setOnNavigatorEvent: PropTypes.func,
    setStyle: PropTypes.func,
    pop: PropTypes.func
  }),
  uploadsComplete: PropTypes.bool
};
