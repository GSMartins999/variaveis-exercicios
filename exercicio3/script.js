let nome = prompt("Digite seu nome completo: ")
let idade = (prompt("dd/mm/aa"))
let endereco = prompt("Digite seu endereço: ")
let cpf = Number(prompt("Digite seu cpf: "))
let escolaridade = prompt("Digite sua escolaridade: ")
let cnh = prompt("Você possui cnh ?")
let filhes = Number(prompt("Quantos filhes você possui ? "))
let cargo = prompt("Qual o seu cargo atual ? ")
let salario = Number(prompt("Qual seu salário atual ? "))
let comissao = confirm("Se você possui comissão aperte em sim. Senão aperte em cancel")
let anoadmissao = Number(prompt("Qual o ano da sua admissão: "))

console.log("Seu nome é :",nome,"Você tem:",idade,"Seu endereço é : ", endereco ,"Seu cpf é :" ,cpf,"Sua escolaridade é :",escolaridade,"Você",cnh, "Cnh","Você possui:",filhes,"filhes","Seu cargo é",cargo,"Seu salário é: ",salario, comissao,"O ano da sua Admissão é:",anoadmissao)

console.log(typeof nome, typeof idade, typeof endereco, typeof cpf, typeof escolaridade, typeof cnh, typeof filhes, typeof cargo, typeof salario, typeof comissao, typeof anoadmissao)



