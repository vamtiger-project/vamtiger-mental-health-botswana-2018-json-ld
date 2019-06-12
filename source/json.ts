import {
    Resource
} from './types';

const { svgCaption } = Resource;
const producer = [
    'https://cdn.jsdelivr.net/npm/vamtiger-organization-infers-group-json-ld@latest/build/vamtiger-organization-infers-group-json-ld.js',
    'https://cdn.jsdelivr.net/npm/vamtiger-person-abraham-mamela-json-ld@latest/build/vamtiger-person-abraham-mamela-json-ld.js'
];
const creator = [
    ...producer
];
const funder = [
    'https://cdn.jsdelivr.net/npm/vamtiger-organization-welcome-json-ld@latest/build/vamtiger-organization-welcome-json-ld.js'
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
