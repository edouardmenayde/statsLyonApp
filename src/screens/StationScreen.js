import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView, Dimensions} from "react-native";


export class StationScreen extends Component {

  constructor (props) {
    super(props);
  }

  _renderScrollViewContent() {
    return (
      <ScrollView
        style={styles.container}
      >
        <Text>{this.props.data}</Text>
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderScrollViewContent()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

