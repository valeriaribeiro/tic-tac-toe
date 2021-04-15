import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

class Game extends Component{
    constructor(props){
        super();
        console.log(`Estamos aqui: ${props}`)
        const board = [['','',''],
                ['','',''],
                ['','',''],
        ];
        
        this.props = props;
        this.playerOption = props.playerOption;
        this.endGameCallback = props.endGameCallback;
        this.state = {
            board,
            currentPlayer: this.playerOption,
        }

        this.fillPosition = this.fillPosition.bind(this);
        this.switchPlayer = this.switchPlayer.bind(this);
    }
    
    fillPosition(row, col) {
        let currentBoard = this.state.board;
        currentBoard[row][col] = this.state.currentPlayer;
        this.setState(state => ({
            board: currentBoard,
        }));
        this.switchPlayer();
    }

    switchPlayer() {
        let otherPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
        this.setState(state => ({
            currentPlayer: otherPlayer
        }))
    }
    

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Jogo da velha</Text>

                <View style={styles.Items}>
                    <Cell 
                        value={this.state.board[0][0]} 
                        fillPositionCallback={() => this.fillPosition(0, 0)}
                    />

                    <Cell 
                        value={this.state.board[0][1]} 
                        fillPositionCallback={() => this.fillPosition(0, 1)}
                    />

                    <Cell 
                        value={this.state.board[0][2]} 
                        fillPositionCallback={() => this.fillPosition(0, 2)}
                    />
                </View>

                <View style={styles.Items}>
                    <Cell 
                        value={this.state.board[1][0]}
                        fillPositionCallback={() => this.fillPosition(1, 0)}
                    />

                    <Cell 
                        value={this.state.board[1][1]}
                        fillPositionCallback={() => this.fillPosition(1, 1)}
                    />

                    <Cell 
                        value={this.state.board[1][2]}
                        fillPositionCallback={() => this.fillPosition(1, 2)}
                    />
                </View>

                <View style={styles.Items}>
                    <Cell 
                        value={this.state.board[2][0]} 
                        fillPositionCallback={() => this.fillPosition(2, 0)}
                    />

                    <Cell 
                        value={this.state.board[2][1]} 
                        fillPositionCallback={() => this.fillPosition(2, 1)}
                    />

                    <Cell 
                        value={this.state.board[2][2]} 
                        fillPositionCallback={() => this.fillPosition(2, 2)}
                    />                    
                </View>

                <TouchableOpacity style={styles.restartButton} onPress={() => this.endGameCallback()}>
                    <Text style={styles.restart}>Reiniciar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

class Cell extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }

    getColor(currentPlayer){
        switch(currentPlayer){
            case 'X':
                return '#553fda';
            case 'O':
                 return '#da3f3f';
        }
    }

    render(){
        return(
            <TouchableOpacity 
                style={styles.boxPlayer} 
                onPress={() => this.props.fillPositionCallback()}
                disabled={this.props.value !== ''}
            >
                <Text style={{color: this.getColor(this.props.value), fontSize: 40}}>
                    {this.props.value}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default Game;