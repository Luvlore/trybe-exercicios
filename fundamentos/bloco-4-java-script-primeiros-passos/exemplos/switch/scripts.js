var candidato = 'lista';

switch (candidato) {
    case 'aprovado':
        console.log('Candidato aprovado!');
        break
    
    case 'lista':
        console.log('Candidato na lista de espera.')
        break
    
    case 'reprovado':
        console.log('Candidato reprovado!')
        break
    
    default:
        console.log('Estado do candidato não encontrado.')
}