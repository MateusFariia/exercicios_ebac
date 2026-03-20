function buscaIndice(ar) {
  if (!ar.length) return 'Lista em Branco';

  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 1; i < ar.length; i++) {
    if (ar[i] > ar[indiceMaior]) indiceMaior = i;
    if (ar[i] < ar[indiceMenor]) indiceMenor = i;
  }

  return { indiceMaior, indiceMenor };
}

module.exports = {buscaIndice}