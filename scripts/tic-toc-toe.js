displayGrid()
game=[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
flag=true;
function clicked(index)
{

    if(flag && game[index]==undefined)
    {
        game[index]='X';
        flag=false;
        const ele=document.querySelector(`.js-${index}`);
        const moveEle=document.querySelector('.js-move');
        moveEle.innerHTML="O-Move";
        ele.innerHTML="X";

    }
    else if(game[index]==undefined){
        game[index]='O';
        flag=true
        const ele=document.querySelector(`.js-${index}`);
        const moveEle=document.querySelector('.js-move');
        moveEle.innerHTML="X-Move";
        ele.innerHTML="O";
    }
    checkWinner();
}
function checkWinner()
{
    if(game[0]!=undefined && game[0]===game[1] && game[0]===game[2])
    {
        document.querySelector(".js-win").innerText=`${game[0]} WIN`;
        gameOver();
        return;
    }
    if(game[3]!=undefined && game[3]===game[4] && game[5]===game[4])
    {
        document.querySelector(".js-win").innerText=`${game[4]} WIN`;
        gameOver();
        return;
    }
    if(game[6]!=undefined && game[6]==game[7] && game[7]==game[8])
    {
        document.querySelector(".js-win").innerText=`${game[8]} WIN`;
        gameOver();
        return;
    }
    if(game[0]!=undefined && game[0]==game[3] && game[3]==game[6])
    {
        document.querySelector(".js-win").innerText=`${game[6]} WIN`;
        gameOver();
        return;
    }
    if(game[1]!=undefined && game[1]==game[4] && game[4]==game[7])
    {
        document.querySelector(".js-win").innerText=`${game[7]} WIN`;
        gameOver();
        return;
    }
    if(game[2]!=undefined && game[2]==game[5] && game[5]==game[8])
    {
        document.querySelector(".js-win").innerText=`${game[8]} WIN`;
        gameOver();
        return;
    }
    if(game[0]!=undefined && game[0]==game[4] && game[4]==game[8])
    {
        document.querySelector(".js-win").innerText=`${game[8]} WIN`;
        gameOver();
        return;
    }
    if(game[2]!=undefined && game[2]==game[4] && game[4]==game[6])
    {
        document.querySelector(".js-win").innerText=`${game[6]} WIN`;
        gameOver();
        return;
    }
    for(let i=0;i<9;i++)
    {
        if(game[i]==undefined)
        {
            return;
        }

    }
    document.querySelector(".js-win").innerText=`DRAW`;
    gameOver();
}
function gameOver()
{
    const divElement=document.querySelector(".js-grid");
    divElement.innerHTML="<p>Game Over Please Reset the game</p>";
    divElement.classList.add("game-over");
    const moveEle=document.querySelector('.js-move');
    moveEle.innerHTML=" ";

}
function resetGame()
{
    displayGrid();
}
function displayGrid(){
    const divElement=document.querySelector(".js-grid");
    divElement.classList.remove("game-over");   
    const html=`<button onclick="clicked(0)" class="button-move js-0"></button>
        <button onclick="clicked(1)" class="button-move js-1"></button>
        <button onclick="clicked(2)" class="button-move js-2"></button>
        <button onclick="clicked(3)" class="button-move js-3"></button>
        <button onclick="clicked(4)" class="button-move js-4"></button>
        <button onclick="clicked(5)" class="button-move js-5"></button>
        <button onclick="clicked(6)" class="button-move js-6"></button>
        <button onclick="clicked(7)" class="button-move js-7"></button>
        <button onclick="clicked(8)" class="button-move js-8"></button>`
    document.querySelector(".js-grid").innerHTML=html;
    game=[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
    flag=true;
    document.querySelector(".js-win").innerText=`TIC-TAC-TOE`;


}
