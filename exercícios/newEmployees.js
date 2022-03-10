const info = (nomeCompleto) => ({nomeCompleto: nomeCompleto, email: `${nomeCompleto.replace(/ /g, '_').toLowerCase()}@trybe.com`});

const newEmployess = () => {
  const employees = {
    id1: info('Pedro Guerra'), 
    id2: info('Luiza Drumond'), 
    id3: info('Carla Paiva'), 
  }
  return employees;
};
