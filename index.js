const ACCENTS = ['á', 'é', 'í', 'ó', 'ú'];

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  const string = document.querySelector('input').value;
  const val = string
    .split(' ')
    .map(e => ({ arr: e.split(''), accent: false }))
    .map(obj => {
      return {
        arr: obj.arr.map((e, i, arr) => {
          if (ACCENTS.includes(e)) obj.accent = true;
          return e;
        }),
        accent: obj.accent,
      };
    })
    .map(e => ({ word: e.arr.join(''), accent: e.accent }));

  document.querySelector('p').innerHTML = '';
  val.forEach(e => {
    if (e.accent) e.word = `<b>${e.word}</b>`;
    document.querySelector('p').innerHTML += `${e.word} `;
  });
});
