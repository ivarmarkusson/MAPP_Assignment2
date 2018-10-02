import React from 'react';
import {
  ScrollView, StyleSheet, View, SectionList, Text, TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import SectionItem from '../components/SectionItem';
import wholeData from '../data/ass2data.json';

const data = wholeData.splice(0, 100);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortFlag: false,
      contacts: [],
    };
  }

  componentDidMount() {
    this.setState({ contacts: this.getContacts(data) });
  }

  getContacts = (contacts) => {
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
    // Sort each data array by first name
    sortedContacts = this.sortContactsByFirst(sortedContacts);
    return sortedContacts;
  };

  // Sort each data array in contacts by first name
  sortContactsByFirst = (contacts) => {
    const sortedContacts = contacts.map((x) => {
      const rObj = { title: x.title };
      rObj.data = _.sortBy(x.data, obj => obj.contact.name.first_name);
      return rObj;
    });
    return sortedContacts;
  };

  // Sort each data array in contacts by last name
  sortContactsByLast = (contacts) => {
    const sortedContacts = contacts.map((x) => {
      const rObj = { title: x.title };
      rObj.data = _.sortBy(x.data, obj => obj.contact.name.last_name);
      return rObj;
    });
    return sortedContacts;
  };

  toggleSort = () => {
    const { sortFlag, contacts } = this.state;
    if (sortFlag) {
      this.setState({ sortFlag: false });
      this.setState({ contacts: this.sortContactsByFirst(contacts) });
    } else {
      this.setState({ sortFlag: true });
      this.setState({ contacts: this.sortContactsByLast(contacts) });
    }
  };

  renderItem = ({ item }) => <SectionItem item={item} navigation={this.props.navigation} />;

  renderSectionHeader = ({ section: { title } }) => <SectionHeader title={title} />;

  render() {
    const { contacts, sortFlag } = this.state;
    const headerText = 'Phone book';
    const toggleText = sortFlag ? 'Sort by first name' : 'Sort by last name';
    return (
      <View style={styles.container}>
        <Header text={headerText} />
        <TouchableOpacity style={styles.button} onPress={this.toggleSort}>
          <Text style={styles.buttonText}>{toggleText}</Text>
        </TouchableOpacity>
        <ScrollView>
          <SectionList
            renderItem={this.renderItem}
            renderSectionHeader={this.renderSectionHeader}
            sections={contacts}
            keyExtractor={(item, index) => item + index}
          />
        </ScrollView>
      </View>
    );
  }
}
