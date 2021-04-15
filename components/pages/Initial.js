import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

class Initial extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.props = props;
    }


    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.titleInitial}>Jogo da velha</Text>
                <Text style={styles.caption}>Selecione o primeiro jogador</Text>
    
                <View style={styles.Items}>
                    <TouchableOpacity 
                        style={styles.boxPlayerInitial}
                        onPress={() => this.props.optionCallback('X')}
                    >
                        <Text style={styles.playerX}>X</Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity 
                        style={styles.boxPlayerInitial}
                        onPress={() => this.props.optionCallback('O')}
                    >
                        <Text style={styles.playerO}>O</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


export default Initial;