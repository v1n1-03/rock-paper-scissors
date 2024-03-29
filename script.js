//machine's choice
opcoes =["r", "p", "s"]
machine = opcoes[Math.floor(Math.random()*opcoes.length)]
stylea = document.querySelector("#a").style
styleb = document.querySelector("#b").style
stylec = document.querySelector("#c").style
//Card that appears after clicking on play
r = document.querySelector("#rock").style
p = document.querySelector("#paper").style
s = document.querySelector("#scissors").style

ro = document.querySelector("#rocko").style
po = document.querySelector("#papero").style
so = document.querySelector("#scissorso").style

//play button
play = document.querySelector("#play").style
again = document.querySelector("#again").style
//div for write who wins
texto = document.querySelector("#winner")

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

function playagain(){
    document.querySelector(".choose").style.display = "inline"
    document.querySelector(".result").style.display = "none"
    texto.innerHTML = ""
    again.display = "none"
    machine = opcoes[Math.floor(Math.random()*opcoes.length)]
    r.display = "inline"
    s.display = "inline"
    p.display = "inline"
    ro.display = "inline"
    po.display = "inline"
    so.display = "inline"
}

//play button
function battle(){
    //section choose is gone and section result appear
    document.querySelector(".choose").style.display = "none"
    document.querySelector(".result").style.display = "flex"
    
    //make the cards not selected dissapear
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

    //who wins

    if (player === machine){
        texto.innerHTML = "Tie!"
        again.display = "inline"
    }
    
    else{
        //rock
        if(player === "r" && machine === "p"){
            texto.innerHTML = "You lose!"
            again.display = "inline"
        }
    
        else if(player === "r" && machine === "s"){
            texto.innerHTML = "You win!"
            again.display = "inline"
        }

        //scissors
        if(player === "s" && machine === "r"){
            texto.innerHTML = "You lose!"
            again.display = "inline"
        }

        else if(player === "s" && machine === "p"){
            texto.innerHTML = "You win!"
            again.display = "inline"
        }

        //paper
        if(player === "p" && machine === "r"){
            again.display = "inline"
            texto.innerHTML = "You win!"
        }

        else if(player === "p" && machine === "s"){
            texto.innerHTML = "You lose!"
            again.display = "inline"
        }
    }
}   

