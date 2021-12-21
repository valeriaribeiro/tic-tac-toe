import React, {Component, useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from '../styles/initialStyles';

class Initial extends Component{
  constructor(props){
    super(props);
      this.props = props;
      this.configCallback = props.configCallback;
      this.state = {
        withBot: true,
      }
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Jogo da velha</Text>
          <Text style={styles.subtitle}>Selecione o primeiro jogador</Text>

          <View style={styles.items}>
            <TouchableOpacity
              style={styles.boxPlayer}
              onPress={() => this.props.optionCallback("X", this.state.withBot)}
            >
              <Text style={styles.playerX}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.boxPlayer}
              onPress={() => this.props.optionCallback("O", this.state.withBot)}
            >
              <Text style={styles.playerO}>O</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewContainer}>
            <TouchableOpacity
              style={styles.buttonConfig}
              onPress={() => this.configCallback()}
            >
              <AntDesign name="setting" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}


export default Initial;