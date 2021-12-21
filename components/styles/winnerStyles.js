import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f7f9",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#333",
    margin: 15,
  },

  subtitle: {
    fontSize: 20,
    color: "#555",
    marginTop: 20,
    fontWeight: "bold",
  },

  items: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  restartButton: {
    width: 260,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    backgroundColor: "#e7eaeb",
    alignItems: "center",
    justifyContent: "center",
    margin: 25,
  },

  restart: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default styles;