const jsonLd = {
    '@context': 'http://schema.org/',
    '@type': 'VisualArtwork',
    name: 'Arting Health',
    description: 'Mental Health - Depression',
    datePublished: '05 June 2019',
    image: 'https://unpkg.com/vamtiger-mental-health-botswana-json-ld@latest/vamtiger-mental-health-botswana-2018-json-ld.jpg',
    founder: [
        {
            '@type': 'Person',
            name: 'Abraham Mamela',
            disambiguatingDescription: 'Creative Concept for Arting Health, founder and CEO of Infers Group',
            hasOccupation: {
                '@type': 'Occupation',
                name: 'Science Communicator, Project Lead for Arting Health and CEO of Infers Group'
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

export default [
    jsonLd
];
