export function mega(quantidade = 6, numeros = []) {
    let qtd = +quantidade;

  if (qtd < 6 && qtd > 60) {
    throw "Quantidade inválida";
  }

  if (numeros.length === qtd) {
    return numeros.sort((n1, n2) => n1 - n2);
  }

  // criar numeros aleatorios
  const numeroAleatorio = parseInt(Math.random() * 60) + 1;
  if (!numeros.includes(numeroAleatorio)) {
    return mega(qtd, [...numeros, numeroAleatorio]);
  } else {
    return mega(qtd, numeros);
  }
}
