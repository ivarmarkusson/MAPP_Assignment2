import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
});

class SectionItem extends React.Component {
  onPress = (contact) => {
    this.props.navigation.navigate('Detail', contact);
  };

  render() {
    const { item } = this.props;
    const firstName = item.contact.name.first_name;
    const lastName = item.contact.name.last_name;
    const fullName = `${firstName} ${lastName}`;

    return (
      <TouchableOpacity onPress={() => this.onPress(item)}>
        <Text style={styles.text}>{fullName}</Text>
      </TouchableOpacity>
    );
  }
}

export default SectionItem;
