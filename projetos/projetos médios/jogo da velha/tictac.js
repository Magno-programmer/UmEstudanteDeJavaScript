const tictac = {
    board: ['', '', '', '', '', '', '', '', ''],
    simbols: {
        opition: ['X', 'O'],
        muda_index: 0,
        change: function() {
            this.muda_index = (this.muda_index === 0 ? 1:0);
        }
    },
    container_element: null,
    gameover: false,

    init: function( container ){
        this.container_element = container;
    },

    win_senquence: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [2, 5, 8],
        [1, 4, 7],
        [0, 3, 6],
        [0, 4, 8],
        [2, 4, 6],
    ],

    equal_simbol: function(simbol){
        for(i in this.win_senquence){
            if(this.board)
        }
    },

    make_play: function(position){
        if(this.gameover) return false;
        if(this.board[position] === ''){
            this.board[position] = this.simbols.opition [this.simbols.muda_index]
        }
        this.draw();

        this.simbols.change();

    },

    draw: function(){
        let content = '';

        for(i in this.board){
            content += '<div onclick="tictac.make_play(' + i + ')">' + this.board[i] + '</div>'; 
        }

        this.container_element.innerHTML = content;
    }

}