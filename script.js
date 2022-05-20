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
            console.log("iteration "+i);
            if(board[playColumn][i]==0){
                board[playColumn][i]=turn;
                console.log( "putting token at "+i);
                
                return true;
                  
            }
            
        }
        
    }
}

const drops=document.querySelectorAll(".drop");
drops.forEach(drop => {
    drop.addEventListener("mouseover",()=>hoverOver(drop))
    drop.addEventListener("mouseout",()=>leaveHover(drop))
    drop.addEventListener("mousedown",()=>clickDrop(drop))
    
});
let boardStates = document.querySelectorAll(".location")
boardStates[8].setAttribute("style","background-color:green;")


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


