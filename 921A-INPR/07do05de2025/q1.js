let ol = document.getElementById("lista") //funciona, o comando getElementById() é usado para pegar elementos no html com um id específico e usar no javascript
let ing = [
    {nome: "manteiga", quantidade: 3},
     {nome: "ovo", quantidade: 2 },
      {nome: "leite", quantidade: 4
    }
]
let ingredientes = "";
ing.forEach(itens => {
    ingredientes += `<li> ${itens.quantidade}:${itens.nome}</li>`
    ol.innerHTML = ingredientes; 
})
//innerHTML é o espaço entre as tags, esse comando permite adicionar elementos do javascript no html