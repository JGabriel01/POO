let numInicial = -6
let numfinal = -5
let resultado = 0

if (numfinal < numInicial) {
if (numfinal < 1 && numfinal*-1 > numInicial*-1) {
  for (let i = numfinal*-1; i > numInicial; i--){
  if (resultado == 1) {
  break
  } else {
  resultado = i*i - 4*i + 5
  console.log(resultado)
  }
}
} else {
if (numfinal < 1 && numfinal*-1 < numInicial) {
  for (let i = numfinal; i < numInicial; i++){
  if (resultado == 1) {
  break
  } else {
  resultado = i*i - 4*i + 5
  console.log(resultado)
  }
}
}
else {
for (let i = numfinal; i <= numInicial; i++){
  if (resultado == 1) {
    break
 }
  else {
  resultado = i*i - 4*i + 5
  console.log(resultado)
  }
}
}
}
}
else {
  if (numInicial < 1 && numInicial*-1 < numfinal) {
  for (let i = numInicial; i < numfinal; i++){
  if (resultado == 1) {
  break
  } else {
  resultado = i*i - 4*i + 5
  console.log(resultado)
  }
}
}
else {
  if (numInicial < 1 && numInicial*-1 > numfinal*-1) {
    for (let i = numInicial* -1; numfinal < i; i--) {
      if (resultado == 1) {
        break
      } else { 
        resultado = i*i - 4*i + 5
        console.log(resultado)
    }
  }
  } else {
  for (let i = numInicial; i <= numfinal; i++){
  if (resultado == 1) {
  break
  } else {
  resultado = i*i - 4*i + 5
  console.log(resultado)
  }
  }
  }
}
}