function loop(path) {
    let result = "<h3>";
    for (let ac in path) {
        result += "<a href='#' target='_blank'>" + ac + ": " + path[ac] + "</a><br>";
    }
    return result += "</h3>";
}

document.querySelector("main").innerHTML = "<div class='container'><h1 align='center'>" + sae + "</h1><h3 align='center'>Semestre " + SAE[sae].semestre + "</h3><h2>Titre: " + SAE[sae].titre + "</h2><h2>Compétence(s): " + SAE[sae].compétences + "</h2><h2>Description: " + SAE[sae].description + "</h2><h2>Apprentissage critique: " + loop(SAE[sae].AC) + "</h2><h2>Ressources: " + loop(SAE[sae].ressources) + "</div>";