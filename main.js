const verbs = {"begginnen":"begonnen", "bleiben":"ist geblieben", "brechen":"gebrochen", "bringen":"gebracht", "denken":"gedacht", "duerfen":"gedurft", "essen":"gegessen", "finden":"gefunden", "fliegen":"geflogen", "geben":"gegeben", "gehen":"ist gegangen", "haben":"gehabt", "heissen":"geheissen", "kommen":"ist gekommen", "konnen":"gekonnt", "lesen":"gelesen", "moegen":"gemacht", "muessen":"gemusst", "nehmen":"genommen", "rufen":"gerufen", "schlafen":"geschlafen", "schreiben":"geschreiben","sehen":"gesehen", "sein":"ist gewesen", "singen":"gesungen", "sollen":"gesollt","sprechen":"gesprochen","stehen":"gestanden","treffen":"getroffen", "trinken":"getrunken","tun":"getan","waschen":"gewaschen", "wissen":"gewusst","wollen":"gewollt"}
const keys = Object.keys(verbs)

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

let state = false
let count = 0
let setting_state = false
let mode = ""

countOut.innerHTML = "0/" + keys.length

function play() {
       
    if (state) {
        if ((txt.value.toLowerCase() == verbs[word]) && (count + 1 < keys.length)) {
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
        console.log(mode)
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