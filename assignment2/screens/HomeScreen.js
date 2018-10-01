import React from 'react';
import {
  ScrollView, StyleSheet, Text, View, SectionList, TouchableOpacity,
} from 'react-native';
import _ from 'lodash';

const data = require('../data/ass2data.json');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  contactListContainer: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 32,
  },
  sectionHeader: {
    fontSize: 20,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    this.setState({ contacts: this.getSortedContacts(data) });
  }

  getSortedContacts = (contacts) => {
    // Sectionize the contacts array
    let sortedContacts = contacts.reduce((acc, contact) => {
      const key = contact.name.first_name[0];
      if (!(key in acc)) {
        acc[key] = {
          title: key,
          data: [],
        };
      }
      acc[key].data.push({ contact });

      return acc;
    }, {});

    // Sort the section headers by letter
    sortedContacts = _.sortBy(sortedContacts, ['title']);

    // Sort the data by first_name
    sortedContacts.map(x => _.sortBy(x.data, obj => obj.contact.name.first_name));

    return sortedContacts;
  };

  onPress = (contact) => {
    this.props.navigation.navigate('Detail', contact);
  };

  renderItem = ({ item }) => {
    const { first_name } = item.contact.name;
    return (
      <TouchableOpacity onPress={() => this.onPress(item)}>
        <Text style={styles.text}>{first_name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { contacts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>SectionList</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <SectionList
            renderItem={this.renderItem}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
            sections={contacts}
            keyExtractor={(item, index) => item + index}
          />
        </ScrollView>
      </View>
    );
  }
}
