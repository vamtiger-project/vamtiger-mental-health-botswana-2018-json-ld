import {
    Resource
} from './types';

const { svgCaption } = Resource;
const producer = [
    'https://unpkg.com/vamtiger-organization-infers-group-json-ld',
    'https://unpkg.com/vamtiger-person-abraham-mamela-json-ld'
];
const creator = [
    ...producer
];
const funder = [
    'https://unpkg.com/vamtiger-organization-welcome-json-ld'
];

export default {
    svgCaption,
    jsonLd: [
        {
            index: 0,
            fields: {
                producer,
                creator,
                funder
            }
        }
    ]
};
