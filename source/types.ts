export enum ScriptType {
    jsonLd = 'application/ld+json',
    json = 'application/json'
}

export enum Resource {
    svgCaption = 'https://vamtiger-project.github.io/vamtiger-arting-health-logo-json-ld/build/vamtiger-arting-health-logo-json-ld.js'
}

export interface IAnyObject {
    [key: string]: any;
}

export interface ILoadScript {
    type: ScriptType;
    url: string;
    data: IAnyObject;
}

export const url = 'https://vamtiger-project.github.io/vamtiger-mental-health-botswana-json-ld/build/vamtiger-mental-health-botswana-2018-json-ld.js';