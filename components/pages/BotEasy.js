class BotEasy {
    constructor(botOption) {
        this.botOption = botOption;
    }

    selectPosition(board) {
        newBoard = []
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j] === ''){
                    newBoard.push([i,j])
                }
            }
        }
        const botPlay = Math.floor(Math.random() * newBoard.length);
        return newBoard[botPlay];
    }
}

export default BotEasy;