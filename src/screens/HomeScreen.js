import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView, Dimensions} from "react-native";

// import {Actions} from "react-native-router-flux";

export class HomeScreen extends Component {

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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  column   : {
    marginTop      : 60,
    borderColor    : 'red',
    borderWidth    : 1,
    backgroundColor: '#D3D3D3',
    // height         : Dimensions.get("window").height,
    width          : Dimensions.get("window").width
  }
});
