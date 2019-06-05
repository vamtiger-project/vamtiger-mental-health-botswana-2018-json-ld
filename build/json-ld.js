"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonLd = {
    '@context': 'http://schema.org/',
    '@type': 'VisualArtwork',
    name: 'Mental Health',
    description: 'Depression',
    datePublished: '05 June 2019',
    image: 'https://unpkg.com/vamtiger-mental-health-botswana-2018-json-ld@latest/vamtiger-mental-health-botswana-2018-json-ld.jpg',
    founder: [
        {
            '@type': 'Person',
            name: 'Abraham Mamela',
            disambiguatingDescription: 'Creative Concept for Arting Health, founder and CEO of Infers Group',
            hasOccupation: {
                '@type': 'Occupation',
                name: 'Science Communicator, Project Lead for Arting Health and CEO of Infers Group'
            }
        },
        {
            '@type': 'Person',
            name: 'James-Alex Matthews',
            disambiguatingDescription: 'Digital Engagement for Arting Health, founder and CTO of Infers Group',
            hasOccupation: {
                '@type': 'Occupation',
                name: 'Science Communicator, Digital Engagement Lead for Arting Health and CTO of Infers Group'
            }
        }
    ],
    creator: [
        {
            '@type': 'Organization',
            name: 'Infers Group',
            url: 'http://artinghealth.infersgroup.com',
            email: 'info(at)infersgroup.com'
        }
    ],
    sponsor: {
        '@type': 'Organization',
        name: 'Welcome',
        url: 'https://wellcome.ac.uk'
    }
};
exports.default = [
    jsonLd
];
//# sourceMappingURL=json-ld.js.map