/**
 * HomeScreen
 * @flow
 */
import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView, Dimensions} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  column   : {
    marginTop      : 70,
    borderColor    : 'red',
    borderWidth    : 1,
    backgroundColor: '#D3D3D3',
    width          : Dimensions.get("window").width
  }
});

export default class HomeScreen extends Component {

  _renderScrollViewContent() {
    const data = Array.from({length: 40});

    return (
      <ScrollView
        style={styles.container}
        horizontal
      >
        {data.map((_, i) =>
          <View key={i} style={styles.column}>
            <Text>{i + 1}</Text>
          </View>
        )}
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
