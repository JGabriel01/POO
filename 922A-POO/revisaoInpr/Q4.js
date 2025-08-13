function encontrarPalavraMaisLonga(str) {
  let arr = str.split(" ");
  let palavraMaisLonga = ""
  for (let i in arr){
    if (arr[i].length > palavraMaisLonga.length) {
      palavraMaisLonga = arr[i]
    }
  }
  return palavraMaisLonga
}
console.log(encontrarPalavraMaisLonga("O conhecimento é verdadeiro"))