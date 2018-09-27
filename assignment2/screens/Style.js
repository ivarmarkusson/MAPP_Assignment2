import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
