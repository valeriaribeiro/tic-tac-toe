import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Lottie from 'lottie-react-native';

import styles from './styles';
import trophy from '../../assets/animations/winner.json';

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
            return (
                <>
                    <Text style={styles.title}>Fim de partida</Text>
                    <Text style={styles.caption}>O jogo deu velha</Text>
                </>
            )
        }
        return(
            <>
                <Text style={styles.title}>Fim de partida</Text>
                <Text style={styles.caption}> O jogador: </Text>
                <View style={styles.boxPlayerInitial} >
                    <Text style={{color: this.getColor(this.winner), fontSize: 40}}>
                        {this.winner}
                    </Text>
                </View>
                <Text style={styles.caption}>Venceu o jogo</Text>
                
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