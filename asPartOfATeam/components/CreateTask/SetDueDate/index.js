import React, { Component } from 'react';
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import DatePicker from '../../DatePicker';
import elementsStyles from '../elementsStylesheet';
import { stringFormats } from '../../../assets/styles/global';

export default class SetDueDate extends Component {
  constructor(props) {
    super(props);

    this.referenceDate = moment().add(1, 'hours').unix();
    this.minDate = new Date(this.referenceDate * 1000);
    this.dateFormat = this.props.dateFormat || stringFormats.dateTime;
    this.state = {
      showDueDateModal: false,
      dueDate: null
    };
  }

  onDateChange = (date) => {
    this.setState({
      dueDate: parseInt(date, 10)
    });
    this.props.onDateChange(date);
    setTimeout(() => {
      this.setState({
        showDueDateModal: false
      });
    }, 500);
  };

  cancelDueDate = () => {
    setTimeout(() => {
      this.setState({
        showDueDateModal: false
      });
    }, 500);
  };

  removeDate = () => {
    this.setState({
      dueDate: null
    });
  };

  showDueDateModal = () => {
    this.setState({
      showDueDateModal: true
    });
  };

  render() {
    return (
      <View>
        <Modal animationType="slide" visible={this.state.showDueDateModal}>
          <DatePicker
            dateFormat={stringFormats.unixDate}
            initialDate={this.state.dueDate || this.referenceDate}
            minDate={this.minDate}
            mode={'datetime'}
            onCancel={this.cancelDueDate}
            onDateChange={this.onDateChange}
          />
        </Modal>
        <View style={elementsStyles.container}>
          <TouchableOpacity
            style={elementsStyles.addButton}
            onPress={this.showDueDateModal}
          >
            <View style={elementsStyles.addAttribute}>
              <View style={elementsStyles.icon}>
                <Image source={require('../../../assets/images/CreateTask/dueDate.png')} />
              </View>
              <Text style={elementsStyles.label}>Set due date</Text>
            </View>
          </TouchableOpacity>
        </View>
        {this.state.dueDate &&
          <View style={elementsStyles.itemContainer}>
            <View style={elementsStyles.itemBox}>
              <Text style={elementsStyles.itemText}>
                {moment.unix(this.state.dueDate).format(this.dateFormat)}
              </Text>
              <TouchableOpacity
                style={elementsStyles.removeItem}
                onPress={this.removeDate}
              >
                <Image
                  source={require('../../../assets/images/CreateTask/smallX.png')}
                  style={elementsStyles.removeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        }
      </View>
    );
  }
}

SetDueDate.propTypes = {
  onDateChange: PropTypes.func,
  dateFormat: PropTypes.string
};
