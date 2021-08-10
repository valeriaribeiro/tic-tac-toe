import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

import Bot from './Bot';
import Board from './Board';

class Game extends Component {
    constructor(props){
        super();
        const board = [['','',''],
                ['','',''],
                ['','',''],
        ];
        
        this.props = props;
        this.playerOption = props.playerOption;
        this.endGameCallback = props.endGameCallback;
        this.withBot = props.withBot;
        this.state = {
            board,
            currentPlayer: this.playerOption,
        }

        this.fillPosition = this.fillPosition.bind(this);
        this.switchPlayer = this.switchPlayer.bind(this);
    }
    
    async fillPosition(row, col) {
        let currentBoard = this.state.board;
        currentBoard[row][col] = this.state.currentPlayer;
        await new Promise(resolve => {
            this.setState(state => ({
                board: currentBoard,
            }), resolve);
        }) 
        this.checkWinner();
        await this.switchPlayer();
        if (this.state.currentPlayer !== this.playerOption && this.withBot) {
            await new Promise( resolve => {
                setTimeout(resolve, 500);
            })
            this.playBot(this.state.currentPlayer);
        }
    }

    async switchPlayer() {
        let otherPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
        return new Promise(resolve => {
            this.setState(state => ({
                currentPlayer: otherPlayer
            }), resolve)
        })
    }

    getWinner() {
        let winner = undefined,
            board = this.state.board;

        // check rows
        for(let row = 0; row < 3; row++) {
            if(board[row][0] === board[row][1] && 
                board[row][1] === board[row][2] &&
                board[row][0] !== '') {
                    winner = board[row][0];         
            }
        }
        // check columns
        for(let col = 0; col < 3; col++) {
            if(board[0][col] === board[1][col] &&
                board[1][col] === board[2][col] &&
                board[0][col] !== '') {
                    winner = board[0][col];
                }
        }

        // check all diagonals
        if(board[0][0] !== '' && board[0][0] === board[1][1] && 
            board[1][1] === board[2][2]) {
                winner = board[0][0];
        } else if(board[0][2] !== '' && board[0][2] === board[1][1] && 
            board[1][1] === board[2][0]) {
                winner = board[0][2];
        }
        return winner;
    }

    isComplete() {
        const board = this.state.board;

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j] === ''){
                    return false;
                }
            }
        }
        return true;
    }

    checkWinner() {
        switch(this.getWinner()){
            case 'X':
                return this.endGameCallback('X', this.state.board);
            case 'O':
                return this.endGameCallback("O", this.state.board);
            default:
                if(this.isComplete()) return this.endGameCallback("velha", this.state.board);
        }
    }

    playBot(currentPlayer) {
        const bot = new Bot(currentPlayer);
        const [i, j] = bot.selectPosition(this.state.board);
        this.fillPosition(i, j);
    }
    

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Jogo da velha</Text>

                <Board fillPosition={this.fillPosition} board={this.state.board}/>

                <TouchableOpacity style={styles.restartButton} onPress={() => this.endGameCallback()}>
                    <Text style={styles.restart}>Reiniciar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default Game;