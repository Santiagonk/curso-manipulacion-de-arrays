const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element)
}
console.log('for ',newArray);
const rta = elements.concat(othersElements);
console.log('concat ', rta);
const rta2 = [...elements, ...othersElements];
const rta4 = [...elements, 'random'];
const rta5 = [...elements, ...'random'];
console.log('... ', rta2);
console.log('rta4 ', rta4);
console.log('rta5 ', rta5);
elements.push(othersElements);
console.log(elements);
elements.push(...othersElements);
console.log(elements);
