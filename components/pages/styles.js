import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f7f9",
    alignItems: "center",
    justifyContent: "center",
  },

  titleInitial: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#333",
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#333",
    margin: 15,
  },

  titleMode: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#555",
    marginTop: 20,
    margin: 10,
  },

  subtitle: {
    fontSize: 20,
    color: "#555",
    marginTop: 20,
    margin: 15,
  },

  subtitleWinner: {
    fontSize: 20,
    color: "#555",
    marginTop: 20,
    fontWeight: "bold",
  },

  boxPlayerInitial: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },

  boxPlayer: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    backgroundColor: "#e9e9e9",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },

  boxPlayerModeGame: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },

  boxPlayerModeGameAlone: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },

  checkBox: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 20,
  },

  checkBoxText: {
    fontSize: 17,
    color: "#555",
    marginLeft: 5,
  },

  items: {
    flexDirection: "row",
  },

  buttonConfig: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    backgroundColor: "#e7eaeb",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 25,
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

  playerX: {
    fontSize: 40,
    color: "#553fda",
  },

  playerO: {
    fontSize: 40,
    color: "#da3f3f",
  },

  modeGameEasy: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "space-between",
    color: "#4169E1",
  },

  modeGameMedium: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "space-between",
    color: "#DAA520",
  },

  modeGameHard: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "space-between",
    color: "#B22222",
  },

  modeGameAlone: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "space-between",
    color: "#4169E1",
  },
});

export default styles;
