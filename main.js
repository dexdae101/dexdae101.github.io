let verbs = {"begginnen":"begonnen", "bleiben":"ist geblieben", "brechen":"gebrochen", "bringen":"gebracht", "denken":"gedacht", "duerfen":"gedurft", "essen":"gegessen", "finden":"gefunden", "fliegen":"geflogen", "geben":"gegeben", "gehen":"ist gegangen", "haben":"gehabt", "heissen":"istgeheissen", "kommen":"ist gekommen", "konnen":"gekonnt", "lesen":"gelesen", "moegen":"gemacht", "muessen":"gemusst", "nehmen":"genommen", "rufen":"gerufen", "schlafen":"geschlafen", "schreiben":"geschreiben","sehen":"gesehen", "sein":"ist gewesen", "singen":"gesungen", "sollen":"gesollt","sprechen":"gesprochen","stehen":"gestanden","treffen":"getroffen", "trinken":"getrunken","tun":"getan","waschen":"gewaschen", "wissen":"gewusst","wollen":"gewollt"}

//defining handy HTML DOM
let out = document.getElementById("text")
let txt = document.getElementById("input")
txt.value = ""
let button = document.getElementById("btn")
let widget = document.getElementById("widget")
let countOut = document.getElementById("count")

let keys = Object.keys(verbs)

let state = 0
let count = 0


function getRandom () {
       
    if (state) {
        if (txt.value.toLowerCase() == verbs[word]) {
            count += 1
            word = keys[count]
            out.innerHTML = word
            widget.style.borderColor = "green";
            setTimeout(function() {
                widget.style.borderColor = "rgb(29, 29, 29)";
            }, (1 * 1000));
            countOut.innerHTML = count
        } else if (txt.value.toLowerCase() == ""){
            return
        } else {
            widget.style.borderColor = "red";
            setTimeout(function() {
                widget.style.borderColor = "rgb(29, 29, 29)";
            }, (1 * 1000));
            count = 0
            word = keys[count]
            out.innerHTML = word
            countOut.innerHTML = count
        }
        txt.value = "" 
    } else {
        state = 1
        btn.innerHTML = "conferma"
        word = keys[count]
        out.innerHTML = word
    }
    
    
};
