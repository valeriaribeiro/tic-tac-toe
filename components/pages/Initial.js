import React, {Component, useState} from 'react';
import {CheckBox, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

class Initial extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.props = props;
        this.state = {
            withBot: true,
        }
    }


    render() {
        return (
          <View style={styles.container}>
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

            <View style={styles.checkBox}>
              <CheckBox
                value={this.state.withBot}
                onValueChange={() =>
                  this.setState({ withBot: !this.state.withBot })
                }
              />
              <Text style={styles.checkBoxText}>Jogar contra máquina</Text>
            </View>
          </View>
        );
    }
}


export default Initial;