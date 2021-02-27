import heinImg from '../assets/hein.jpg';
import jobiImg from '../assets/jobi.jpg';
import unniImg from '../assets/unni.jpg';
import kristoferImg from '../assets/kristofer.jpg';
import kristineImg from '../assets/kristine.jpg';
import hanskristianImg from '../assets/hanskristian.jpg';
import asbjørnImg from '../assets/asbjørn.jpg';
import erlendImg from '../assets/erlend.jpg';

export const teams = [
    {
        id: 1,
        name: 'Heinkunnskap',
        members: [
            { name: 'Kristofer Selbekk', img: kristoferImg },
            { name: 'Hein Haraldsen', img: heinImg },
        ],
    },
    {
        id: 2,
        name: 'Jonni',
        members: [
            { name: 'Unni Nyhamar Hinkel', img: unniImg },
            { name: 'Jørn Ola Birkeland', img: jobiImg },
        ],
    },
    {
        id: 3,
        name: 'Hans Kristine',
        members: [
            { name: 'Kristine Steine', img: kristineImg },
            { name: 'Hans Kristian Henriksen', img: hanskristianImg },
        ],
    },
    {
        id: 4,
        name: 'Faxbjørn',
        members: [
            { name: 'Asbjørn Steinskog', img: asbjørnImg },
            { name: 'Erlend Faxvaag', img: erlendImg },
        ],
    }
];

export const matches = [
    {
        id: 1,
        teams: [
            teams.find(team => team.name === "Heinkunnskap"),
            teams.find(team => team.name === "Jonni"),
        ],
        date: new Date('2021-02-16T18:00:00'),
        score: [
            {
                team: teams.find(team => team.name === "Jonni").name,
                points: 25,
                winner: false
            },
            {
                team: teams.find(team => team.name === "Heinkunnskap").name,
                points: 29,
                winner: true
            }
        ]
    },
    {
        id: 2,
        teams: [
            teams.find(team => team.name === "Hans Kristine"),
            teams.find(team => team.name === "Faxbjørn"),
        ],
        date: new Date('2021-03-03T16:30:00'),
        score: undefined
    },
];
