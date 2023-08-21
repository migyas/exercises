const frase = prompt("Digite uma frase:");
const fraseSemEspacos = frase.trim();
const quantidadeCaracteres = fraseSemEspacos.length;

console.log(
  `A frase "${frase}" possui ${quantidadeCaracteres} caracteres (excluindo espaços em branco).`
);
