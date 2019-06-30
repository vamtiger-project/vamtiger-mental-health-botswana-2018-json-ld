"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_1 = require("./text");
var jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'VisualArtwork',
    name: 'Infers Group - Arting Health',
    description: 'Mental Health - Depression',
    datePublished: '05 June 2019',
    about: {
        '@context': 'http://schema.org',
        '@type': 'Thing',
        name: text_1.default['about-name.txt'],
        description: text_1.default['about-description.txt']
    },
    image: 'https://vamtiger-project.github.io/vamtiger-mental-health-botswana-json-ld/vamtiger-mental-health-botswana-2018-json-ld.jpg',
    producer: true,
    creator: true,
    funder: true,
    keywords: text_1.default['keywords.txt']
};
exports.default = [
    jsonLd
];
//# sourceMappingURL=json-ld.js.map