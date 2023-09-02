var idade
var contador = 0
var n
var m = 0

for (n = 1; n <= 10; n++) {
    idade = parseInt(prompt("Digite as idades:"))
   if(idade >= 18){
    contador++

    
   }
   else {
    m++
   }
}

alert(contador+" tem 18 anos ou mais. E "+m+" são menores de idade"  )
