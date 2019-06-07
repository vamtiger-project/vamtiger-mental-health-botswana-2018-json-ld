const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'VisualArtwork',
    name: 'Arting Health',
    description: 'Mental Health - Depression',
    datePublished: '05 June 2019',
    about: {
        '@context': 'http://schema.org',
        '@type': 'Thing',
        name: 'Infers Group - Arting Health: Science Communication and Public Engagement Project on Mental Health',
        description: 'A collaborative science communication and public engagement project on depression between artists, scientists and community members by Infers Group'
    },
    image: 'https://unpkg.com/vamtiger-mental-health-botswana-json-ld@latest/vamtiger-mental-health-botswana-2018-json-ld.jpg',
    founder: [
        {
            '@type': 'Person',
            name: 'Abraham Mamela',
            description: 'Social Entrepreneur',
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
            description: 'Social Entrepreneurship, Science Communication, Public Engagement, Art Science and Community Collaboration',
            url: 'http://artinghealth.infersgroup.com',
            email: 'mailto:info@infersgroup.com'
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
