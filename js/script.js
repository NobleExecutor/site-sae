document.querySelectorAll('.container-sae').forEach(div => {
    console.log(div.id, SAE[div.id]);
    div.innerHTML += "<h2>" + div.id + "</h2>";
});