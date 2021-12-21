import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    backgroundColor: '#e9e9e9',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default styles;