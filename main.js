const options = {"verbi":{"begginnen":"begonnen", "bleiben":"ist geblieben", "brechen":"gebrochen", "bringen":"gebracht", "denken":"gedacht", "duerfen":"gedurft", "essen":"gegessen", "finden":"gefunden", "fliegen":"geflogen", "geben":"gegeben", "gehen":"ist gegangen", "haben":"gehabt", "heissen":"geheissen", "kommen":"ist gekommen", "konnen":"gekonnt", "lesen":"gelesen", "moegen":"gemocht", "muessen":"gemusst", "nehmen":"genommen", "rufen":"gerufen", "schlafen":"geschlafen", "schreiben":"geschreiben","sehen":"gesehen", "sein":"ist gewesen", "singen":"gesungen", "sollen":"gesollt","sprechen":"gesprochen","stehen":"gestanden","treffen":"getroffen", "trinken":"getrunken","tun":"getan","waschen":"gewaschen", "wissen":"gewusst","wollen":"gewollt"}, "capitali delle Americhe":{"Antigua e Barbuda":"Saint John's","Argentina":"Buenos Aires","Bahama":"Nassau","Barbados":"Bredgetown","Belize":"Belmopan","Boliwa":"Sacre e La Paz","Brasile":"Brasilia","Canada":"Ottava","Cile":"Santiago e Valparaiso","Colombia":"Bogota","Costa Rica":"San José","Cuba":"L'Avana","Dominica":"Roseau","Ecuador":"Quito","EI Salvador":"San Salvador","Giamaica":"Kingston","Grenada":"Saint Georgen","Guatemala":"Guatemala","Guyana":"Georgetown","Haiti":"Port-au-Prince","Honduras":"Tegucigalpa","Messico":"Città del Messico","Nicaragua":"Managua","Panama":"Panama","Paraguay":"Asunción","Perù":"Lima","Rep.  Dominicana":"Santo  Dormingo","Saint  Kitts  e  Nevis":"Basseterre","Saint  Lucia":"Castries","Saint  Vincent  e  Grenadine":"Kingstown","Stati  Uniti":"Washington  D.C.","Suriname":"Paramaribo","Trinidad  e  Tobago":"Port  of  Spain","Uruguay":"Montevideo","Venezuela":"Caracas"}}
let values = null
let keys = null
//defining handy HTML DOM
let game = document.getElementById("game")
let out = document.getElementById("text")
let txt = document.getElementById("input")
txt.value = ""
let button = document.getElementById("btn")
let widget = document.getElementById("widget")
let countOut = document.getElementById("count")

let imp = document.getElementById("imp")
let imp_btn = document.getElementById("imp_btn")
let mode_rad = document.getElementsByName("mode")
let options_choice = document.getElementById("options");

let state = false
let count = 0
let setting_state = false
let mode = ""

function play() {
       
    if (state) {
        if ((txt.value.toLowerCase() == values[word]) && (count + 1 < keys.length)) {
            count += 1
            word = keys[count]
            out.innerHTML = word
            widget.style.borderColor = "green";
            setTimeout(function() {
                widget.style.borderColor = "rgb(29, 29, 29)";
            }, (1 * 1000));
            countOut.innerHTML = count + "/" + keys.length
        } else if (txt.value.toLowerCase() == ""){
            return
        } else if (count + 1 < keys.length){
            widget.style.borderColor = "red";
            setTimeout(function() {
                widget.style.borderColor = "rgb(29, 29, 29)";
            }, (1 * 1000));
            if (mode == "strict") {
                count = 0
                countOut.innerHTML = count + "/" + keys.length
            }
            word = keys[count]
            out.innerHTML = word
            
        } else {
            stop()
        }
        txt.value = "" 
    } else {
        state = true
        mode_rad.forEach(function (element) {
            if (element.checked) {
                mode = element.value
            }
        })
        values = options[options_choice.value]
        keys = Object.keys(values)
        countOut.innerHTML = "0/" + keys.length
        btn.innerHTML = "conferma"
        word = keys[count]
        out.innerHTML = word
        }
    
    
};
function stop() {
    state = false
    btn.innerHTML = "start!"
    count = 0
    countOut.innerHTML = "0/" + keys.length
    out.innerHTML = ""
}
function settings() {
    if (setting_state) {
        setting_state = false
        game.style.visibility = "visible"       
        imp.style.visibility = "hidden"
    } else {
        setting_state = true
        game.style.visibility = "hidden"       
        imp.style.visibility = "visible"

    }
}
