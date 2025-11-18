document.querySelectorAll('.container-sae').forEach(div => {
    console.log(div.id, SAE[div.id]);
    div.innerHTML += "<h2>" + div.id + "</h2>";
    div.innerHTML += "<h3>Titre: " + SAE[div.id].titre + "</h3>";
    div.innerHTML += "<h3>Compétence(s): " + SAE[div.id].compétences + "</h3>";
    div.innerHTML += "<a class='plus-btn' href='pages/" + div.id + ".html'>En savoir plus</a>";
});