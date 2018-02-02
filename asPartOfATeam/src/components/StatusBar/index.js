import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './stylesheet';

export default class StatusBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.isLoading &&
          <View style={styles.statusBar}>
            <Text style={styles.statusBarText}>Loading...</Text>
          </View>
        }
        {!this.props.isConnected &&
          <View style={styles.statusBar}>
            <Text style={styles.statusBarText}>Offline</Text>
          </View>
        }
      </View>
    );
  }
}

StatusBar.propTypes = {
  isConnected: PropTypes.bool,
  isLoading: PropTypes.bool
};
