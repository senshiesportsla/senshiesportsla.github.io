function renderMatches(){

const MATCHESJSON = "./partidas.json"
fetch(MATCHESJSON)
        .then(data => data.json())
        .then(matches => {
const matchlist = matches.partidas
            matchlist.forEach(item => {
                document.getElementById("contenedordepartidas").innerHTML +=`
                <div id="partida">
                    <div id="div1">
                        <p>${item.dia}</p>
                    </div>
                    <div id="div2">
                        <p id="titulopartida">SENSHI ESPORTS VS ${item.rival}</p><p id="subtitulopartida"> <a id="vodA" target="_blank" href="${item.orgalink}">${item.orga}</a> | ${item.competencia} | ${item.VOD}</p>
                    </div>
                    <div id="div3">
                        <p id="${item.resultado}">${item.resultado}</p>
                    </div>
                </div>
            `
        })})

}renderMatches()


function renderTrophies(){

const TROPHYJSON = "./torneos.json"
fetch(TROPHYJSON)
        .then(data => data.json())
        .then(copas => {
const cuplist = copas.torneos
            cuplist.forEach(cup => {
                document.getElementById("contenedortorneos").innerHTML +=`
                <div>
                    <img src="${cup.imagen}" alt="trophy" id="torneo">
                    <p id="pietorneo">${cup.orga} | Más de esta organización <a href="${cup.orgalink}" target="_blank">aquí</a></p>
                </div>
                `
            })})

}renderTrophies()


function renderPlayers(){

    const ROSTERJSON = "./jugadores.json"
    fetch(ROSTERJSON)
            .then(data => data.json())
            .then(players => {
    const cuplist = players.jugadores
                cuplist.forEach(player => {
                    document.getElementById("jugadores").innerHTML +=`
                    <div id="${player.cat}" onmouseover="mouseOver(${player.cat})">
                        <a href="${player.linkredes}" style="text-decoration: none;" target="_blank">
                            <div id="cajanombre">
                                <div id="conjuntonombres">
                                    <p id="nombreplayer">${player.nombre}</p>
                                    <p id="infoplayer">${player.rol}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    `
                })})
                
}renderPlayers()


/*

{
    "dia":"",
    "rival":"",
    "orga":"",
    "orgalink":"",
    "competencia":"",
    "resultado":"",
    "VOD":""
}

*/