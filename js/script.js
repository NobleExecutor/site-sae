for (let num in SAE) {
    console.log(num);
    document.querySelector(".sae").innerHTML += "<div class='container-sae' id='" + num + "'><h2>" + num + "</h2><h3>Titre: " + SAE[num].titre + "</h3><a class='plus-btn' href='sae.html?sae=" + num + "'>En savoir plus</a></div>";
}