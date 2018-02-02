import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import { buildingProps } from '../../assets/propTypes/building';
import CreateTaskSelector from '../CreateTask/CreateTaskSelector';
import styles from './stylesheet';

export default class SelectionBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creatingTask: false,
      showTaskList: this.props.startOnTaskList ? this.props.startOnTaskList : true
    };
  }

  toggleCreateTask = (visibility) => {
    this.setState({
      creatingTask: visibility
    });
  };

  showTasks = () => {
    this.setState({
      showTaskList: true
    });

    if (this.props.showTaskList) {
      this.props.showTaskList(true);
    }
  };

  showProperties = () => {
    this.setState({
      showTaskList: false
    });

    this.props.showTaskList(false);
  };

  render() {
    const { isConnected } = this.props;
    const images = {
      tasks: require('../../assets/images/TabBar/checklistIcon2.png'),
      properties: require('../../assets/images/TabBar/iconBuilding.png'),
      addTask: require('../../assets/images/TabBar/ctaAdd.png'),
      close: require('../../assets/images/TabBar/close.png')
    };

    return (
      <View>
        {this.state.creatingTask && (
          <TouchableOpacity
            activeOpacity={0.95}
            style={styles.modalScrim}
            onPress={() => {
              this.toggleCreateTask(true);
            }}
          >
            <CreateTaskSelector
              containerStyle={styles.createTaskSelector}
              initialState={this.props.initialState}
              isConnected={isConnected}
              navigator={this.props.navigator}
              open={this.toggleCreateTask}
            />
          </TouchableOpacity>
        )}
        <View style={styles.selectionBarContainer}>
          <View
            style={[styles.taskIconContainer, {
              opacity: this.state.showTaskList ? 1 : 0.35
            }]}
          >
            <TouchableOpacity
              activeOpacity={0.95}
              onPress={this.showTasks}
            >
              <Image
                source={images.tasks}
                style={styles.taskIcon}
              />
              <Text style={styles.taskIconText}>TASKS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.createIconContainer}>
            <TouchableOpacity
              activeOpacity={0.95}
              style={styles.createTaskIconInactive}
              onPress={() => {
                this.toggleCreateTask(!this.state.creatingTask);
              }}
            >
              <View style={styles.createTaskIcon}>
                <Image
                  source={
                    this.state.creatingTask
                      ? images.close
                      : images.addTask
                  }
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[styles.taskIconContainer, {
              opacity: this.state.showTaskList ? 0.35 : 1
            }]}
          >
            <TouchableOpacity onPress={this.showProperties}>
              <Image
                source={images.properties}
                style={styles.taskIcon}
              />
              <Text style={styles.taskIconText}>PROPERTIES</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

SelectionBar.propTypes = {
  isConnected: PropTypes.bool,
  initialState: PropTypes.shape({
    building: buildingProps
  }),
  navigator: PropTypes.shape({
    push: PropTypes.func
  }),
  showTaskList: PropTypes.func.isRequired,
  startOnTaskList: PropTypes.bool
};
