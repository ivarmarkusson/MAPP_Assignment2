import React from 'react';
import {
  StyleSheet, Image, View, Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    margin: 20,
  },
  image: {
    width: 160,
    height: 160,
  },
});

class Avatar extends React.Component {
  render() {
    const { img, name } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: img }} />
        <Text style={styles.name}>{`${name}`}</Text>
      </View>
    );
  }
}

export default Avatar;
