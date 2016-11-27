import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  InteractionManager
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export class StationPreview extends Component {

  static propTypes = {
    station: PropTypes.object.isRequired,
    actions: PropTypes.object
  };

  static defaultProps = {
    station: {},
    actions: {}
  };

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const {station, handleStationSelected} = this.props;
    handleStationSelected(station._source.stationID);
  }

  render() {
    const {station, actions} = this.props;
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.container}>
          <Icon name="directions-bike" style={styles.icon}/>
          <Text style={styles.name}>
            {station._source.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    paddingTop     : 25,
    paddingLeft    : 25,
    flex           : 1,
    flexDirection  : 'row',
    alignItems     : 'center',
    width          : Dimensions.get('window').width,
    backgroundColor: 'hsl(0, 0%, 92%)'
  },
  icon     : {
    marginRight: 10,
    fontSize   : 18
  },
  name     : {
    fontSize: 18
  }
};
