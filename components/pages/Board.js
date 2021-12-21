import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from '../styles/boardStyles';

class Board extends Component {
  constructor(props) {
    super();
    this.fillPosition = props.fillPosition;
    this.board = props.board;
    this.disabled = props.disabled || false;
  }
  render() {
    return (
      <View>
        <View style={styles.items}>
          <Cell
            value={this.board[0][0]}
            fillPositionCallback={() => this.fillPosition(0, 0)}
            disabled={this.disabled}
          />

          <Cell
            value={this.board[0][1]}
            fillPositionCallback={() => this.fillPosition(0, 1)}
            disabled={this.disabled}
          />

          <Cell
            value={this.board[0][2]}
            fillPositionCallback={() => this.fillPosition(0, 2)}
            disabled={this.disabled}
          />
        </View>

        <View style={styles.items}>
          <Cell
            value={this.board[1][0]}
            fillPositionCallback={() => this.fillPosition(1, 0)}
            disabled={this.disabled}
          />

          <Cell
            value={this.board[1][1]}
            fillPositionCallback={() => this.fillPosition(1, 1)}
            disabled={this.disabled}
          />

          <Cell
            value={this.board[1][2]}
            fillPositionCallback={() => this.fillPosition(1, 2)}
            disabled={this.disabled}
          />
        </View>

        <View style={styles.items}>
          <Cell
            value={this.board[2][0]}
            fillPositionCallback={() => this.fillPosition(2, 0)}
            disabled={this.disabled}
          />

          <Cell
            value={this.board[2][1]}
            fillPositionCallback={() => this.fillPosition(2, 1)}
            disabled={this.disabled}
          />

          <Cell
            value={this.board[2][2]}
            fillPositionCallback={() => this.fillPosition(2, 2)}
            disabled={this.disabled}
          />
        </View>
      </View>
    );
  }
}

class Cell extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.disabled = props.disabled;
  }

  getColor(currentPlayer) {
    switch (currentPlayer) {
      case "X":
        return "#553fda";
      case "O":
        return "#da3f3f";
    }
  }

  isCellDisabled() {
    return this.props.value !== "" || this.disabled;
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.boxPlayer}
        onPress={() => this.props.fillPositionCallback()}
        disabled={this.isCellDisabled()}
      >
        <Text style={{ color: this.getColor(this.props.value), fontSize: 40 }}>
          {this.props.value}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Board;
