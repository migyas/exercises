// 1. Criando a variável
let email = "usuario@example.com";

// 2. Verificando o símbolo "@"
let temArroba = email.includes("@");
console.log(temArroba); // Saída: true ou false

// 3. Verificando o domínio
let partesEmail = email.split("@");
if (
  partesEmail.length === 2 &&
  partesEmail[1].includes(".") &&
  partesEmail[1].length > 1
) {
  console.log("Domínio válido");
} else {
  console.log("Domínio inválido");
}
