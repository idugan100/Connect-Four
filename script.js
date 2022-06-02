let turn="red";
let playColumn=0;
let board=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]
/*[column][row] 0,0 is the bottom right corner*/


function dropToken(){
    if(board[playColumn][5]!=0){
        console.log("column full");
        return false;   
    }
    else{
        
        for(let i=0;i<6;i++){
            if(board[playColumn][i]==0){
                board[playColumn][i]=turn;
            
                updateBoard();
                winCheck(turn);
                return true;
                  
            }
            
        }
        
    }
}
function reset(){
    for(let i=0;i<7;i++){
        for(let j=0;j<6;j++){
            board[i][j]=0;
        }
    }
    console.log("reset reached")
    updateBoard()
}

function winCheck(color){
    /* horizontal win check */
    for(let i=0;i<4;i++){
        for(let j=0;j<6;j++){
            if(board[i][j]==board[i+1][j] && board[i][j]==board[i+2][j] && board[i][j]==board[i+3][j] && board[i][j]==color){
                console.log("horizontal win")
            }
        }
    }
    /*vertical win check*/
    for(let i=0;i<7;i++){
        for(let j=0;j<3;j++){
            if(board[i][j]==board[i][j+1] && board[i][j]==board[i][j+2] && board[i][j]==board[i][j+3] && board[i][j] ==color){
                console.log("vertical win")
            }
        }
    }
    /* fupwards diagonal win check*/
    for(let i=0;i<4;i++){
        for(let j=0;j<3;j++){
            if(board[i][j]==board[i+1][j+1] && board[i][j]==board[i+2][j+2] && board[i][j]==board[i+3][j+3] && board[i][j] ==color){
                console.log("forward diagonal win")
            }
        }
    }
    /*downwards diagonal win check*/
    for(let i=0;i<4;i++){
        for(let j=5;j>2;j--){
            if(board[i][j]==board[i+1][j-1] && board[i][j]==board[i+2][j-2] && board[i][j]==board[i+3][j-3] && board[i][j] ==color){
                console.log("backwards diagonal win")
            }
        }
    }
}
const resetButton=document.querySelector("#reset")
resetButton.addEventListener("click",()=>reset())
const drops=document.querySelectorAll(".drop");
drops.forEach(drop => {
    drop.addEventListener("mouseover",()=>hoverOver(drop))
    drop.addEventListener("mouseout",()=>leaveHover(drop))
    drop.addEventListener("mousedown",()=>clickDrop(drop))
    
});
let boardStates = document.querySelectorAll(".location") /* in in DOM order*/

function updateBoard(){
    for(let i=0;i<7;i++){
        for(let j=0;j<6;j++){
            let domNumber= (5-j)*7+i;
            if (board[i][j]=="red"){
                boardStates[domNumber].setAttribute("style","background-color:red;");

            }
            if(board[i][j]=="yellow"){
                boardStates[domNumber].setAttribute("style","background-color:yellow;")

            }
            if(board[i][j]==0){
                boardStates[domNumber].setAttribute("style","background-color:white;")
            }
        }
    }
    /*iterate through board array
    if !=0 but =="red" || =="yellow" then convert i and j to the dom code to update the color (5-Row)*7+Col=dom*/

}

function hoverOver(token){
    if (turn=="yellow"){
        token.setAttribute("style","background-color:yellow;");

    }
    else if(turn=="red"){
        token.setAttribute("style","background-color:red;");

    }
    else{
        token.setAttribute("style","background-color:green;");
    }
}
function leaveHover(token){
        token.setAttribute("style","background-color:gray");
}
function clickDrop(token){
    playColumn=token.getAttribute("id");
    if(dropToken()==true){
        
        if(turn=="yellow"){
            turn="red";
            token.setAttribute("style","background-color:red");  
        }
        else{
            turn="yellow";
            token.setAttribute("style","background-color:yellow");  
        }
    }
  
}  


