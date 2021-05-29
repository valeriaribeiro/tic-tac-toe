import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

import Bot from './Bot';

class Game extends Component {
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
        console.log(`checando o ganhador ${JSON.stringify(currentBoard)}`)
        this.checkWinner();
        console.log('trocando de jogador')
        await this.switchPlayer();
        console.log('vai jogar alguém')
        console.log(`jogador - ${(this.state.currentPlayer === this.playerOption)}`)
        if(this.state.currentPlayer !== this.playerOption && this.withBot){
            console.log('O bot está jogando')
            this.playBot(this.state.currentPlayer);
        }
    }

    async switchPlayer() {
        let otherPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
        await new Promise(resolve => {
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
        console.log(`ganhador do momento: ${winner}`);
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
        console.log('Entrou na checkWinner');
        switch(this.getWinner()){
            case 'X':
                return this.endGameCallback('X');
            case 'O':
                return this.endGameCallback('O');
            default:
                if(this.isComplete()) return this.endGameCallback('velha');
        }
    }

    playBot(currentPlayer) {
        const bot = new Bot(currentPlayer);
        const [i, j] = bot.selectPosition(this.state.board);
        this.fillPosition(i, j);
        console.log('O bot está cagando todo o jogo')
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