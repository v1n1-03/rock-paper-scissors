//scolha aleatória da máquina
opcoes =["r", "p", "s"]
machine = opcoes[Math.floor(Math.random()*opcoes.length)]
//estilo para selecioner fundo dos cards das escolhas
stylea = document.querySelector("#a").style
styleb = document.querySelector("#b").style
stylec = document.querySelector("#c").style
//cards que aparecem depois de clicar em play
r = document.querySelector("#rock").style
p = document.querySelector("#paper").style
s = document.querySelector("#scissors").style

ro = document.querySelector("#rocko").style
po = document.querySelector("#papero").style
so = document.querySelector("#scissorso").style

//botão de play
play = document.querySelector("#play").style
//div vazia para escrever o vencedor
texto = document.querySelector("#winner")

//mudar a cor dos cards ao clicar, selecionar jogada ao clicar,fazer o botão de jogar aparecer
function rock(){
    player = "r"
    stylea.backgroundColor = "yellow"
    styleb.backgroundColor = "blue"
    stylec.backgroundColor = "blue"
    play.display = "inline"
}

function paper(){
    player = "p"
    styleb.backgroundColor = "yellow"
    stylea.backgroundColor = "blue"
    stylec.backgroundColor = "blue"
    play.display = "inline"
}

function scissors(){
    player = "s"
    stylec.backgroundColor = "yellow"
    stylea.backgroundColor = "blue"
    styleb.backgroundColor = "blue"
    play.display = "inline"
}

//ao clicar no botão de jogar
function battle(){
    //fazer a section choose sumir e a result aparecer
    document.querySelector(".choose").style.display = "none"
    document.querySelector(".result").style.display = "flex"
    
    //fazer sumir os cards que não são da jogada
    if (player === "r"){
        p.display = "none"
        s.display = "none"
    }
    
    else if (player === "p"){
        r.display = "none"
        s.display = "none"
    }
    
    else{
        r.display = "none"
        p.display = "none"
    }


    if (machine === "r"){
        po.display = "none"
        so.display = "none"
    }
    
    else if (machine === "p"){
        ro.display = "none"
        so.display = "none"
    }
    
    else{
        ro.display = "none"
        po.display = "none"
    }

    //decidir quem venceu

    if (player === machine){
        texto.innerHTML = "Empate!"
    }
    
    else{
        //pedra
        if(player === "r" && machine === "p"){
            texto.innerHTML = "Você perdeu!"
        }
    
        else if(player === "r" && machine === "s"){
            texto.innerHTML = "Você venceu!"
        }

        //tesoura
        if(player === "s" && machine === "r"){
            texto.innerHTML = "Você perdeu!"
        }

        else if(player === "s" && machine === "p"){
            texto.innerHTML = "Você venceu!"
        }

        //papel
        if(player === "p" && machine === "r"){
            texto.innerHTML = "Você venceu!"
        }

        else if(player === "p" && machine === "s"){
            texto.innerHTML = "Você perdeu!"
        }
    }
}   
