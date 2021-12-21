import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Board from './Board';

import styles from '../styles/winnerStyles';

class Winner extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.winner = props.winner;
    this.endGameCallback = props.endGameCallback;
    this.board = props.board;
  }

  getColor(winner) {
    switch (winner) {
      case 'X':
        return "#553fda";
      case 'O':
        return "#da3f3f";
    }
  }

  renderWinnwer() {
    if (this.winner === "velha") {
      return (
        <>
          <Text style={styles.title}>Fim de partida</Text>
          <Board board={this.board} />
          <Text style={styles.subtitle}>O jogo deu velha</Text>
        </>
      );
    }
    return (
      <>
        <Text style={styles.title}>Fim de partida</Text>
            <Board board={this.board} disabled={true}/>
        <View style={styles.items}>
          <Text style={styles.subtitle}> O jogador </Text>
          <Text
            style={{
              color: this.getColor(this.winner),
              fontSize: 20,
              marginTop: 20,
              fontWeight: "bold",
            }}
          >
            {this.winner}
          </Text>
          <Text style={styles.subtitle}> venceu o jogo</Text>
        </View>
      </>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderWinnwer()}
        <TouchableOpacity
          style={styles.restartButton}
          onPress={() => this.endGameCallback()}
        >
          <Text style={styles.restart}>Novo Jogo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Winner;
