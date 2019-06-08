const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'VisualArtwork',
    name: 'Infers Group - Arting Health',
    description: 'Mental Health - Depression',
    datePublished: '05 June 2019',
    about: {
        '@context': 'http://schema.org',
        '@type': 'Thing',
        name: 'Infers Group - Arting Health: Science Communication and Public Engagement Project on Mental Health',
        description: 'A collaborative science communication and public engagement project on depression between artists, scientists and community members by Infers Group'
    },
    image: 'https://unpkg.com/vamtiger-mental-health-botswana-json-ld@latest/vamtiger-mental-health-botswana-2018-json-ld.jpg',
    producer: [
        {
            '@type': 'Organization',
            name: 'Infers Group',
            description: 'Social Entrepreneurship, Science Communication, Public Engagement, Art Science and Community Collaboration',
            url: 'http://artinghealth.infersgroup.com',
            email: 'mailto:info@infersgroup.com'
        },
        {
            '@type': 'Person',
            name: 'Abraham Mamela',
            description: 'Social Entrepreneurship, Science Communication and Public Engagement Professional',
            disambiguatingDescription: 'Creative concept for Arting Health, founder and CEO of Infers Group',
        }
    ],
    creator: [
        {
            '@type': 'Organization',
            name: 'Infers Group',
            description: 'Social Entrepreneurship, Science Communication, Public Engagement, Art Science and Community Collaboration',
            url: 'http://artinghealth.infersgroup.com',
            email: 'mailto:info@infersgroup.com'
        },
        {
            '@type': 'Person',
            name: 'Abraham Mamela',
            description: 'Social Entrepreneurship, Science Communication and Public Engagement Professional',
            disambiguatingDescription: 'Creative Concept for Arting Health, founder and CEO of Infers Group',
        }
    ],
    sponsor: {
        '@type': 'Organization',
        name: 'Welcome',
        url: 'https://wellcome.ac.uk'
    },
    keywords: 'Infers Group, Arting Health, Art Health, Health Art, Sciart, Scientific Art, Science Art, Art Science, Science Communication, Public Engagement, Social Entrepreneurship'
};

export default [
    jsonLd
];
