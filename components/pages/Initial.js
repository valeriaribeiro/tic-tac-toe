import React, {Component, useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

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
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.buttonConfig}
              onPress={() => this.configCallback()}
            >
              <Text style={styles.restart}>Nível</Text>
            </TouchableOpacity>

            <Text style={styles.titleInitial}>Jogo da velha</Text>
            <Text style={styles.subtitle}>Selecione o primeiro jogador</Text>

            <View style={styles.items}>
              <TouchableOpacity
                style={styles.boxPlayerInitial}
                onPress={() =>
                  this.props.optionCallback("X", this.state.withBot)
                }
              >
                <Text style={styles.playerX}>X</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.boxPlayerInitial}
                onPress={() =>
                  this.props.optionCallback("O", this.state.withBot)
                }
              >
                <Text style={styles.playerO}>O</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
}


export default Initial;