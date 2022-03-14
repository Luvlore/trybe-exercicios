const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => {
  return names.join('').toLowerCase().split('').reduce((acc, letter) => letter === 'a' ? acc += 1 : acc, 0)
}
