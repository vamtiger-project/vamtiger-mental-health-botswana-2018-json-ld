import Text from './text';

const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'VisualArtwork',
    name: 'Infers Group - Arting Health',
    description: 'Mental Health - Depression',
    datePublished: '05 June 2019',
    about: {
        '@context': 'http://schema.org',
        '@type': 'Thing',
        name: Text['about-name.txt'],
        description: Text['about-description.txt']
    },
    image: 'https://vamtiger-project.github.io/vamtiger-mental-health-botswana-json-ld/vamtiger-mental-health-botswana-2018-json-ld.jpg',
    producer: true,
    creator: true,
    funder: true,
    keywords: Text['keywords.txt']
};

export default [
    jsonLd
];
