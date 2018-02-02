import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StatusBar from './index';

class StatusBarContainer extends Component {
  render() {
    return (
      <StatusBar
        isConnected={this.props.isConnected}
        isLoading={this.props.isLoading}
      />
    );
  }
}

StatusBarContainer.propTypes = {
  isConnected: PropTypes.bool,
  isLoading: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.apiStatusReducer.isLoading,
    isConnected: state.network.isConnected
  };
};

export default connect(mapStateToProps)(StatusBarContainer);
