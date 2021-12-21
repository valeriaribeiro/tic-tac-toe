import React, {Component, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Initial from './components/pages/Initial';
import Game from './components/pages/Game';
import Winner from './components/pages/Winner';
import GameMode from './components/pages/GameMode';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerOption: 'X',
      gameMode: undefined,
      winner: undefined,
      currentScreen: 'initial',
      toRemember: undefined,
    }
    this.updatePlayerOption = this.updatePlayerOption.bind(this);
    this.endGame = this.endGame.bind(this);
    this.setGameMode = this.setGameMode.bind(this);
    this.chooseLevel = this.chooseLevel.bind(this);
  }

  renderCurrentScreen() {
    switch (this.state.currentScreen) {
      case "initial":
        return (
          <Initial
            optionCallback={this.updatePlayerOption}
            configCallback={this.chooseLevel}
          />
        );
      case "gamemode":
        return <GameMode optionCallback={this.setGameMode} />;
      case "game":
        return (
          <Game
            playerOption={this.state.playerOption}
            gameMode={this.state.gameMode}
            endGameCallback={this.endGame}
          />
        );
      case "winner":
        return (
          <Winner
            winner={this.state.winner}
            endGameCallback={this.endGame}
            board={this.board}
          />
        );
    }
  }

  updatePlayerOption(option) {
    this.setState((state) => ({
      playerOption: option,
    }));
    
    if (this.state.toRemember === true) {
      this.setState((state) => ({
        currentScreen: 'game',
      }));
    } else {
      this.setState(state => ({
        currentScreen: 'gamemode'
      }));
    }
  }

  setGameMode(gameMode, toRemember) {
    this.setState(state => ({
      gameMode: gameMode,
    }));
    this.setState(state => ({
      toRemember: toRemember
    }));
    this.setState(state => ({
      currentScreen: 'game'
    }));
  }

  chooseLevel(gameMode) {
    this.setState(state => ({
      gameMode: gameMode,
    }));
    this.setState(state => ({
      currentScreen: 'gamemode'
    }));
  }

  endGame(winner, board) {
    if(winner === undefined) {
      this.setState(state => ({
        currentScreen: 'initial'
      }));
    } else {
      this.board = board;
      this.setState(state => ({
        winner,
        currentScreen: 'winner'
      }));
    }

  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCurrentScreen()}
      </View>
    );
  }
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f7f9",
    alignItems: "center",
    justifyContent: "center",
  },
});