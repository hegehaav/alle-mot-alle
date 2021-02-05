import kristoferImg from './assets/kristofer.jpg';
import heinImg from './assets/hein.jpg';
import linusImg from './assets/linus.jpg';
import andreImg from './assets/andre.jpg';

export const teams = [
    {
        name: 'Heinkunnskap',
        members: [
            { name: 'Kristofer Selbekk', img: kristoferImg },
            { name: 'Hein Haraldsen', img: heinImg },
        ],
    },
    {
        name: 'Ukjent',
        members: [
            { name: 'Spiller1' },
            { name: 'Spiller2' },
        ]
    },
    {
        name: 'Svenskene',
        members: [
            { name: 'Sjakk-Linus', img: linusImg },
            { name: 'Alle-mot-André', img: andreImg },
        ],
    },
];

export const matches = [
    {
        id: 1,
        teams: [teams[0], teams[1]],
        date: new Date("2021-02-15")
    }
]
