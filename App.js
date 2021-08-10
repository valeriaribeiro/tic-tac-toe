import React, {Component, useState} from 'react';
import {View} from 'react-native';

import styles from './components/pages/styles';

import Initial from './components/pages/Initial';
import Game from './components/pages/Game';
import Winner from './components/pages/Winner';


function switchScreen(){
  switch(screen){
    case 'initial':
      return Initial();
    case 'game':
      return Game();
    case 'winner':
      return Winner();
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerOption: 'X',
      withBot: true,
      winner: undefined,
      currentScreen: 'initial',
    }
    this.updatePlayerOption = this.updatePlayerOption.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  renderCurrentScreen() {
    switch(this.state.currentScreen){
      case 'initial':
        return (<Initial optionCallback = {this.updatePlayerOption}/>);
      case 'game':
        return (
          <Game playerOption={this.state.playerOption} 
          withBot={this.state.withBot} 
          endGameCallback={this.endGame}/>
        );
      case 'winner':
        return (<Winner winner={this.state.winner} endGameCallback={this.endGame} board={this.board}/>);
    }
  }

  updatePlayerOption(option, withBot) {
    this.setState(state => ({
      playerOption: option,
      withBot: withBot,
    }));
    this.setState(state => ({
      currentScreen: 'game'
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