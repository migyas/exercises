const frase = prompt("Digite uma frase:");
const palavras = frase.split(" ");

const fraseCapitalizada = palavras.map((palavra) => {
  const primeiraLetra = palavra.charAt(0).toUpperCase();
  const restantePalavra = palavra.slice(1).toLowerCase();
  return primeiraLetra + restantePalavra;
});

const novaFrase = fraseCapitalizada.join(" ");
console.log(`Frase capitalizada: ${novaFrase}`);
