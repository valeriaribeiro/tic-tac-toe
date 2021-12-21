import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7f9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 20,
    margin: 10,
  },

  subtitle: {
    fontSize: 20,
    color: '#555',
    marginTop: 20,
    margin: 15,
  },

  items: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  boxPlayer: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },

  boxPlayerAlone: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },

  modeGameEasy: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'space-around',
    color: '#4169E1',
  },

  modeGameMedium: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'space-around',
    color: '#DAA520',
  },

  modeGameHard: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'space-around',
    color: '#B22222',
  },

  modeGameAlone: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'space-around',
    color: '#4169E1',
  },

  checkBox: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 20,
  },

  checkBoxText: {
    fontSize: 17,
    color: '#555',
    marginLeft: 5,
  },
});

export default styles;