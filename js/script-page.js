function loop(path) {
    let result = "<h3>";
    for (let ac in path) {
        result += "<a class='ac-btn' href='#' target='_blank'>" + ac + " - " + path[ac] + "</a><br>";
    }
    return result += "</h3>";
}

document.querySelector("main").innerHTML = "<div class='container'><h1 align='center'>" + sae + " (Semestre " + SAE[sae].semestre + ")</h1><h2 align='center'>" + SAE[sae].titre + "</h2><p><span class='underline'>Description:</span> " + SAE[sae].description + "</p><p><span class='underline'>Compétence(s):</span> " + SAE[sae].compétences + "</p><p><span class='underline'>Apprentissages critiques couverts:</span> " + loop(SAE[sae].AC) + "</p><p><span class='underline'>Liste des ressources mobilisées:</span> " + loop(SAE[sae].ressources) + "</p><a class='return' href='index.html'>Retourner vers la page principal</a></div>";