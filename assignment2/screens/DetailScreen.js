import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  infoContainer: {
    width: '80%',
    height: '25%',
  },
  text: {
    fontSize: 16,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    textAlign: 'center',
    margin: 10,
  },
  name: {
    fontSize: 20,
    margin: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#0082ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  avatar: {
    width: 160,
    height: 160,
  },
});

export default class DetailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeFlag: true,
    };
  }

  changeFlag = () => {
    const { homeFlag } = this.state;
    if (homeFlag) {
      this.setState({ homeFlag: false });
    } else {
      this.setState({ homeFlag: true });
    }
  };

  render() {
    const { navigation } = this.props;
    const { homeFlag } = this.state;
    const { contact } = navigation.state.params;
    const { home, work, avatar } = contact;
    const firstName = contact.name.first_name;
    const lastName = contact.name.last_name;
    const fullName = `${firstName} ${lastName}`;

    if (homeFlag) {
      return (
        <View style={styles.container}>
          <Image style={styles.avatar} source={{ uri: avatar }} />
          <Text style={styles.name}>{`${fullName}`}</Text>
          <TouchableOpacity style={styles.button} onPress={this.changeFlag}>
            <Text style={styles.buttonText}>Show work Info</Text>
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>{home.address}</Text>
            <Text style={styles.text}>{home.email}</Text>
            <Text style={styles.text}>{home.phone_number}</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <Text style={styles.name}>{`${fullName}`}</Text>
        <TouchableOpacity style={styles.button} onPress={this.changeFlag}>
          <Text style={styles.buttonText}>Show home Info</Text>
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{work.address}</Text>
          <Text style={styles.text}>{work.email}</Text>
          <Text style={styles.text}>{work.phone_number}</Text>
          <Text style={styles.text}>{work.company_name}</Text>
          <Text style={styles.text}>{`${work.department}, ${
            work.job_title
          }`}</Text>
        </View>
      </View>
    );
  }
}
