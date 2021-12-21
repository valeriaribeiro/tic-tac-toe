import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f7f9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
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
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },

  playerX: {
    fontSize: 40,
    color: '#553fda',
  },

  playerO: {
    fontSize: 40,
    color: '#da3f3f',
  },

  
  buttonConfig: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    backgroundColor: '#e7eaeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  viewContainer: {
    marginTop: 20,
  },
});

export default styles;