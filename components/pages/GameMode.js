import React, { Component, useState } from 'react';
import {CheckBox, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

class GameMode extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      toRemember: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleMode}>Jogar Contra o Bot</Text>
        <Text style={styles.subtitle}>Nível de dificuldade:</Text>

        <View style={styles.items}>
          <TouchableOpacity
            style={styles.boxPlayerModeGame}
            onPress={() => this.props.optionCallback("easy", this.state.toRemember)}
          >
            <Text style={styles.modeGameEasy}>Fácil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.boxPlayerModeGame}
            onPress={() => this.props.optionCallback("medium", this.state.toRemember)}
          >
            <Text style={styles.modeGameMedium}>Médio</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.titleMode}> Ou Jogar </Text>

        <View style={styles.items}>
          <TouchableOpacity
            style={styles.boxPlayerModeGameAlone}
            onPress={() => this.props.optionCallback("friend", this.state.toRemember)}
          >
            <Text style={styles.modeGameAlone}>Contra um amigo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.checkBox}>
          <CheckBox
            value={this.state.toRemember}
            onValueChange={() =>
              this.setState({ toRemember: !this.state.toRemember })
            }
          />
          <Text style={styles.checkBoxText}>Lembrar para as próximas partidas</Text>
        </View>
      </View>
    );
  }
}

export default GameMode;
