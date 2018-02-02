import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './stylesheet';

export default class CreateTaskButton extends Component {
  render() {
    const { enabled } = this.props;

    return (
      <View style={[{ opacity: enabled ? 1 : 0.5 }, styles.container]}>
        <TouchableOpacity
          style={styles.creationButton}
          onPress={enabled ? this.props.createTask : null}
        >
          <Text style={styles.creationButtonText} >
            {enabled ? 'Create Task' : 'Uploading Photos...'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
CreateTaskButton.propTypes = {
  createTask: PropTypes.func,
  enabled: PropTypes.bool
};
