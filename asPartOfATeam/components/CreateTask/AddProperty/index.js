import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { get } from 'lodash';

import { buildingProps } from '../../../assets/propTypes/building';
import elementsStyles from '../elementsStylesheet';

export default class AddProperty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      building: props.building,
      area: null
    };
  }

  onDone = (building, area) => {
    this.setState({ building, area });
    this.props.onAddProperty(building, area);
  }

  propertyTitle = () => {
    if (get(this.state, 'area.id')) {
      return `${this.state.building.name} - ${this.state.area.value}`;
    }

    return this.state.building.name;
  }

  removeBuilding = () => {
    this.onDone(null, null);
  }

  showPropertyList = () => {
    this.props.navigator.showModal({
      screen: 'InCheck.AddPropertyList',
      title: 'Add Property',
      passProps: {
        onDone: this.onDone,
        properties: this.props.properties,
        selected: this.state.building,
        selectedArea: this.state.area
      }
    });
  }

  render() {
    return (
      <View>
        <View style={elementsStyles.container}>
          <TouchableOpacity
            style={elementsStyles.addButton}
            onPress={this.showPropertyList}
          >
            <View style={elementsStyles.addAttribute}>
              <View style={elementsStyles.icon}>
                <Image source={require('../../../assets/images/CreateTask/property.png')} />
              </View>
              <Text style={elementsStyles.label}>Select a property</Text>
            </View>
          </TouchableOpacity>
        </View>
        {this.state.building &&
          <View style={elementsStyles.itemContainer}>
            <View style={elementsStyles.itemBox}>
              <Text style={elementsStyles.itemText}>
                {this.propertyTitle()}
              </Text>
              <TouchableOpacity
                style={elementsStyles.removeItem}
                onPress={this.removeBuilding}
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

AddProperty.propTypes = {
  navigator: PropTypes.shape({
    showModal: PropTypes.func
  }),
  properties: PropTypes.arrayOf(buildingProps),
  building: buildingProps,
  onAddProperty: PropTypes.func
};
