const myForme = document.getElementById("my-form");
const myForms = document.getElementsByClassName("my-form");

myForme = document.querySelector("#my-form");
myForms = document.querySelectorAll(".my-form");


console.log(myForme.classList);

myForme.classList.add("pierre-luis-el-criator")
console.log(myForme.classList);

myForme.classList.remove("dgsegse")
console.log(myForme.classList);

myForme.classList.toggle("dgsegse")
console.log(myForme.classList);



// Creation d'un objet FormData
var formData = new FormData();
console.log(formData);
formData.append('key1', 'value1');
formData.append('key2', 'value2');
console.log(formData);

// Affichage des paires clefs/valeurs
for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
}
