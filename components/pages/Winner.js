import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

class Winner extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.winner = props.winner;
        this.endGameCallback = props.endGameCallback;
    }

    getColor(winner){
        switch(winner){
            case 'X':
                return '#553fda';
            case 'O':
                 return '#da3f3f';
        }
    }

    renderWinnwer() {
        if(this.winner === 'velha'){
            return(
                <Text style={styles.title}>O jogo deu velha</Text>
            )
        }
        return(
            <>
                <Text style={styles.title}>Vencedor</Text>
                <Text style={styles.caption}>Jogador: </Text>
                <View style={styles.boxPlayerInitial} >
                    <Text style={{color: this.getColor(this.winner), fontSize: 40}}>
                        {this.winner}
                    </Text>
                </View>
                
            </>
        )
    }


    render() {
        return(
            <View style={styles.container}>
                {this.renderWinnwer()}
                <TouchableOpacity style={styles.restartButton} onPress={() => this.endGameCallback()}>
                    <Text style={styles.restart}>Novo Jogo</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Winner;