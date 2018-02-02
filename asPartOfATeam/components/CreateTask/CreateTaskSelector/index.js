import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';

import styles from './stylesheet';
import { buildingProps } from '../../../assets/propTypes/building';

export default class CreateTaskSelector extends Component {
  openCreateTask = (photoFirst) => {
    this.props.navigator.push({
      screen: 'InCheck.CreateTaskContainer',
      title: 'CREATE TASK',
      backButtonTitle: '',
      passProps: {
        photoFirst,
        initialState: this.props.initialState
      }
    });

    this.props.open(false);
  };

  openPhotoTask = (isConnected) => {
    if (isConnected) {
      this.openCreateTask(true);
    } else {
      this.offline();
    }
  }

  offline = () => {
    Alert.alert(
      'No internet connection',
      `You will need to connect to the internet for tasks to be
      synced to your SiteCompli account. Photos cannot be added without
      an internet connection.`
    );
  }

  render() {
    const { isConnected } = this.props;

    return (
      <View style={this.props.containerStyle}>
        <View style={styles.container}>
          <Text style={styles.createText}>Create task with...</Text>
          <View style={styles.buttons}>
            <View>
              <TouchableOpacity
                activeOpacity={0.95}
                style={styles.creationButton}
                onPress={() => {
                  this.openCreateTask(false);
                }}
              >
                <Image
                  source={require('../../../assets/images/CreateTask/taskKeyboardWhite.png')}
                />
              </TouchableOpacity>
              <Text style={styles.label}>Keyboard</Text>
            </View>
            <View>
              <View
                style={[styles.creationButton, { opacity: isConnected ? 1 : 0.5 }]}
              >
                <TouchableOpacity
                  activeOpacity={0.95}
                  onPress={() => {
                    this.openPhotoTask(isConnected);
                  }}
                >
                  <Image
                    source={require('../../../assets/images/CreateTask/taskCameraWhite.png')}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.label}>Camera</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

CreateTaskSelector.propTypes = {
  containerStyle: PropTypes.number,
  isConnected: PropTypes.bool,
  open: PropTypes.func.isRequired,
  initialState: PropTypes.shape({
    building: buildingProps
  }),
  navigator: PropTypes.shape({
    push: PropTypes.func
  })
};
