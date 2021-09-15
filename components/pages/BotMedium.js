import React, { Component } from 'react';

class BotMedium {
  constructor(botOption) {
    this.botOption = botOption;
  }

  selectPosition(board) {
    let botPlay = undefined;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const neighbor1 = board[i][(j + 1) % 3];
        const neighbor2 = board[i][(j + 2) % 3];
        const neighbor3 = board[(i + 1) % 3][j];
        const neighbor4 = board[(i + 2) % 3][j];

        if (board[i][j] === '' && neighbor1 === neighbor2 && neighbor1 !== '') {
          botPlay = [i, j];
          break;
        } else if (board[i][j] === '' && neighbor3 === neighbor4 && neighbor3 !== '') {
          botPlay = [i, j];
          break;
        }
      }
      if (botPlay !== undefined) {
        break;
      }
    }
    if (botPlay === undefined) {
      if (board[0][0] !== '' && board[0][0] === board[1][1] && board[2][2] === '') {
        botPlay = [2, 2];
      } else if ((board[0][0] !== '' && board[0][0] === board[2][2] && board[1][1] === '' ) ||
                (board[2][0] !== '' && board[2][0] === board[0][2] && board[1][1] === '')) {
        botPlay = [1, 1];
      } else if (board[2][2] !== '' && board[2][2] === board[1][1] && board[0][0] === '') {
        botPlay = [0, 0];
      } else if (board[0][2] !== '' && board[0][2] === board[1][1] && board[2][0] === '') {
        botPlay = [2, 0];
      } else if (board[2][0] !== '' && board[2][0] === board[1][1] && board[0][2] === '') {
        botPlay = [0, 2]; 
      } else {
        const newBoard = []
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
              newBoard.push([i, j])
            }
          }
        }
        const botPlay = Math.floor(Math.random() * newBoard.length);
        return newBoard[botPlay];
      }
    }
    return botPlay;
  }
}

export default BotMedium;
