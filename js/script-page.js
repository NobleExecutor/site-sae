function loop(path) {
    let result = "<br><h3>";
    for (let ac in path) {
        result += ac + ": " + path[ac] + "<br>";
    }
    return result += "</h3>";
}

document.querySelector("main").innerHTML = "<h1>" + sae + "</h1><h3>Semestre " + SAE[sae].semestre + "</h3><h2>Titre: " + SAE[sae].titre + "</h2><h2>Compétence(s): " + SAE[sae].compétences + "</h2><h2>Description: " + SAE[sae].description + "</h2><h2>Apprentissage critique: " + loop(SAE[sae].AC) + "</h2><h2>Ressources: " + loop(SAE[sae].ressources);