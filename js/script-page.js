let v_sae = SAE[sae];
let v_ac = SAE[sae].AC;
let ac_contenu = "";
let v_res = SAE[sae].ressources;
let res_contenu = "";

for (let ac in v_ac) {
    ac_contenu += ac + " - " + v_ac[ac] + "<br>";
}


for (let res in v_res) {
    res_contenu += res + " - " + v_res[res] + "<br>";
}


let contenu = `<div class='container'>
                    <h1 align='center'>${sae} (Semestre ${v_sae.semestre})</h1>
                    <h2 align='center'${v_sae.titre}</h2>
                    <p>Description: ${v_sae.description}</p>
                    <p>Compétence(s): ${v_sae.compétences}</p>
                    <p>Apprentissages critiques couverts: ${ac_contenu}</p>
                    <p>Liste des ressources mobilisées: ${res_contenu}</p>
               </div>`;

document.querySelector("main").innerHTML = contenu;