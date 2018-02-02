import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import styles from './stylesheet';
import { stringFormats } from '../../assets/styles/global';

export default class SiteCompliDatePicker extends Component {
  constructor(props) {
    super(props);

    const date = props.initialDate || moment().format(stringFormats.unixDate);
    this.dateFormat = props.dateFormat || stringFormats.LLDate;
    this.minDate = props.minDate || moment().format(this.dateFormat);
    this.mode = props.mode || 'date';
    this.state = {
      date
    };
  }

  componentDidMount() {
    this.taskDatePicker.onPressDate();
  }

  changeDate = (date) => {
    if (this.props.onDateChange) {
      this.props.onDateChange(date);
    }
  };

  cancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          hideText
          cancelBtnText="Cancel"
          confirmBtnText="Add"
          customStyles={{
            btnTextCancel: styles.btnText,
            btnTextConfirm: [styles.btnTextConfirm, styles.btnText],
            datePickerCon: styles.datePickerCon
          }}
          date={moment.unix(this.state.date).format(this.dateFormat)}
          format={this.dateFormat}
          minDate={this.minDate}
          mode={this.mode}
          ref={component => (this.taskDatePicker = component)}
          showIcon={false}
          onCloseModal={this.cancel}
          onDateChange={(date) => {
            this.setState({ date });
            this.changeDate(date);
          }}
        />
      </View>
    );
  }
}
SiteCompliDatePicker.propTypes = {
  onDateChange: PropTypes.func,
  onCancel: PropTypes.func,
  initialDate: PropTypes.number,
  dateFormat: PropTypes.string,
  minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  mode: PropTypes.string
};
