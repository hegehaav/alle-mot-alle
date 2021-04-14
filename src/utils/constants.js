import alexanderImg from '../assets/alexander.jpg';
import asbjørnImg from '../assets/asbjørn.jpg';
import emilImg from '../assets/emil.jpg';
import erlendImg from '../assets/erlend.jpg';
import halvorImg from '../assets/halvor.jpg';
import hanskristianImg from '../assets/hanskristian.jpg';
import heinImg from '../assets/hein.jpg';
import hermanImg from '../assets/herman.jpg';
import jobiImg from '../assets/jobi.jpg';
import kristineImg from '../assets/kristine.jpg';
import kristoferImg from '../assets/kristofer.jpg';
import mathiasImg from '../assets/mathias.jpg';
import matsImg from '../assets/mats.jpg';
import nemanjaImg from '../assets/nemanja.jpg';
import unniImg from '../assets/unni.jpg';
import øyvindImg from '../assets/øyvind.jpg';
import ragnhildImg from '../assets/ragnhild.jpg';
import rasmusImg from '../assets/rasmus.jpg';
export const teams = [
    {
        id: 1,
        name: 'Hein og Kristofer',
        members: [
            { name: 'Hein Haraldsen', img: heinImg },
            { name: 'Kristofer Selbekk', img: kristoferImg },
        ],
    },
    {
        id: 2,
        name: 'Jobi og Unni',
        members: [
            { name: 'Jørn Ola Birkeland', img: jobiImg },
            { name: 'Unni Nyhamar Hinkel', img: unniImg },
        ],
    },
    {
        id: 3,
        name: 'Kristine og Hans Kristian',
        members: [
            { name: 'Kristine Steine', img: kristineImg },
            { name: 'Hans Kristian Henriksen', img: hanskristianImg },
        ],
    },
    {
        id: 4,
        name: 'Asbjørn og Erlend',
        members: [
            { name: 'Asbjørn Steinskog', img: asbjørnImg },
            { name: 'Erlend Faxvaag', img: erlendImg },
        ],
    },
    {
        id: 5,
        name: 'Nemanja og Mathias',
        members: [
            { name: 'Nemanja Aksic', img: nemanjaImg },
            { name: 'Mathias Rørvik', img: mathiasImg },
        ],
    },
    {
        id: 6,
        name: 'Ragnhild og Herman',
        members: [
            { name: 'Ragnhild Liven', img: ragnhildImg },
            { name: 'Herman Slyngstadli', img: hermanImg },
        ],
    },
    {
        id: 7,
        name: 'Emil og Øyvind',
        members: [
            { name: 'Emil Staurset', img: emilImg },
            { name: 'Øyvind Skaar', img: øyvindImg },
        ],
    },
    {
        id: 8,
        name: 'Rasmus og Mats',
        members: [
            { name: 'Rasmus Bauck', img: rasmusImg },
            { name: 'Mats Knutsen-Valen', img: matsImg },
        ],
    },
    {
        id: 9,
        name: 'Alexander og Halvor',
        members: [
            { name: 'Alexander Vassbotn Røyne-Helgesen', img: alexanderImg },
            { name: 'Halvor Lund', img: halvorImg },
        ],
    },
];

export const matches = [
    {
        id: 1,
        teams: [
            teams.find((team) => team.name === 'Hein og Kristofer'),
            teams.find((team) => team.name === 'Jobi og Unni'),
        ],
        date: new Date('2021-02-16T18:00:00'),
        score: [29, 25],
    },
    {
        id: 2,
        teams: [
            teams.find((team) => team.name === 'Kristine og Hans Kristian'),
            teams.find((team) => team.name === 'Asbjørn og Erlend'),
        ],
        date: new Date('2021-03-03T16:30:00'),
        score: [25, 16],
    },
    {
        id: 3,
        teams: [
            teams.find((team) => team.name === 'Nemanja og Mathias'),
            teams.find((team) => team.name === 'Ragnhild og Herman'),
        ],
        date: new Date('2021-03-15T19:00:00'),
        score: [25, 18],
    },
    {
        id: 4,
        teams: [
            teams.find((team) => team.name === 'Alexander og Halvor'),
            teams.find((team) => team.name === 'Hein og Kristofer'),
        ],
        date: new Date('2021-04-07T18:00:00'),
        score: [24, 17],
    },
    {
        id: 5,
        teams: [
            teams.find((team) => team.name === 'Emil og Øyvind'),
            teams.find((team) => team.name === 'Rasmus og Mats'),
        ],
        date: new Date('2021-04-08T18:00:00'),
        score: [21, 26],
    },
    {
        id: 6,
        teams: [
            teams.find((team) => team.name === 'Kristine og Hans Kristian'),
            teams.find((team) => team.name === 'Nemanja og Mathias'),
        ],
        date: new Date('2021-04-13T19:00:00'),
        score: [37, 40],
    },
    {
        id: 7,
        teams: [
            teams.find((team) => team.name === 'Alexander og Halvor'),
            teams.find((team) => team.name === 'Rasmus og Mats'),

        ],
        date: new Date('2021-04-22T18:00:00'),
        score: undefined,
    }
];

export const semifinale2 = {
    id: 0,
    teams: [
        teams.find((team) => team.name === 'Alexander og Halvor'),
        teams.find((team) => team.name === 'Rasmus og Mats'),

    ],
    date: new Date('2021-04-22T18:00:00'),
    score: undefined,
};

export const finale = {
    id: 0,
    teams: [
        {
            id: 0,
            name: 'Nemanja og Mathias',
            members: [{ name: 'tba' }, { name: 'tba' }],
        },
        {
            id: 0,
            name: 'Vinner',
            members: [{ name: 'tbd' }, { name: 'tbd' }],
        },
    ],
    date: "TBA",
    score: undefined,
};
