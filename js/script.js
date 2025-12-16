for (let num in SAE) {
    let v_sae = SAE[num];
    let contenu = `<div class='container-sae' id='${num}'>
                        <h2>${num}</h2>
                        <h3>Titre: ${v_sae.titre}</h3>
                        <a class='plus-btn' href='sae.html?sae=${num}'>En savoir plus</a>
                    </div>
                  `;
    document.querySelector(".sae").innerHTML += contenu;
}