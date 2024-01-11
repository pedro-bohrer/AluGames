

function alterarStatus(n) {
    let idName = n == 1 ? "game-1" : n == 2 ? "game-2" : "game-3"; 
    let element = document.getElementById(idName);
    let statusTxt = element.querySelector(".dashboard__item__button").innerHTML == "Alugar" ? "Devolver" : "Alugar";
    
    element.querySelector(".dashboard__item__button").innerHTML = statusTxt;
    element.querySelector(".dashboard__item__button").classList.toggle("dashboard__item__button--return")
    element.querySelector(".dashboard__item__img").classList.toggle("dashboard__item__img--rented")
}
