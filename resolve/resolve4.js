// 1. Criando a variável
let nomeCompleto = "joão da silva";

// 2. Formatando o nome
let nomeFormatado = nomeCompleto
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(nomeFormatado); // Saída: "João Da Silva"

// 3. Extraindo o sobrenome
let partesNome = nomeCompleto.split(" ");
let sobrenome = partesNome[partesNome.length - 1];
console.log(sobrenome); // Saída: "silva"
