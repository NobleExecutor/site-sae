let v_sae = SAE[sae];
let v_ac = SAE[sae].AC;
let ac_contenu = "<br>";
let v_res = SAE[sae].ressources;
let res_contenu = "<br>";

for (let ac in v_ac) {
    ac_contenu += "<a class='ac-btn' href='#' target='_blank'>" + ac + " - " + v_ac[ac] + "</a><br>";
}


for (let res in v_res) {
    res_contenu += res + " - " + v_res[res] + "<br>";
}


let contenu = `<div class='container'>
                    <h1 align='center'>${sae} (Semestre ${v_sae.semestre})</h1>
                    <h2 align='center'>${v_sae.titre}</h2>
                    <p><span class='underline'>Description:</span> ${v_sae.description}</p>
                    <p><span class='underline'>Compétence(s):</span> ${v_sae.compétences}</p>
                    <p><span class='underline'>Apprentissages critiques couverts:</span> ${ac_contenu}</p>
                    <p><span class='underline'>Liste des ressources mobilisées:</span> ${res_contenu}</p>
                    <a class="return" href="index.html">Retourner vers la page principal</a>
               </div>`;

document.querySelector("main").innerHTML = contenu;