function buscaIndice(ar) {
  if (!ar.length) return 'Array vazia';

  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 1; i < ar.length; i++) {
    if (ar[i] > ar[indiceMaior]) indiceMaior = i;
    if (ar[i] < ar[indiceMenor]) indiceMenor = i;
  }

  return { indiceMaior, indiceMenor };
}

const lista = [9, 78, 45, 2, 64, 90, 93, 58, 18, 27];
const { indiceMaior, indiceMenor } = buscaIndice(lista);

console.log(
`Maior índice: ${indiceMaior}, referente ao número ${lista[indiceMaior]}
Menor índice: ${indiceMenor}, referente ao número ${lista[indiceMenor]}`
);