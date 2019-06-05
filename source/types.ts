export enum ScriptType {
    jsonLd = 'application/ld+json',
    json = 'application/json'
}

export enum Resource {
    caption = 'https://unpkg.com/vamtiger-arting-health-logo-json-ld@latest'
}

export interface IAnyObject {
    [key: string]: any;
}

export interface ILoadScript {
    type: ScriptType;
    url: string;
    data: IAnyObject;
}

export const url = 'https://unpkg.com/vamtiger-mental-health-botswana-json-ld@latest';