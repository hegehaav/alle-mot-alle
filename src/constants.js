import andreImg from './assets/andre.jpg';
import heinImg from './assets/hein.jpg';
import jobiImg from './assets/jobi.jpg';
import unniImg from './assets/unni.jpg'
import kristoferImg from './assets/kristofer.jpg';
import linusImg from './assets/linus.jpg';

export const teams = [
    {
        name: 'Heinkunnskap',
        members: [
            { name: 'Kristofer Selbekk', img: kristoferImg },
            { name: 'Hein Haraldsen', img: heinImg },
        ],
    },
    {
        name: 'Jonni',
        members: [
            { name: 'Unni Nyhamar Hinkel', img: unniImg },
            { name: 'Unni Nyhamar Hinkel', img: jobiImg },
        ]
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
