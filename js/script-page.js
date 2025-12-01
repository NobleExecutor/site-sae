function loop(path) {
    let result = "<h3>";
    for (let ac in path) {
        result += "<a href='#' target='_blank'>" + ac + " - " + path[ac] + "</a><br>";
    }
    return result += "</h3>";
}

document.querySelector("main").innerHTML = "<div class='container'><h1 align='center'>" + sae + " (Semestre " + SAE[sae].semestre + ")</h1><h2 align='center'>" + SAE[sae].titre + "</h2><p>Description: " + SAE[sae].description + "</p><p>Compétence(s): " + SAE[sae].compétences + "</p><p>Apprentissages critiques couverts: " + loop(SAE[sae].AC) + "</p><p>Liste des ressources mobilisées: " + loop(SAE[sae].ressources) + "</p></div>";