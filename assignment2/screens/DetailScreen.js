import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class InfoScreen extends React.Component {
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
    const { contact } = this.props.navigation.state.params;
    const info = contact;

    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: info.avatar }} />
        <Text style={styles.name}>{`${contact.name.first_name} ${
          contact.name.last_name
        }`}</Text>
        <TouchableOpacity style={styles.button} onPress={this.changeFlag}>
          <Text style={styles.buttonText}>
            Show {this.state.homeFlag ? 'work' : 'home'} Info
          </Text>
        </TouchableOpacity>
        {this.state.homeFlag ? (
          <View style={styles.infoContainer}>
            <Text style={styles.text}>{info.home.address}</Text>
            <Text style={styles.text}>{info.home.email}</Text>
            <Text style={styles.text}>{info.home.phone_number}</Text>
          </View>
        ) : (
          <View style={styles.infoContainer}>
            <Text style={styles.text}>{info.work.address}</Text>
            <Text style={styles.text}>{info.work.email}</Text>
            <Text style={styles.text}>{info.work.phone_number}</Text>
            <Text style={styles.text}>{info.work.company_name}</Text>
            <Text style={styles.text}>{`${info.work.department}, ${
              info.work.job_title
            }`}</Text>
          </View>
        )}
      </View>
    );
  }
}

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
