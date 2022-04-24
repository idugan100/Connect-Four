let turn="red";
let playColumn=0;
let board =[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]
/*[column][row] 0,0 is the bottom right corner*/


function dropToken(){
    if(board[playColumn][5]!=0){
        return null;   
    }
    else{
        for(let i=0;i<6;i++){
            if(board[playColumn][i]==0){
                board[playColumn][i]=turn;
                break;  
            }
            console.log(i);
        }
        return null;
    }
}

const drops=document.querySelectorAll(".drop");
drops.forEach(drop => {
    drop.addEventListener("mouseover",()=>hoverOver(drop))
    drop.addEventListener("mouseout",()=>leaveHover(drop))
    drop.addEventListener("mousedown",()=>clickDrop(drop))
    
});


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
    dropToken();
    if(turn=="yellow"){
        turn="red";
        token.setAttribute("style","background-color:red");  
    }
    else{
        turn="yellow";
        token.setAttribute("style","background-color:yellow");  
    }
  
}    


