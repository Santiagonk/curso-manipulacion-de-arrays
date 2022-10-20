const elements = ['Fire', 'Air', 'Water'];

const separator = '--';
let rtaFinal = '';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
console.log('for ', rtaFinal);
const rta2 = elements.join('--');
console.log('join ', rta2);

const title = 'Curso de manipulación de arrays';
const rta3 = title.split(' ');
console.log("split ", rta3);
const titleFinal = title.split(' ').join('-').toLowerCase()
console.log(titleFinal);