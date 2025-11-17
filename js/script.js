function convTableau(path) {
    let stringBrut = Object.values(path);
    console.log(stringBrut);
    let string = "";
    for (let i = 0; i < stringBrut.length; i++) {
        string += stringBrut[i];
    }
    console.log(string);
    return string;
}

let pathTitre = SAE['SAE1.01']['titre'];
let pathComp = SAE['SAE1.01']['compétences'];
let pathDesc = SAE['SAE1.01']['description'];

document.querySelector(".container-sae").innerHTML = "<h2>SAE1.01</h2><h3>Titre: " + convTableau(pathTitre) + "</h3><h3>Compétence: " + convTableau(pathComp) + "</h3><h3>Description: " + convTableau(pathDesc) + "</h3>";