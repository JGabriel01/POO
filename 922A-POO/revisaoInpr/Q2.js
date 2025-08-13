let n = 3
console.log(n)

for (let i = n; i > 1; i--) {
if (n == 1) {
  break
} else {
if (n % 2 == 0) {
  n = n / 2 
  console.log(n)
} else {
  n = n * 3 + 1 
  console.log(n)
} 
}
}