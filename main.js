const TicTacToeTable = document.getElementById("tic-tac-toe-table");

TicTacToeTable.addEventListener("click", (e)=>{
    console.log(`user clicked!`);
    const maru = document.createTextNode("○");
    e.target.appendChild(maru);
});