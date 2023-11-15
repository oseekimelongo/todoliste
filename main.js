
let tableau = []


let input = document.querySelector("#input-box");
console.log(input);
let addBtn = document.querySelector(".box1");
addBtn.addEventListener('click',()=>{
    ajouterTache()
    /*console.log(input)*/

})
let tasks = document.querySelector(".tasks");

function ajouterTache (){
    const tache = {
        nomtache : input.value,
        statut : false
    }
    input.value=''
    console.log(tache);
    tableau.push(tache);
    console.log(tableau);

}

function apparait (){

    let itm = document.querySelector( ".itm");

}

 