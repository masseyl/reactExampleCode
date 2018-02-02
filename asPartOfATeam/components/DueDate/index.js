import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './stylesheet';
import { colors, stringFormats } from '../../assets/styles/global';
import EditIcon from '../EditIcon';

export default class DueDate extends Component {
  getDueDateColor = () => {
    const dueDate = this.props.due_date;
    const dueDateExists = !!dueDate;
    const overDueDate = dueDateExists ? moment.unix(dueDate).isBefore() : false;
    let dueDateColor = colors.textPrimary;

    if (dueDateExists && overDueDate) {
      dueDateColor = colors.overdue;
    } else if (!dueDateExists) {
      dueDateColor = colors.incomplete;
    }

    return dueDateColor;
  };

  getDueDateText = () => {
    const dueDate = this.props.due_date;

    return dueDate
      ? moment.unix(dueDate).format(stringFormats.dateTime).toString()
      : 'add a due date';
  };

  render() {
    const touchableAttributes = {};

    if (this.props.onEdit) {
      touchableAttributes.onPress = this.props.onEdit;
    }

    return (
      <TouchableOpacity
        {...touchableAttributes}
        style={StyleSheet.flatten([styles.container, this.props.containerStyle])}
      >
        <View style={styles.dueDateContainer}>
          <Icon
            color={this.getDueDateColor()}
            name="clock-o"
            size={12}
          />
          <Text
            style={[{ color: this.getDueDateColor() }, styles.dueDate]}
          >
            {this.props.prefix && `${this.props.prefix} `}
            {this.getDueDateText()}
          </Text>
        </View>
        { this.props.onEdit &&
          <View><EditIcon /></View>
        }
      </TouchableOpacity>
    );
  }
}

DueDate.propTypes = {
  containerStyle: PropTypes.number,
  prefix: PropTypes.string,
  due_date: PropTypes.number,
  onEdit: PropTypes.func
};
