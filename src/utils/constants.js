import heinImg from '../assets/hein.jpg';
import jobiImg from '../assets/jobi.jpg';
import unniImg from '../assets/unni.jpg';
import kristoferImg from '../assets/kristofer.jpg';
import kristineImg from '../assets/kristine.jpg';
import hanskristianImg from '../assets/hanskristian.jpg';
import asbjørnImg from '../assets/asbjørn.jpg';
import erlendImg from '../assets/erlend.jpg';
import alexanderImg from '../assets/alexander.jpg';
import emilImg from '../assets/emil.jpg';
import halvorImg from '../assets/halvor.jpg';
import hermanImg from '../assets/herman.jpg';
import mathiasImg from '../assets/mathias.jpg';
import matsImg from '../assets/mats.jpg';
import nemanjaImg from '../assets/nemanja.jpg';
import øyvindImg from '../assets/øyvind.jpg';
import ragnhildImg from '../assets/ragnhild.jpg';
import rasmusImg from '../assets/rasmus.jpg';
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
    },
    {
        id: 5,
        name: 'Nemanja Mathias',
        members: [
            { name: 'Nemanja Aksic', img: nemanjaImg },
            { name: 'Mathias Rørvik', img: mathiasImg },
        ],
    },
    {
        id: 6,
        name: 'Ragnhild Herman',
        members: [
            { name: 'Ragnhild Liven', img: ragnhildImg },
            { name: 'Herman Slyngstadli', img: hermanImg },
        ],
    },
    {
        id: 7,
        name: 'Emil Øyvind',
        members: [
            { name: 'Emil Staurset', img: emilImg },
            { name: 'Øyvind Skaar', img: øyvindImg },
        ],
    },
    {
        id: 8,
        name: 'Rasmus Mats',
        members: [
            { name: 'Rasmus Bauck', img: rasmusImg },
            { name: 'Mats Knutsen-Valen', img: matsImg },
        ],
    },
    {
        id: 9,
        name: 'Alexander Halvor',
        members: [
            { name: 'Alexander Vassbotn Røyne-Helgesen', img: alexanderImg },
            { name: 'Halvor Lund', img: halvorImg },
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
    {
        id: 3,
        teams: [
            teams.find(team => team.name === "Nemanja Mathias"),
            teams.find(team => team.name === "Ragnhild Herman"),
        ],
        date: undefined,
        score: undefined
    },
    {
        id: 4,
        teams: [
            teams.find(team => team.name === "Emil Øyvind"),
            teams.find(team => team.name === "Rasmus Mats"),
        ],
        date: undefined,
        score: undefined
    },
    {
        id: 5,
        teams: [
            teams.find(team => team.name === "Alexander Halvor"),
            teams.find(team => team.name === "Heinkunnskap"),
        ],
        date: undefined,
        score: undefined
    },
];
