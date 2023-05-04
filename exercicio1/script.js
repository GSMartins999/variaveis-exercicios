// const nome = "Giovanni"

// const idade = "18" 

// console.log(typeof nome,typeof idade)

// Foi impresso o tipo string por ser uma const entre aspas duplas, se deixar sem as aspas duplas ele ficara como tipo number.


let nome = prompt("Digite seu nome")

let idade = Number(prompt("Digite sua idade"))

console.log(typeof nome,typeof idade)

// Os valores modificaram para string e number, isso ocorreu pedimos para o usuário entrar com um tipo number na idade. Já o primeiro se manteve uma string por ser letras.


console.log("Olá", nome,  "você tem", idade, "anos")

