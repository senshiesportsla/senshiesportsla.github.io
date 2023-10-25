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
                        <p id="titulopartida">SENSHI ESPORTS VS ${item.rival}</p><p id="subtitulopartida"> <a id="vodA" target="_blank" href="${item.orgalink}">${item.orga}</a> | ${item.competencia} | <a id="vodA" target="_blank" href="${item.VOD}">Mira la partida aquí</a></p>
                    </div>
                    <div id="div3">
                        <p id="${item.resultado}">${item.resultado}</p>
                    </div>
                </div>
            `
        })})
    }
renderMatches()

function renderTrophies(){

const TROPHYJSON = "./torneos.json"
fetch(TROPHYJSON)
        .then(data => data.json())
        .then(copas => {
const cuplist = copas.torneos
            cuplist.forEach(cup => {
                document.getElementById("contenedortorneos").innerHTML +=`
                <div>
                    <img src="${cup.imagen}" alt="" id="torneo">
                    <p id="pietorneo">${cup.orga} | Más de esta organización <a href="${cup.orgalink}" target="_blank">aquí</a></p>
                </div>
                `
            })})
        }
renderTrophies()


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