let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal dos quadrinhos do Pato Donald.',
}

console.log(`Bem-vinda, ${info.personagem}`)

info.recorrente = 'Sim';

console.log(info)

for (keys in info) {
    console.log(keys)
}

for (keys in info) {
    console.log(info[keys])
}

let info2 = {
    personagem: 'Tio Patinha',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

for (keys in info) {
    if (info[keys] == 'Sim' && info2[keys] == 'Sim') {
        console.log('Ambos recorrentes')
    } else {
        console.log(`${info[keys]} e ${info2[keys]}`)
    }
}
