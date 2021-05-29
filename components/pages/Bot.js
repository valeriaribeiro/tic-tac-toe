class Bot {
    constructor(botOption) {
        this.botOption = botOption;
    }

    selectPosition(board) {
        while(true) {
            const i = Math.floor(Math.random() * 3);
            const j = Math.floor(Math.random() * 3);
            if(board[i][j] === ''){
                console.log(`A casa escolhida é ${i}, ${j}`)
                return [i, j];
            }
        }
    }
}

export default Bot;