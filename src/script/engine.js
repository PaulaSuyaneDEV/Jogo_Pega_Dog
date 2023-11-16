function IniciarGame(){
    const estado = {
        view:{
            squares: document.querySelectorAll(".square"),
            enemy: document.querySelector(".enemy"),
            timeGame: document.querySelector("#time-game"),
            scoreGame: document.querySelector("#score-game"),
    
        },
        values:{
            gameVelocy: 800,
            hitPosition: 0,
            result: 0,
            currentTime: 60,
            
            
        },
        actions: {
            timeId: setInterval(randomSquare, 1000),
            contadorId: setInterval(Contador, 1000), 
        },
    };
    
    function Contador(){
        estado.values.currentTime--
        estado.view.timeGame.textContent = estado.values.currentTime
        if(estado.values.currentTime <= 0){
            clearInterval(estado.actions.contadorId)
            clearInterval(estado.actions.timeId)
    
            alert("Game Over! Resultado : " + estado.values.result + " cliques ")
        }
    }
    function playMusic(NomeAudio){
        let audio = new Audio(`./src/midia/${NomeAudio}.m4a`)
        audio.volume= 0.2
        audio.play()
    }
    function randomSquare(){
        estado.view.squares.forEach((square) => {
            square.classList.remove("enemy")
        })
        let randomNumbers = Math.floor(Math.random()* 9) 
        let randomSquare = estado.view.squares[randomNumbers]
        randomSquare.classList.add("enemy")
        estado.values.hitPosition = randomSquare.id
    
    }
    
    function addListenerHitBoxs(){
        estado.view.squares.forEach((square) => {
            square.addEventListener("mousedown", () => {
                if(square.id === estado.values.hitPosition){
                estado.values.result++
                estado.view.scoreGame.textContent = estado.values.result
                estado.values.hitPosition = null
                playMusic("hit")
                }
            })
        })
    }
    
    function main(){
        addListenerHitBoxs()
        
    }
    main();
}

function ContadorJogadas(){
    let contadorJogadas = document.getElementById('contadorJogadas')
    var numeroJogadas = parseInt(contadorJogadas.innerText)
    numeroJogadas++
    contadorJogadas.innerText = numeroJogadas
}
var countJogadas = document.getElementById("countJogadas")
countJogadas.addEventListener("click", ContadorJogadas)
