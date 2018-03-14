var board = [5,3,8,9,8,6,767,678,99,354534,555,777];
//in order to display relative placing the player position and current leaderboard is needed

var showPlacing = (place, lb) => {
      var renderList = [];
      var firstPlace = 0;
      var secondPlace = 1;
      var lastPlace = lb.length - 1;
      var bottom2 = lb.length - 2;
      
      switch(place){
          case firstPlace:
            console.log("1st place", place, board[place]);
            renderList.push(board[0],
                board[1],
                board[2],
                board[3],
                board[4]
            )
            break;
            
          case secondPlace:
            console.log("2nd place", place, board[place]);
            renderList.push(board[place - 1],
                board[place],
                board[place + 1],
                board[place + 2],
                board[place + 3]
            )
            break;
            
          case bottom2:
              console.log("2nd to last place", place, board[place]);
              renderList.push(board[place - 3],
                board[place - 2],
                board[place - 1],
                board[place],
                board[place + 1]
              )
              break;
              
          case lastPlace:
              console.log("last place", place, board[place]);
              renderList.push( board[place - 4],
                board[place - 3],
                board[place - 2],
                board[place - 1],
                board[place]
              )
              break;
          
          default:
            console.log("mid placing", place, board[place]);
            renderList.push(board[place - 2],
                board[place -1 ],
                board[place],
                board[place + 1],
                board[place + 2]
            );
            break;
      }
      
      return renderList;
}

var lbPlace = showPlacing(4, board);
lbPlace.forEach((p, ind) => {
    console.log("Place ",ind,"--->",p)
});
