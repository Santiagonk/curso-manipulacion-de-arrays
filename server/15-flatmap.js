const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const rta = users.map(user => user.attributes).flat();
console.log('map - flat2', rta);
const  rta2 = users.flatMap(user => user.attributes);
console.log('mapflat', rta2);

const calendars = {
    primaryCalendar: [
        {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
        },
        {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
        },
        {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
        },
    ],
};

const rta3 = Object.keys(calendars);
console.log(rta3);
const rta4 = Object.values(calendars);
console.log(rta4);
const rta5 = rta4.flatMap(item => {
    console.log('item', item);
    return item.map(date=>date.startDate);
});
console.log(rta5);

function solution(lines) {
    // Tu código aquí 👈     
    return lines.flatMap(item => {
        return item.split(' ').length
        }).reduce((sum, element) => sum + element, 0)
}; 

console.log(solution([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
])
)