let options = ["PEDRA", "PAPEL", "TESOURA"];

//função escolha random do pc 
function computerPlay(){
    return([Math.floor(Math.random() * 3)])
}
function userPlay(){
    let input = prompt("Escolha Pedra, Papel ou Tesoura"); //escolha do usuario
    return(input.toUpperCase()); //passa para maiuscula
}

alert("Vamos jogar joquempo???");
let scoreUser = 0;
let scorePc = 0;
for (let i = 1; i <= 5; i++)
{
    let pc = computerPlay(); // chama função computerplay
    let user = userPlay(); // chama a função userplay
    console.log("O Usuario escolheu", user); //conferindo escolha user
    console.log("O pc escolheu",options[pc]); //conferindo escolha pc
    let find = options.indexOf(user);
 
    //função de logica do jogo
    function result(){
        console.log("Partida: ",i);

        if (find == pc){
            return("Deu empate")
        }
        else if (find > pc && find != 0 && pc != 2 && find != 2 && pc != 0 ||
            find == 0 && pc  == 2 || find == 1 && pc == 0 || find == 2 && pc == 1){
            scoreUser++;
            return("User ganhou");
        }
        else{
            scorePc++;
            return("PC Ganhou");
        }
    }

    console.log(result());
    console.log("Score user é: ", scoreUser);
    console.log("Score pc é: ", scorePc);
}